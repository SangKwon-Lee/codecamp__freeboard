import { useRouter } from 'next/router';
import MenuUI from './Menu.presenter';

export default function Menu() {
	const router = useRouter();

	const handleMoveBoards = () => {
		router.push(`/boards`);
	};
	return <MenuUI handleMoveBoards={handleMoveBoards}></MenuUI>;
}
