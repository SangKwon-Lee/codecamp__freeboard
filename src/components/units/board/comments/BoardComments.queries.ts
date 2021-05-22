import { gql } from "@apollo/client";

export const FETCH_BOARD_COMMENTS = gql`
	query fetchBoardComments($boardId: ID!) {
		fetchBoardComments(boardId:  $boardId){
			writer
      contents
      _id
      rating
			createdAt
			updatedAt
		}
	}
  
`;


export const CREATE_BOARD_COMMENT = gql`
	mutation createBoardComment($createBoardCommentInput:CreateBoardCommentInput!, $boardId: ID!){
		createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId:$boardId){
			writer
			contents
			rating
			_id
			createdAt
		}
	}

`