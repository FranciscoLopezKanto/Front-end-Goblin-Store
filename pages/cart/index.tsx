import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Cart.module.css";
import { useCart } from "react-use-cart";
import { useQuery, gql } from "@apollo/client";
import client from "../../apollo/apolloClient";

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
  } = useCart();

  const [paymentError, setPaymentError] = useState<null | string>(null);
  const [paymentToken, setPaymentToken] = useState<null | string>(null);

  useEffect(() => {
    // Puedes agregar lógica aquí si es necesario
  }, [paymentToken]);
  console.log(paymentToken);

  const handleCheckout = async () => {
    try {
      const { data: paymentData } = await client.query<CreatePaymentData>({
        query: CREATE_PAYMENT_QUERY,
        variables: { monto: cartTotal.toString(), description: "Compra en línea" },
      });

      const token = paymentData?.createPayment?.token;
      setPaymentToken(token);
      console.log('Token de pago:', token);

      // Agrega el token al formulario
    const form = document.getElementById("webpayForm") as HTMLFormElement;
    const tokenInput = document.createElement("input");
    tokenInput.type = "hidden";
    tokenInput.name = "token_ws";
    tokenInput.value = token || ""; // Asegúrate de manejar el caso en que el token sea nulo
    form.appendChild(tokenInput);

    // Ahora puedes enviar el formulario al servidor de Webpay
    setTimeout(() => {
      form.submit();
    }, 500);
    } catch (error: any) {
      setPaymentError(error.message);
      console.error('Error al realizar la consulta de pago:', error);
    }
  };

  const handleFinalizarCompra = () => {
    // Llamar directamente a handleCheckout al hacer clic en "Finalizar compra"
    handleCheckout();
  };

  return (
    <div className={styles.wrapper}>
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
    </div>
  );
}

export default CartContent;
