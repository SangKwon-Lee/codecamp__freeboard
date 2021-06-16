import {
	HeaderBody,
	HeaderRightLogoutWrapper,
	HeaderWrapper,
	Login,
	Logo,
	LogoWrapper,
	SignUp,
	LoginOKWrapper,
	LoginImg,
	LoginModalWrapper,
	LoginModalBottom,
	LoginModalTop,
	LoginDataWrapper,
	LoginName,
	LoginPoint,
	LogoutImg,
	LoginBottomText,
	LogoutBottomHr,
	LoginAb,
	LoginModalBottomTextWrapper,
} from './Header.styles';
import { HeaderProps } from './Header.types';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const HeaderPresenter = ({
	accessToken,
	handleMoveLoginPage,
	userData,
	isModal,
	handleIsModal,
}: HeaderProps) => (
	<>
		<HeaderWrapper>
			<HeaderBody>
				<LogoWrapper>
					<Logo src="/logo.png"></Logo>
				</LogoWrapper>
				<HeaderRightLogoutWrapper>
					{accessToken ? (
						<>
							<LoginOKWrapper>
								<LoginImg src="/profileImg.png"></LoginImg>
								<ArrowDropDownIcon
									style={{
										margin: '10px',
									}}
									id="Modal"
									onClick={handleIsModal}
								></ArrowDropDownIcon>
							</LoginOKWrapper>
							{isModal && (
								<LoginAb>
									<LoginModalWrapper>
										<LoginModalTop>
											<LoginImg src="/profileImg.png"></LoginImg>
											<LoginDataWrapper>
												<LoginName>{userData.name}</LoginName>
												<LoginPoint>{userData.userPoint.amount} P</LoginPoint>
											</LoginDataWrapper>
										</LoginModalTop>
										<LoginModalBottom>
											<LoginModalBottomTextWrapper>
												<LogoutImg src="/greypig.png"></LogoutImg>
												<LoginBottomText>충전하기</LoginBottomText>
											</LoginModalBottomTextWrapper>
											<LogoutBottomHr></LogoutBottomHr>
											<LoginModalBottomTextWrapper>
												<LogoutImg src="/greylogout.png"></LogoutImg>
												<LoginBottomText>로그아웃</LoginBottomText>
											</LoginModalBottomTextWrapper>
										</LoginModalBottom>
									</LoginModalWrapper>
								</LoginAb>
							)}
						</>
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
