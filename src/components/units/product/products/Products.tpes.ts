import { Query } from "../../../../commons/types/generated/types";

export interface IProductsProps {
	data?: Query;
	BestDatas?: any;
	handleMoveList: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	handleMoveRegister: () => void;
	currentPage: number;
	hadleSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSearchBtn: () => void;
	LoadMore: () => void;
}