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
	animation-duration: 2s;
	animation-name: move;

@keyframes move {
	from {
		transform: translateY(-50px);
		opacity: 0
	}
		to {
				transform: translateY(0px);
		opacity: 1
	};
}
`;

export const BestCard = styled.div`
	max-width: 282px;
	width: 100%;
	height: 391px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.1);
`

export const BestCardImg = styled.img`
max-width: 242px;
	width:100%;
	height: 242px;
	margin-bottom:20px;
	cursor: pointer;
`

export const BestName = styled.div`
font-size: 18px;
font-weight: 500;
padding-bottom: 4px;
cursor: pointer;
`

export const BestBottomWrapper = styled.div`
	width:100%;
	display: flex;
	justify-content: space-between;
`

export const BestRemarksAndPrice = styled.div`
	height: 58px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`


export const BestRemarks = styled.div`
	font-size:12px;
	font-weight: 500;
	color:#4F4F4F;
	padding-bottom: 4px;
`

export const BestPrice = styled.div`
	font-size:18px;
	font-weight: 700;
`

export const BestPickAndCount = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
margin-top:12px;
`

export const BestPickImg = styled.img`

`

export const BestPickCount = styled.div`
	font-size:16px;
`

