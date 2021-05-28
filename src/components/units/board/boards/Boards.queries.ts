import { gql } from "@apollo/client";

//* 모든 게시글 가져오기
export const FETCH_BOARDS = gql`
	query fetchBoards ($page:Int){
		fetchBoards(page:$page) {
			writer
			title
			contents
			createdAt
			_id
		}
	}
`;

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
