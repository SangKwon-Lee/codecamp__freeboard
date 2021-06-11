import styled from '@emotion/styled'

//! 대댓글 부분

export const AnswerWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-left:60px;
  margin-bottom: 40px;
	margin-top:20px;

`

export const AnswerImg = styled.img`
  width:30px;
  height: 30px;
  margin-right:25px;

`
export const AnswerProfile = styled.img`
width:48px;
height: 48px;
margin-right: 12px;
margin-top:2px;
`

export const AnswerContentsWrapper = styled.div`
	display: flex;
	width:100%;


`

export const AnswerName = styled.div`
	font-size: 16px;
	font-weight: 500;
	padding-bottom:4px;
`

export const AnswerContetns = styled.div`
	width:100%;
	display: flex;

`
export const AnswerCenterWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`

export const AnswerNameAndContents = styled.div`
	font-size: 16px;
	color:#4F4F4F;

`

export const AsnwerRightImg = styled.img`
	width: 24px;
cursor: pointer;
	height: 24px;
`


export const UpdateImg = styled.img`
  width:18px;
  height: 18px;
  cursor: pointer;
`

export const RightImgWrapper = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-between;
`

//! 대댓글 수정

export const CommentsProfileImg = styled.img`
	width:48px;
	height: 48px;
	margin-right: 12px;
	margin-top:5px;
`
export const CommentsUpdateWriterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width:100%;
	justify-content: space-between;
	height: 147px;
`
export const CommentsWriter = styled.div`
	font-size:16px;
  padding-bottom:10px;
	padding-top:2.5px;
`

export const CommentsUpdatenputWrapper = styled.div`
display: flex;
width:100%;
/* height:189px; */

margin-bottom: 40px;
margin-top:40px;
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
