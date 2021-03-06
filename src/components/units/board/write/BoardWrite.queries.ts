import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
	mutation createBoard($createBoardInput: CreateBoardInput!) {
		createBoard(createBoardInput: $createBoardInput) {
			title
			writer
			_id
	
		}
	}
`;

export const FETCH_BOARD = gql`
	query fetchBoard($boardId: ID!) {
		fetchBoard(boardId: $boardId) {
			writer
			title
			contents
			youtubeUrl
			createdAt
			images
		}
	}
`;

export const UPDATE_BOARD = gql`
	mutation updateBoard($updateBoardInput: UpdateBoardInput!, $password:String ,$boardId: ID!){
  	updateBoard(updateBoardInput:$updateBoardInput
    password:$password,
    boardId:$boardId){
    _id
    writer
		title
		youtubeUrl
    contents
  }
}
`
export const UPLOAD_FILE = gql`
		mutation uploadFile($file: Upload!) {
			uploadFile(file: $file) {
				url
				_id
				size
				isUsed
			}
		}
	`;
