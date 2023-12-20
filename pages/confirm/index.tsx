import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { useQuery, gql } from "@apollo/client";
import client from "../../apollo/apolloClient";
import { useCart } from "react-use-cart";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carritoAux = [...items]; // Crear una copia del carrito antes de limpiarlo

        const { data } = await client.query({
          query: COMMIT_PAYMENT_QUERY,
          variables: { token_ws: router.query.token_ws as string },
        });

        setTransactionStatus(data.commitPayment.status);
        emptyCart(); // Limpia el carrito después de obtener la información

        // Acciones adicionales con la variable auxiliar (carritoAux) si es necesario
        console.log("Items antes de limpiar el carrito:", carritoAux);
      } catch (error) {
        console.error("Error en la consulta:", error);
      }
    };

    if (router.query.token_ws) {
      fetchData();
    }
  }, [router.query.token_ws]);

  return (
    <div>
      <h1>Confirmación de Pago</h1>
      <p>Token_ws: {router.query.token_ws}</p>
      {transactionStatus === "AUTHORIZED" ? (
        <div>
          <p>Compra pagada y confirmada</p>
          <h2>Items comprados:</h2>
          <ul>
            {items.map((carritoAux) => (
              <li key={carritoAux.id}>
                {carritoAux.name} - Cantidad: {carritoAux.quantity}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Pago no efectuado</p>
      )}
    </div>
  );
};

export default ConfirmPage;