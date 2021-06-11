import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";


export const CommentsUpdatenputWrapper = styled.div`
display: flex;
width:100%;
/* height:189px; */

margin-bottom: 40px;
margin-top:40px;


`


export const WriterStarWrapper = styled.div`
	display:flex;
	justify-content: space-between;
	width: 528px;
	align-items: center;
	margin-bottom:20px;
`
export const WriterWrapper = styled.div`
	display: flex;
	width:384px;
	justify-content: space-between;
`

export const WriterInput = styled.input`
	width:180px;
	height: 52px;
	outline: none;
	border:1px solid rgba(0,0,0,0.1);
	padding:14px 20px;
`

export const PasswordInput = styled.input`
	width:180px;
	height: 52px;
	outline: none;
	border:1px solid rgba(0,0,0,0.1);
	padding:14px 20px;
`


export const StarWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 120px;
	align-items: center;
	margin-left:14px;

`

export const StarImg = styled.img`

`

export const CommmentsBoxWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 117px;
	border:1px solid rgba(0,0,0,0.2);


`

export const CommentsInput = styled.textarea`
	width: 100%;
	height: 117px;
	padding: 20px;
	border:none;
	resize: none;
	border-bottom: 1px solid rgba(0,0,0,0.1);
	outline: none;
	::placeholder{
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
`

export const CommentsBoxBottom = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`

export const CommentsCount = styled.div`
	padding: 14px 20px;
	color: rgba(0,0,0,0.3);
`

export const CommentsBtn = styled.button`
	width:91px;
	height: 52px;
	outline: none;
	background-color: #FFD600;
	color: black;
	font-size:16px;
	cursor: pointer;
	border:none;
`


export const DeletePassword = styled.input`
width:100%;
border:none;
outline:none;
border-bottom:1px solid rgba(0,0,0,0.3);
`

export const QuestionImg = styled.img`
	width:25px;
	height: 25px;
	margin-left:15px;
	cursor: pointer;
`