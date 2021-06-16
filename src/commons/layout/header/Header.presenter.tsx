import {
	HeaderBody,
	HeaderRightLogoutWrapper,
	HeaderWrapper,
	Login,
	Logo,
	LogoWrapper,
	SignUp,
	LoginOKWrapper,
	LoginTopWrapper,
	LoginImg,
	LoginText,
	LogoutBtn,
	LoginSapn,
} from './Header.styles';
import { HeaderProps } from './Header.types';

const HeaderPresenter = ({
	accessToken,
	handleMoveLoginPage,
	userData,
}: HeaderProps) => (
	<>
		<HeaderWrapper>
			<HeaderBody>
				<LogoWrapper>
					<Logo src="/logo.png"></Logo>
				</LogoWrapper>
				<HeaderRightLogoutWrapper>
					{accessToken ? (
						<LoginOKWrapper>
							<LoginTopWrapper>
								<LoginImg src="/loginprofile.png"></LoginImg>
								<LoginText>
									{userData?.name}
									<LoginSapn>님</LoginSapn>
								</LoginText>
								<LogoutBtn>로그아웃</LogoutBtn>
							</LoginTopWrapper>
							<LoginTopWrapper>
								<LoginImg src="/pig.png"></LoginImg>
								<LoginText>{userData?.userPoint.amount}원</LoginText>
								<LogoutBtn>충전하기</LogoutBtn>
							</LoginTopWrapper>
						</LoginOKWrapper>
					) : (
						<>
							<Login onClick={handleMoveLoginPage}>로그인</Login>
							<SignUp>회원가입</SignUp>
						</>
					)}
				</HeaderRightLogoutWrapper>
			</HeaderBody>
		</HeaderWrapper>
	</>
);

export default HeaderPresenter;
