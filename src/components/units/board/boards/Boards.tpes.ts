import { Query } from "../../../../commons/types/generated/types";

export interface IBoardsProps {
	data?: Query;
	BestDatas?: any;
	handleMoveList: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	handleMoveRegister: () => void;
}