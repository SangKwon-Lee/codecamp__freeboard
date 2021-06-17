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
import MyBoard from '../myBoard/MyBoard.container';

export default function MyPageLayoutUI({
	handleMenu,
	menuColor,
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
						<MyPagePointAndPig id="Money" onClick={handleMenu}>
							<MyPageIconMoney></MyPageIconMoney>
							<MyPagePoint>{userData.userPoint.amount}</MyPagePoint>
						</MyPagePointAndPig>
						<MyPageMenuWrapper>
							<MyPageIconAndMenu>
								<MyPageIconCart
									id="Cart"
									onClick={handleMenu}
									isActive={menuColor === 'Cart'}
								></MyPageIconCart>
								<MyPageMenu
									id="Cart"
									onClick={handleMenu}
									isActive={menuColor === 'Cart'}
								>
									내 장터
								</MyPageMenu>
							</MyPageIconAndMenu>
							<MyPageIconAndMenu>
								<MyPageIconPoint
									id="Point"
									onClick={handleMenu}
									isActive={menuColor === 'Point'}
								></MyPageIconPoint>
								<MyPageMenu
									id="Point"
									onClick={handleMenu}
									isActive={menuColor === 'Point'}
								>
									내 포인트
								</MyPageMenu>
							</MyPageIconAndMenu>
							<MyPageIconAndMenu>
								<MyPageIconProfle
									id="Profile"
									onClick={handleMenu}
									isActive={menuColor === 'Profile'}
								></MyPageIconProfle>
								<MyPageMenu
									id="Profile"
									onClick={handleMenu}
									isActive={menuColor === 'Profile'}
								>
									내 프로필
								</MyPageMenu>
							</MyPageIconAndMenu>
						</MyPageMenuWrapper>
					</MyPageLeftWrapper>
				</MyPageLeftLayout>
				<MyPageRightLayout>
					<MyBoard></MyBoard>
				</MyPageRightLayout>
			</MyPageWrapper>
		</MyPageContainer>
	);
}
