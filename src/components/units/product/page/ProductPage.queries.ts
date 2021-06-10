import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
	query fetchUseditem($useditemId: ID!) {
		fetchUseditem(useditemId: $useditemId) {
			name
			remarks
			contents
			price
			tags
			seller{
				email
				_id
				name
			}
			createdAt
			updatedAt
		}
	}
`
export const TOGGLES_USED_ITEM_PICK = gql`
	mutation toggleUseditemPick($useditemId: ID!){
		toggleUseditemPick(useditemId: $useditemId)	
		
	}
`