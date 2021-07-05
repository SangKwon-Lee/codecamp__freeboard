import {
	MyPageContainer,
	MyPageLeftLayout,
	MyPageRightLayout,
	MyPageWrapper,
	MyPageLeftWrapper,
	MyPageTitle,
	MyPageImg,
	MyPageName,
	MyPagePointAndPig,
	MyPageIconMoney,
	MyPagePoint,
	MyPageMenuWrapper,
	MyPageIconAndMenu,
	MyPageIconCart,
	MyPageMenu,
	MyPageIconPoint,
	MyPageIconProfle,
} from './MyPageLayout.styles';
import { MyPageLayoutProps } from './MyPageLayout.types';
import MyPageUI from '../index';
export default function MyPageLayoutUI({
	handleMenu,
	menuChoice,
	userData,
}: MyPageLayoutProps) {
	return (
		<MyPageContainer>
			<MyPageWrapper>
				<MyPageLeftLayout>
					<MyPageLeftWrapper>
						<MyPageTitle>MYPAGE</MyPageTitle>
						<MyPageImg src="/mypageProfile.png"></MyPageImg>
						<MyPageName>{userData.name}</MyPageName>
						<MyPagePointAndPig id="Money">
							<MyPageIconMoney></MyPageIconMoney>
							<MyPagePoint>{userData.userPoint.amount}</MyPagePoint>
						</MyPagePointAndPig>
						<MyPageMenuWrapper>
							<MyPageIconAndMenu>
								<MyPageIconCart
									id="Cart"
									onClick={handleMenu}
									// isActive={menuChoice === 'Cart'}
								></MyPageIconCart>
								<MyPageMenu
									id="Cart"
									onClick={handleMenu}
									isActive={menuChoice === 'Cart'}
								>
									내 장터
								</MyPageMenu>
							</MyPageIconAndMenu>
							<MyPageIconAndMenu>
								<MyPageIconPoint
									id="Point"
									onClick={handleMenu}
									// isActive={menuChoice === 'Point'}
								></MyPageIconPoint>
								<MyPageMenu
									id="Point"
									onClick={handleMenu}
									isActive={menuChoice === 'Point'}
								>
									내 포인트
								</MyPageMenu>
							</MyPageIconAndMenu>
							<MyPageIconAndMenu>
								<MyPageIconProfle
									id="Profile"
									onClick={handleMenu}
									// isActive={menuChoice === 'Profile'}
								></MyPageIconProfle>
								<MyPageMenu
									id="Profile"
									onClick={handleMenu}
									isActive={menuChoice === 'Profile'}
								>
									내 프로필
								</MyPageMenu>
							</MyPageIconAndMenu>
						</MyPageMenuWrapper>
					</MyPageLeftWrapper>
				</MyPageLeftLayout>
				<MyPageRightLayout>
					<MyPageUI menuChoice={menuChoice}></MyPageUI>
				</MyPageRightLayout>
			</MyPageWrapper>
		</MyPageContainer>
	);
}
