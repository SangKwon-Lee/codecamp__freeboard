import { Query } from '../../../../commons/types/generated/types';

export interface MyPointProps {
	myPointChoice: string;
	handleMyPointChoice: (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => void;
	allData?: Query;
	sellData?: Query;
	pointData?: Query;
	buyingData?: Query;
	handleMovePage: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
