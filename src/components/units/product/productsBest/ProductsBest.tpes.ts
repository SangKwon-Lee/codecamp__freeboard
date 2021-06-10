import { Query } from "../../../../commons/types/generated/types";

export interface IProductsBestProps {
	data?: Query;
	handleMoveList: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}