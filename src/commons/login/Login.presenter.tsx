import {
	LoginBG,
	LoginInputWrapper,
	LoginInput,
	LoginShadow,
	LoginWrapper,
	LoginLogo,
	LoginMainTainWrapper,
	LoginMainTain,
	LoginBtn,
	LoginDivideLine,
	LoginOptionWrapper,
	LoginOption,
	LoginVrLine,
	LoginErrorMessage,
	LoginInputAndEroor,
} from './Login.styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { LoginProps } from './Login.types';
export default function LoginUI({
	handleLoginData,
	loginBtn,
	handleLoginBtn,
	handleEmail,
	handlePassword,
}: LoginProps) {
	return (
		<>
			<LoginBG src="/BG.png"></LoginBG>
			<LoginShadow></LoginShadow>
			<LoginWrapper>
				<LoginInputWrapper>
					<LoginLogo src="/loginlogo.png"></LoginLogo>
					<LoginInputAndEroor>
						<LoginInput
							name="email"
							onChange={handleLoginData}
							placeholder="이메일을 입력해주세요."
						></LoginInput>
						{handleEmail && (
							<LoginErrorMessage>이메일은 필수 입력입니다.</LoginErrorMessage>
						)}
					</LoginInputAndEroor>
					<LoginInputAndEroor>
						<LoginInput
							name="password"
							type="password"
							onChange={handleLoginData}
							placeholder="비밀번호를 입력해주세요."
						></LoginInput>
						{handlePassword && (
							<LoginErrorMessage>비밀번호는 필수 입력입니다.</LoginErrorMessage>
						)}
					</LoginInputAndEroor>
					<LoginMainTainWrapper>
						<CheckCircleOutlineIcon
							style={{ color: 'white' }}
						></CheckCircleOutlineIcon>
						<LoginMainTain>로그인 상태 유지</LoginMainTain>
					</LoginMainTainWrapper>
					<LoginBtn disabled={handleLoginBtn} onClick={loginBtn}>
						로그인하기
					</LoginBtn>
					<LoginDivideLine></LoginDivideLine>
					<LoginOptionWrapper>
						<LoginOption>이메일 찾기</LoginOption>
						<LoginVrLine></LoginVrLine>
						<LoginOption>비밀번호 찾기</LoginOption>
						<LoginVrLine></LoginVrLine>
						<LoginOption>회원가입</LoginOption>
					</LoginOptionWrapper>
				</LoginInputWrapper>
			</LoginWrapper>
			{/* <form>
				이메일:{' '}
				<input type="text" name="email" onChange={handleLoginData}></input>
				비밀번호 :{' '}
				<input
					type="password"
					name="password"
					onChange={handleLoginData}
					autoComplete="on"
				></input>
				<button onClick={loginBtn}>로그인</button>
			</form> */}
		</>
	);
}
