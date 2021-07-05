import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS = gql`
query fetchPointTransactions{
    fetchPointTransactions{
      _id
    amount
    status
    impUid
    balance
    createdAt
    }
  }
`

export const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading{
    fetchPointTransactionsOfLoading{
      _id
    amount
    status
    impUid
    balance
    createdAt
    }
  }
`

export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying{
    fetchPointTransactionsOfBuying{
      _id
    amount
    status
    useditem{
      name
    }
    balance
    createdAt
    }
  }
`

export const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query{
    fetchPointTransactionsOfSelling{
      _id
      amount
      balance
      status
      impUid
      createdAt
        useditem{
      name
    }
  }
}
`