import { Query } from "../../../../commons/types/generated/types";

export interface IBoardsProps {
	BestDatas?: any;
	handleMoveList: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}