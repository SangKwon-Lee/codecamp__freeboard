import { useRouter } from 'next/router';
import MenuUI from './Menu.presenter';

export default function Menu() {
	const router = useRouter();

	return <MenuUI></MenuUI>;
}
