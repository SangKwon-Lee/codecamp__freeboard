import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
	flex-direction: column;
	display: flex;
	align-items: center;
	justify-content: center;
	

`;

export const Body = styled.div`
	max-width: 1200px;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

export const DivideLine = styled.div`
	max-width: 1200px;
	width: 100%;
	margin-bottom: 40px;
	border-bottom: 0.1px solid rgba(0, 0, 0, 0.1);
`;

export const CommentsInputWrapper = styled.div`
display: flex;
width:100%;
flex-direction: column;
margin-bottom: 40px;
`

export const CommentsImgAndTitle = styled.div`
	width: 70px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 40px;
`
export const CommentsImg = styled.img``

export const CommetnsTitle = styled.div`
	font-size: 18px;
	font-weight: 500;
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
	height: 161px;
	border:1px solid rgba(0,0,0,0.2);

`

export const CommentsInput = styled.textarea`
	width: 100%;
	height: 108px;
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
	background-color: black;
	color: white;
	font-size:16px;
	cursor: pointer;
	border:none;

`

interface IProps {
	isActive: boolean;
}
export const CommentsWrapper = styled.div`
	width:100%;
	display: flex;
	height: 111px;
	margin-top:20px;
	border-bottom : 1px solid rgba(0,0,0,0.1);
	animation-duration: 2s;
	animation-name: ${(props: IProps) => (props.isActive ? 'move' : 'delete')};;

@keyframes move {
	from {
		transform: translateY(-100px);
		opacity: 0
	}
		to {
				transform: translateY(0px);
		opacity: 1
	}
}

@keyframes delete {
	from {
		transform: translateX(0px);
		opacity: 1
	}
		to {
				transform: translateX(300px);
		opacity: 0
	}
}

`

export const CommentsProfileImg = styled.img`
	width:48px;
	height: 48px;
	margin-right: 12px;
`

export const CommentsCenterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width:100%;
`

export const CommentsTopWrapper = styled.div`
display: flex;
justify-content: space-between;
width:100%;
height:24px;
`

export const CommentsWriterAndStar = styled.div`
	display: flex;
	justify-content: space-between;

`

export const CommentsWriter = styled.div`
	font-size:16px;
	padding-top:2.5px;
`

export const CommentsStar = styled.img`
width:18px;
height: 18px;
`

export const CommentsText = styled.div`
	font-size:16px;
	font-weight:300;
	padding-top:7px;
	padding-bottom:20px;
`

export const CommentsDate = styled.div`
	font-size:12px;
	color:#BDBDBD;
`


export const CommentsTopRightWrapper = styled.div`

	width:60px;
	height: 18px;
	display: flex;
	justify-content: space-between;
`

export const CommentsUpdateImg = styled.img`
	cursor: pointer;
`

export const CommentsDeleteImg = styled.img`
	cursor: pointer;
`