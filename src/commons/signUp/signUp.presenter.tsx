import {
	LoginBG,
	LoginInputWrapper,
	LoginInput,
	LoginShadow,
	LoginWrapper,
	LoginBtn,
	LoginInputAndEroor,
	SignUpTitle,
	SignUpLabel,
} from './signUp.styles';

export default function SignUpUI({
	handleSignUpDate,
	signUpBtn,
	signUpIsTrue,
}) {
	return (
		<>
			<LoginBG src="/BG.png"></LoginBG>
			<LoginShadow></LoginShadow>
			<LoginWrapper>
				<LoginInputWrapper>
					<SignUpTitle>회원가입</SignUpTitle>
					<LoginInputAndEroor>
						<SignUpLabel>이메일</SignUpLabel>
						<LoginInput
							name="email"
							placeholder="이메일을 입력해주세요."
							onChange={handleSignUpDate}
						></LoginInput>
					</LoginInputAndEroor>
					<LoginInputAndEroor>
						<SignUpLabel>이름</SignUpLabel>
						<LoginInput
							name="name"
							placeholder="비밀번호를 입력해주세요."
							onChange={handleSignUpDate}
						></LoginInput>
					</LoginInputAndEroor>
					<LoginInputAndEroor>
						<SignUpLabel>비밀번호</SignUpLabel>
						<LoginInput
							name="password"
							type="password"
							onChange={handleSignUpDate}
							placeholder="비밀번호를 입력해주세요."
						></LoginInput>
					</LoginInputAndEroor>
					<LoginInputAndEroor>
						<SignUpLabel>비밀번호 확인</SignUpLabel>
						<LoginInput
							name="passwordCheck"
							type="password"
							placeholder="비밀번호를 입력해주세요."
							onChange={handleSignUpDate}
						></LoginInput>
					</LoginInputAndEroor>
					<LoginBtn onClick={signUpBtn} disabled={signUpIsTrue}>
						회원가입하기
					</LoginBtn>
				</LoginInputWrapper>
			</LoginWrapper>
		</>
	);
}
