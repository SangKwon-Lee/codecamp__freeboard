import { gql } from "@apollo/client";

//* 모든 게시글 가져오기
export const FETCH_USED_ITEMS = gql`
	query fetchUseditems($page: Int, $search:String){
		fetchUseditems(page:$page, search:$search ){
			_id
			name
			remarks
			contents
			seller{
				name
				_id
				email
			}
			price
			tags
			createdAt
			soldAt
		}
	}
	
`;

//* 모든 게시글 수 가져오기
export const FETCH_USED_ITEMS_COUNT = gql`
query fetchBoardsCount($search: String){
	fetchBoardsCount(search:$search)
}
`

