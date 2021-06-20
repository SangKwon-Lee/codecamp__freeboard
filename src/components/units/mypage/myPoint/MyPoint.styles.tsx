import styled from '@emotion/styled';

interface MyPointProps {
	isActive: boolean;
}
export const MyPointWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const MyPointMenuWrapper = styled.div`
	width: 100%;
	display: flex;
	margin-bottom: 20px;
	justify-content: space-between;
	align-items: center;
`;

export const MyPointLeftWrapper = styled.div`
	width: 311px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const MyPointLeftText = styled.div`
	font-size: 16px;
	color: ${(props: MyPointProps) => (props.isActive ? 'black' : '#828282')};
	font-weight: ${(props: MyPointProps) => (props.isActive ? 700 : 400)};
	border-bottom: ${(props: MyPointProps) =>
		props.isActive ? ' 2px solid #ffd600' : 'none'};
	cursor: pointer;
`;

export const MyPointLeftLine = styled.div`
	border-right: 1px solid #bdbdbd;
	height: 15px;
`;

export const MyPointRightWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 470px;
	width: 100%;
`;
export const MyPointSearchBG = styled.div`
	background-color: #f2f2f2;
	max-width: 368px;
	width: 100%;
	height: 52px;
	padding: 14px 16px;
	display: flex;
	align-items: center;
`;

export const MyPageSearchImg = styled.img`
	margin-right: 8px;
`;

export const MyPageSearchInput = styled.input`
	background-color: transparent;
	outline: none;
	border: none;
	width: 100%;
`;

export const MyPageSearchBtn = styled.button`
	width: 78px;
	height: 52px;
	color: white;
	background-color: black;
	cursor: pointer;
`;

export const MyPointTable = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const MyPointTopWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 69px;
	justify-content: space-around;
	align-items: center;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
`;
export const MyPointNumberWrapper = styled.div`
	width: 80px;
	text-align: center;
`;

export const MyPointTitleWrapper = styled.div`
	width: 400px;
	text-align: center;
`;

export const MyPointBreakDownWrapper = styled.div`
	width: 100px;
	text-align: center;
`;

export const MyPointSellerWrapper = styled.div`
	width: 100px;
	text-align: center;
`;
export const MyPointTitle = styled.div`
	font-weight: 500;
	font-size: 18px;
`;

export const MyPointContentsWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 66px;
	justify-content: space-around;
	align-items: center;
	border-bottom: 1px solid #bdbdbd;
`;

export const MyPointContents = styled.div`
	color: #4f4f4f;
	font-size: 16px;
`;

export const MyPointChargeBreakDown = styled.div`
	font-size: 16px;
	color: #ffd600;
	font-weight: 700;
`;
export const MyPointChargeAfter = styled.div`
	font-size: 16px;
	font-weight: 700;
`;

export const MyPointAfterWrapper = styled.div``;

export const MyPointAfter = styled.div``;

export const MyPointSellBreakDown = styled.div``;

export const MyPointBuyBreakDown = styled.div``;
