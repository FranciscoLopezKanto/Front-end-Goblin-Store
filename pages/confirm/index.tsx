import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { useQuery, gql } from "@apollo/client";
import client from "../../apollo/apolloClient";
import { useCart } from "react-use-cart";
import styles from "../../styles/ConfirmPage.module.css"; // Asegúrate de tener un archivo ConfirmPage.module.css con los estilos

const COMMIT_PAYMENT_QUERY = gql`
  query CommitPayment($token_ws: String!) {
    commitPayment(token: $token_ws) {
      vci
      amount
      status
      buyOrder
      sessionId
    }
  }
`;

const ConfirmPage: React.FC = () => {
  const router = useRouter();
  const [transactionStatus, setTransactionStatus] = useState<string | null>(null);
  const { items, emptyCart } = useCart();
  const [carritoAux, setCarritoAux] = useState<typeof items | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carritoAuxCopy = [...items];

        const { data } = await client.query({
          query: COMMIT_PAYMENT_QUERY,
          variables: { token_ws: router.query.token_ws as string },
        });

        setTransactionStatus(data.commitPayment.status);

        console.log("Items antes de limpiar el carrito:", carritoAuxCopy);

        emptyCart();
        
        setCarritoAux(carritoAuxCopy);
      } catch (error) {
        console.error("Error en la consulta:", error);
      }
    };

    if (router.query.token_ws) {
      fetchData();
    }
  }, [router.query.token_ws]);


  return (
    <div className={styles.confirmPage}>
      {transactionStatus === "AUTHORIZED" ? (
        <div className={styles.successMessage}>
          <img
            src="https://i.postimg.cc/QtnFpsVQ/imagen-2023-12-21-002029807.png"
            alt="Success Image"
            style={{ width: '500px', height: '400px' }} // Ajusta el tamaño según lo necesites
          />
          <p>Compra pagada y confirmada</p>
          <h2>Items comprados:</h2>
          <ul>
            {carritoAux &&
              carritoAux.map((item) => (
                <li key={item.id}>
                  {item.name} - Cantidad: {item.quantity}
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <div className={styles.errorMessage}>
          <img
            src="https://i.postimg.cc/Y0nzGJBZ/imagen-2023-12-21-001456186.png"
            alt="Error Image"
            style={{ width: '500px', height: '400px' }} // Ajusta el tamaño según lo necesites
          />
          <p>Pago no efectuado por tarjeta expirada o sin cupo</p>
        </div>
      )}
    </div>
  );
};

export default ConfirmPage;
