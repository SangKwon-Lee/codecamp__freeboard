import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Contents = styled.div`
	max-width: 1200px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const BestWrapper = styled.div`
	width: 100%;
	padding-top:80px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const BestTitle = styled.div`
	font-size: 36px;
	font-weight: 700;
	padding-bottom: 40px;
`;

export const BestCardWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	
`;

export const BestCard = styled.div`
	width: 282px;
	height: 257px;
	border-radius: 16px;
	display: flex;
	flex-direction: column;
	box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.1);
`;

export const BestImg = styled.img`
	border-top-left-radius: 16px;
	border-top-right-radius: 16px;
`;

export const BestCardTitle = styled.div`
	font-weight: 500;
	font-size: 18px;
	width:100%;
	height: 30px;
	overflow-x: scroll;
`;

export const BestContentsWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 20px;
`;

export const BestBottomWrapper = styled.div`
	display: flex;
	padding-top: 20px;
	width: 100%;
	justify-content: space-between;

`;

export const BestProfileAndWriter = styled.div`
	display: flex;
	padding-bottom: 8px;
`;
export const BestCardProfileImg = styled.img`
	width:25px;
`;

export const BestCardWriter = styled.div`
	margin-left:10px;
	font-size: 16px;
`;

export const BestDate = styled.div`
	font-size: 12px;
	color: #828282;
`;

export const BestLeftWrapper = styled.div`
	display: flex;
	height: 50px;
	justify-content: space-between;
	flex-direction: column;
`;

export const BestRightWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 50px;
`;

export const BestLike = styled.img`
	width: 20px;
	height: 18px;
`;

export const BestLikeCount = styled.div`
	font-size: 16px;
`;
