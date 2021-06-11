import { gql } from "@apollo/client";


export const DELETE_USED_ITEM_QUESTION = gql`
mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
	deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
}
`
export const UPDATE_USED_ITEM_QUESTION = gql`
mutation updateUseditemQuestion($updateUseditemQuestionInput:UpdateUseditemQuestionInput!, $useditemQuestionId: ID!) {
	updateUseditemQuestion(updateUseditemQuestionInput: $updateUseditemQuestionInput,  useditemQuestionId: $useditemQuestionId){
		_id
		contents
		createdAt
	}
}
`

export const FETCH_USED_ITEM_QUESTIONS = gql`
	query fetchUseditemQuestions($useditemId: ID!) {
		fetchUseditemQuestions(useditemId: $useditemId,){
			_id
			contents
			createdAt
			user{
				_id
				email
				name
				createdAt
			}
		}
	}
`;


export const FETCH_USED_ITEM_QUESTIONS_ANSWERS = gql`
	query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
		fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId,){
			_id
			contents
			createdAt
			user{
				_id
				email
				name
				createdAt
			}
		}
	}
`;