import { Query } from "../../../../commons/types/generated/types";

export interface IBoardsProps {
	data?: Query;
	handleMoveList: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}