import { useState } from 'react';

//* next는 html Head가 없기 떄문에 이렇게 불러오면 Next에서 헤드르 만들어준다.
import Head from 'next/head';
import { gql, useMutation } from '@apollo/client';

const CREATE_POINT_TRANSACTION_OFLOADING = gql`
	mutation createPointTransactionOfLoading($impUid: ID!) {
		createPointTransactionOfLoading(impUid: $impUid) {
			status
		}
	}
`;

const PaymentPage = () => {
	const [amount, setAmount] = useState(200);
	const [createPoint] = useMutation(CREATE_POINT_TRANSACTION_OFLOADING);

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
				name: '팀장님의 사랑',
				amount,
				buyer_email: 'asd@asd.com',
				buyer_name: '뀨',
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
			<div>결제금액 : {amount}</div>
			<button onClick={onClickPayment}>결제하기</button>
		</>
	);
};

export default PaymentPage;
