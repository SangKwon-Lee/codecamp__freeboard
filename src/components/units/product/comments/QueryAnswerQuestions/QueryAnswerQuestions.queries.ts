import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTIONS_ANSWERS = gql`
	query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
		fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId,){
			_id
			user{
				_id
				email
				name
			}
			contents
			createdAt
		}
	}
`;

export const DELETE_USED_ITEM_QUESTION_ANSWER = gql`
	mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!){
		deleteUseditemQuestionAnswer(useditemQuestionAnswerId:$useditemQuestionAnswerId)
	}
`

export const UPDATE_USED_ITEM_QUESTION_ANSWER = gql`
	mutation updateUseditemQuestionAnswer($updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!, $useditemQuestionAnswerId: ID!){
		updateUseditemQuestionAnswer(updateUseditemQuestionAnswerInput:$updateUseditemQuestionAnswerInput,useditemQuestionAnswerId:$useditemQuestionAnswerId ){
			_id
			contents
			user{
				_id
				email
				name
				createdAt
			}
		}
	}

`
export const CREATE_USER_ITEM_QUESTIONS_ANSWERS = gql`
	mutation createUseditemQuestionAnswer($createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!, $useditemQuestionId:ID!){
	createUseditemQuestionAnswer(createUseditemQuestionAnswerInput:$createUseditemQuestionAnswerInput, useditemQuestionId:$useditemQuestionId){
		_id
		contents
    
		user{
			_id
			email
			name
		}
		createdAt
	}
}
`