import { Query } from "../../../../commons/types/generated/types";

export interface IBoardsProps {
	data?: Query;
	BestDatas?: any;
	handleMoveList: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	handleMoveRegister: () => void;
	onClickPage: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	currentPage: number;
	RightArrowPage: () => void;
	LeftArrowPage: () => void;
	pageArr: any;
	hadleSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSearchBtn: () => void;
}