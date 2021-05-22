import { Query } from "../../../../commons/types/generated/types";

export interface IBoardWriterProps {
	handleChangeInput: (e) => void;
	handleClickCreateBoard: () => void;
	isTrue: boolean;
	data?: Query;
	handleClickUpdateBoard: () => void;
}