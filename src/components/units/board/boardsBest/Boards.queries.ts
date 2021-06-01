import { gql } from "@apollo/client";


export const FETCH_BEST_BOARDS = gql`
query fetchBoardsOfTheBest{
  fetchBoardsOfTheBest{
    _id
		writer
    title
    contents
    likeCount
    createdAt
  }
}`
