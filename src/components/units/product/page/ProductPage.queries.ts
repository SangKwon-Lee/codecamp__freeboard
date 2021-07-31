import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
	query fetchUseditem($useditemId: ID!) {
		fetchUseditem(useditemId: $useditemId) {
			name
			remarks
			_id
			contents
			price
			tags
			useditemAddress{
				id
				zipcode
				address
				addressDetail
				lat
				lng
			}
			soldAt
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

export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!){
	createPointTransactionOfBuyingAndSelling(useritemId: $useritemId){
		_id
		name
		remarks
		contents
		price
		tags
		seller{
			_id
			email
			name
		}
	}
}

`