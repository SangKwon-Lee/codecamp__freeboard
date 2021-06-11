import { gql } from "@apollo/client";

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

export const FETCH_USED_ITEM_QUESTIONS_ANSWERS = gql`
	query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
		fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId,){
			_id
			contents
			createdAt
		}
	}
`;

