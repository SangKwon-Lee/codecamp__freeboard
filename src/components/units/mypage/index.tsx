import MyBoard from './myBoard/MyBoard.container';
import MyPoint from './myPoint/MyPoint.container';
import Myprofile from './myProfile/myProfile.container';

interface MyPageProps {
	menuChoice: string;
}

export default function MyPageContainer({ menuChoice }: MyPageProps) {
	return (
		<>
			{menuChoice === 'Cart' && <MyBoard></MyBoard>}
			{menuChoice === 'Point' && <MyPoint></MyPoint>}
			{menuChoice === 'Profile' && <Myprofile></Myprofile>}
		</>
	);
}
