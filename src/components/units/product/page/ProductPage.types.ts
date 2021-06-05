import { Query } from "../../../../commons/types/generated/types";

export interface IBoardPagePros {
	data?: Query;
	handleUpdate: () => void;
	handleMoveBoards: () => void;
}