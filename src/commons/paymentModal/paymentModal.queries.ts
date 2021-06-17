import { gql } from "@apollo/client";

export const CREATE_POINT_TRANSACTION_OFLOADING = gql`
		mutation createPointTransactionOfLoading($impUid: ID!) {
			createPointTransactionOfLoading(impUid: $impUid) {
				status
			}
		}
	`;
