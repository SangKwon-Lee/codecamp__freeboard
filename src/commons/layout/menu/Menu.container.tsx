import { useRouter } from 'next/router';
import MenuUI from './Menu.presenter';

export default function Menu() {
	const router = useRouter();

	const handleMoveBoards = () => {
		router.push(`/boards`);
	};

	const handleMoveUsedItem = () => {
		router.push(`/product`);
	};
	return (
		<MenuUI
			handleMoveBoards={handleMoveBoards}
			handleMoveUsedItem={handleMoveUsedItem}
		></MenuUI>
	);
}
