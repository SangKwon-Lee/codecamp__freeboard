import {
	PaymentBG,
	PaymentWrapper,
	PaymentWrapperBG,
} from './paymentModal.styles';

export default function PaymentModalUI() {
	return (
		<>
			<PaymentBG></PaymentBG>
			<PaymentWrapperBG>
				<PaymentWrapper></PaymentWrapper>
			</PaymentWrapperBG>
		</>
	);
}
