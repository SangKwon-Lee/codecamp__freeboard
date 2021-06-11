import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTIONS = gql`
	query fetchUseditemQuestions($useditemId: ID!, $page:Int) {
		fetchUseditemQuestions(useditemId: $useditemId, page:$page){
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

export const CREATE_USED_ITEM_QUESTION = gql`
	mutation createUseditemQuestion($createUseditemQuestionInput:CreateUseditemQuestionInput!, $useditemId: ID!){
		createUseditemQuestion(createUseditemQuestionInput: $createUseditemQuestionInput, useditemId:$useditemId){
			_id
			contents
			createdAt
		}
	}
`

