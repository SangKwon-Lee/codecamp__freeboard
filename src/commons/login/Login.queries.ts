import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!){
    loginUser(email: $email, password: $password){
      accessToken
    }
  }
`


export const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn{
    _id
    name
    email
    createdAt
    updatedAt
    userPoint{
      _id
      amount
      createdAt
      updatedAt
    }
  }
}
`
