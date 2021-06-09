import {
	ModalLogo,
	ModalWrapper,
	WhiteBG,
	ModalContainer,
	ModalText,
	ModalOKBtn,
} from './signupModal.styles';

interface SignUpModalProps {
	hanldeMoveLoginPage: () => void;
}

export default function signupModalUI({
	hanldeMoveLoginPage,
}: SignUpModalProps) {
	return (
		<>
			<WhiteBG></WhiteBG>
			<ModalContainer>
				<ModalWrapper>
					<ModalLogo src="/signupLogo.png"></ModalLogo>
					<ModalText>회원가입을 축하합니다!</ModalText>
					<ModalOKBtn onClick={hanldeMoveLoginPage}>확인</ModalOKBtn>
				</ModalWrapper>
			</ModalContainer>
		</>
	);
}
