import { useQuery, gql } from '@apollo/client';

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

const useCommitPaymentQuery = (token_ws: string | null) => {
  return useQuery(COMMIT_PAYMENT_QUERY, {
    variables: { token_ws: token_ws || "" },
    skip: !token_ws,
  });
};

export default useCommitPaymentQuery;
