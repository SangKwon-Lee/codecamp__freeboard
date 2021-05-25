import {
	HeaderBody,
	HeaderRightLogoutWrapper,
	HeaderWrapper,
	Login,
	Logo,
	LogoWrapper,
	SignUp,
} from './Header.styles';

const HeaderPresenter = () => (
	<>
		<HeaderWrapper>
			<HeaderBody>
				<LogoWrapper>
					<Logo src="/logo.png"></Logo>
				</LogoWrapper>
				<HeaderRightLogoutWrapper>
					<Login>로그인</Login>
					<SignUp>회원가입</SignUp>
				</HeaderRightLogoutWrapper>
			</HeaderBody>
		</HeaderWrapper>
	</>
);

export default HeaderPresenter;
