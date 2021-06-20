export interface MyPointProps {
	myPointChoice: string;
	handleMyPointChoice: (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => void;
}
