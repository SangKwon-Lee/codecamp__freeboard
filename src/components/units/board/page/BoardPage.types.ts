import { Query } from "../../../../commons/types/generated/types";

export interface IBoardPagePros {
	data?: Query;
	handleUpdate: () => void;
	handleLike: () => void;
	handleDisLike: () => void;
	handleMoveBoards: () => void;
	handleDeleteBoard: () => void;
}