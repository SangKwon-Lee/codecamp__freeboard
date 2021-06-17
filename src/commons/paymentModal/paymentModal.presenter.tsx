import {
	PaymentBG,
	PaymentChoiceWrapper,
	PaymentPig,
	PaymentTitle,
	PaymentWrapper,
	PaymentWrapperBG,
	PaymentX,
	PaymentXWrapper,
	PaymentChoice,
	PaymentBtn,
	PaymentChoiceImg,
	PaymentPointWrapper,
	PaymentPoint,
	PaymentLine,
} from './paymentModal.styles';
import { PaymentModalProps } from './paymentModal.types';
export default function PaymentModalUI({
	handleIsPoint,
	isPoint,
	handlePoint,
	point,
	pointText,
	isPointBtn,
	onClickPayment,
	handleIsPaymentClose,
}: PaymentModalProps) {
	return (
		<>
			<PaymentBG></PaymentBG>
			<PaymentWrapperBG>
				<PaymentWrapper>
					<PaymentXWrapper>
						<PaymentX
							onClick={handleIsPaymentClose}
							src="/paymentx.png"
						></PaymentX>
					</PaymentXWrapper>
					<PaymentPig src="/paymentpig.png"></PaymentPig>
					<PaymentTitle>충전하실 금액을 선택해주세요!</PaymentTitle>
					<PaymentChoiceWrapper onClick={handleIsPoint}>
						<PaymentChoice isActive={pointText === '포인트 선택'}>
							{pointText}
						</PaymentChoice>
						<PaymentChoiceImg src="/arrowbottom.png"></PaymentChoiceImg>
					</PaymentChoiceWrapper>
					{isPoint && (
						<PaymentPointWrapper>
							<PaymentPoint
								onClick={handlePoint}
								isActive={point === 100}
								id="100"
							>
								100
							</PaymentPoint>
							<PaymentLine></PaymentLine>
							<PaymentPoint
								isActive={point === 500}
								onClick={handlePoint}
								id="500"
							>
								500
							</PaymentPoint>
							<PaymentLine></PaymentLine>
							<PaymentPoint
								isActive={point === 2000}
								onClick={handlePoint}
								id="2000"
							>
								2000
							</PaymentPoint>
							<PaymentLine></PaymentLine>
							<PaymentPoint
								isActive={point === 5000}
								onClick={handlePoint}
								id="5000"
							>
								5000
							</PaymentPoint>
						</PaymentPointWrapper>
					)}

					<PaymentBtn onClick={onClickPayment} disabled={isPointBtn}>
						충전하기
					</PaymentBtn>
				</PaymentWrapper>
			</PaymentWrapperBG>
		</>
	);
}
