import { useContext, useState } from 'react';
import PaymentModalUI from './paymentModal.presenter';
import Head from 'next/head';
import { CREATE_POINT_TRANSACTION_OFLOADING } from './paymentModal.queries';
//* next는 html Head가 없기 떄문에 이렇게 불러오면 Next에서 헤드르 만들어준다.
import { gql, useMutation } from '@apollo/client';
import { GlobalContext } from '../../../pages/_app';

export default function PaymentModal({ handleIsPaymentClose }) {
	//* 포인트 선택창 열고 닫기
	const [isPoint, setIsPoint] = useState(false);
	//* 포인트 금액
	const [point, setPoint] = useState(0);
	//* 화면에 띄우는 포인트 텍스트
	const [pointText, setPointText] = useState('포인트 선택');
	//* 포인트 버튼 활성화
	const [isPointBtn, setIsPointBtn] = useState(true);

	const { accessToken, userData } = useContext(GlobalContext);

	//* 포인트 선택창 열고 닫는 함수
	const handleIsPoint = () => {
		setIsPoint((prev) => !prev);
	};

	//* 포인트 클릭시 일어나는 함수들
	const handlePoint = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = e.target as HTMLTextAreaElement;
		setPoint(Number(target.id));
		setPointText(target.id);
		setIsPoint((prev) => !prev);
		setIsPointBtn(false);
	};

	//* 포인트 충전 뮤테이션
	const [createPoint] = useMutation(CREATE_POINT_TRANSACTION_OFLOADING);

	//* 포인트 충전 함수
	const onClickPayment = () => {
		//@ts-ignore
		const IMP = window.IMP;
		IMP.init('imp89386405');
		// IMP.request_pay(param, callback) 호출
		IMP.request_pay(
			{
				// param
				pg: 'html5_inicis',
				pay_method: 'card',
				//* 여기는 중복되는 값이 들어가면 안 됨.
				// merchant_uid: "ORD20180131-0000011",
				name: '포인트 충전',
				amount: point,
				buyer_email: userData.email,
				buyer_name: userData.name,
				buyer_tel: '010-4242-4242',
				buyer_addr: '서울특별시 강남구 신사동',
				buyer_postcode: '01181',
				//* 모바일에서 결제 후 이동할 주소.
				m_redirect_url: '',
			},
			async (rsp) => {
				// callback
				if (rsp.success) {
					// 결제 성공 시 로직,
					await createPoint({
						variables: {
							impUid: rsp.imp_uid,
						},
					});
					handleIsPaymentClose();
					alert('결제 성공');
				} else {
					alert('결제 실패');
				}
			},
		);
	};

	return (
		<>
			<Head>
				<script
					type="text/javascript"
					src="https://code.jquery.com/jquery-1.12.4.min.js"
				></script>
				<script
					type="text/javascript"
					src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
				></script>
			</Head>
			<PaymentModalUI
				handleIsPoint={handleIsPoint}
				isPoint={isPoint}
				handlePoint={handlePoint}
				point={point}
				handleIsPaymentClose={handleIsPaymentClose}
				pointText={pointText}
				isPointBtn={isPointBtn}
				onClickPayment={onClickPayment}
			></PaymentModalUI>
		</>
	);
}
