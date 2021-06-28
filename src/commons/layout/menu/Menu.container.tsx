import { useRouter } from 'next/router';
import { useState } from 'react';
import MenuUI from './Menu.presenter';

export default function Menu() {
	const router = useRouter();

	const [move, setMove] = useState('boards');

	const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = e.target as HTMLTextAreaElement;
		router.push(`/${target.id}`);
	};

	return <MenuUI move={move} handleMove={handleMove}></MenuUI>;
}
