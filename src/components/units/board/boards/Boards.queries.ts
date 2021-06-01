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

//* 모든 게시글 수 가져오기
export const FETCH_BOARDS_COUNT = gql`
query {
	fetchBoardsCount
}
`

