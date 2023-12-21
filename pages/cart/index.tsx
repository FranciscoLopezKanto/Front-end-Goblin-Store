import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Cart.module.css";
import { useCart } from "react-use-cart";
import { useQuery, gql } from "@apollo/client";
import client from "../../apollo/apolloClient";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity?: number;
}

interface CreatePaymentData {
  createPayment: {
    token: string;
  };
}

const CREATE_PAYMENT_QUERY = gql`
  query CreatePayment($monto: String!, $description: String!) {
    createPayment(monto: $monto, description: $description) {
      token
    }
  }
`;

function CartContent() {
  const {
    totalUniqueItems,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  console.log(items);
  const [paymentError, setPaymentError] = useState<null | string>(null);
  const [paymentToken, setPaymentToken] = useState<null | string>(null);
  const [userInfo, setUserInfo] = useState<{
    firstName: string;
    lastName: string;
  } | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const userInfoString = localStorage.getItem("user_info");
    if (userInfoString) {
      const user = JSON.parse(userInfoString);
      setUserInfo(user);
    }
  }, []);

  const notifyError = (message: string) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const notifyWarning = (message: string) => {
    toast.warn(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const stock = async () => {
    try {
      // Verificar si hay productos fuera de stock en el carrito
      const outOfStockItem = items.find((item) => item.name === "Nooo Pablo Nooo" && item.quantity !== undefined && item.quantity >= 1);
      console.log(outOfStockItem);
      if (outOfStockItem) {
        notifyWarning("¡No hay stock para 'Nooo Pablo Nooo'! Se eliminará del carrito.");
        removeItem(outOfStockItem.id);
        return true ;
      }
    } catch (error) {
      console.error('Error al realizar la consulta de stock:', error);
    }
  };

  const handleCheckout = async () => {
    try {
      
      const itemRemoved = await stock();

      if (itemRemoved) {
      // Si se eliminó un elemento, puedes decidir cómo manejar el flujo
      // Puedes detener aquí o continuar con el proceso de pago
        return;
     }
      if (!userInfo && (!name || !isValidEmail(email) || !address)) {
        notifyError("Rellena todos los campos correctamente antes de continuar con el pago");
        setShowError(true);
        return;
      }

      setShowError(false);

      const { data: paymentData } = await client.query<CreatePaymentData>({
        query: CREATE_PAYMENT_QUERY,
        variables: { monto: cartTotal.toString(), description: "Compra en línea" },
      });

      const token = paymentData?.createPayment?.token;
      setPaymentToken(token);

      const form = document.getElementById("webpayForm") as HTMLFormElement;
      const tokenInput = document.createElement("input");
      tokenInput.type = "hidden";
      tokenInput.name = "token_ws";
      tokenInput.value = token || "";
      form.appendChild(tokenInput);

      setTimeout(() => {
        form.submit();
      }, 500);
    } catch (error: any) {
      setPaymentError(error.message);
      console.error('Error al realizar la consulta de pago:', error);
    }
  };

  const handleFinalizarCompra = () => {
    handleCheckout();
  };

  const isValidEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };
  return (
    <div className={styles.wrapper}>
    {totalUniqueItems === 0 ? (
      <div className={`${styles.emptyCartContainer} ${styles.centeredContent}`}>
        <p className={styles.emptyCartText}>¡Tu carrito está vacío!</p>
        <button className={styles.btnFinalizar} onClick={() => router.push("/")}>
          Volver al inicio
        </button>
      </div>
    ) : (
        <>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th className={styles.th}>Producto</th>
                <th className={styles.th}>Precio</th>
                <th className={styles.th}>Cantidad</th>
                <th className={styles.th}>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                const total = item.price * (item.quantity || 1);
                return (
                  <tr key={item.id}>
                    <td className={styles.td}>
                      <div className={styles.productInfo}>
                        <Image width={200} height={250} src={`/poleras/${item.id}.png`} />
                        <div className={styles.productName}>{item.name}</div>
                      </div>
                    </td>
                    <td className={styles.td}>CLP$ {item.price}</td>
                    <td className={styles.td}>
                      <div className={styles.qtdWrapper}>
                        <button
                          onClick={() => updateItemQuantity(item.id, (item.quantity || 1) - 1)}
                          className={styles.button1}
                        >
                          -
                        </button>
                        <div className={styles.qtd}>
                          {item.quantity?.toString() || "1"}
                        </div>
                        <button
                          onClick={() => updateItemQuantity(item.id, (item.quantity || 0) + 1)}
                          className={styles.button2}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className={styles.td}>CLP$ {total}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className={styles.checkoutBox}>
            {!userInfo && (
              <div className={styles.additionalFields}>
                <div className={styles.fieldGroup}>
                  <label>Nombre:</label>
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label>Correo electrónico:</label>
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label>Dirección:</label>
                  <input
                    type="text"
                    placeholder="Dirección"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
            )}
            <div>
              <h3>Items en el carrito: {totalUniqueItems}</h3>
            </div>
            <div className={styles.subtotal}>
              Subtotal: <div>CLP$ {cartTotal}</div>
            </div>
            <hr />
            <div className={styles.total}>
              Total: <h3>CLP$ {cartTotal}</h3>
            </div>
            <button
              className={styles.btnFinalizar}
              onClick={() => handleFinalizarCompra()}
            >
              Finalizar compra
            </button>
          </div>
        </>
      )}
      {/* Formulario */}
      <form
        id="webpayForm"
        action="https://webpay3gint.transbank.cl/webpayserver/initTransaction"
        method="POST"
      >
        <input
          type="hidden"
          name="token_ws"
          value={paymentToken || "01ab22eb31c0e1668084ac4ff45c4ceeffb4d20e73d19434fe9173ddbd8d78d8"}
        />
      </form>
      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* Modal de error */}
      {showError && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={() => setShowError(false)}>
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartContent;
