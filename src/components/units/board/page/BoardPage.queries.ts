import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
	query fetchBoard($boardId: ID!) {
		fetchBoard(boardId: $boardId) {
			writer
			title
			contents
			createdAt
			youtubeUrl
			likeCount
			dislikeCount
			updatedAt
		}
	}
`;

//* 모든 게시글 가져오기
export const FETCH_BOARDS = gql`
	query fetchBoards {
		fetchBoards {
			writer
		}
	}
`;


export const LIKE_BOARD = gql`

mutation likeBoard($boardId : ID!) {
	likeBoard(boardId:$boardId)
}
`

export const DISLIKE_BOARD = gql`

mutation dislikeBoard($boardId : ID!) {
	dislikeBoard(boardId:$boardId)
}
`


// `