import { Query } from "../../../../commons/types/generated/types";
import { Dispatch, SetStateAction } from "react";

export interface IBoardPagePros {
	data?: Query;
	handleUpdate: () => void;
	handleMoveBoards: () => void;
	isUser: boolean;
	imgArr: number[]
	handeImgRight: () => void;
	handeImgLeft: () => void;
	isActive: number;
	handleOnClickBuy: () => void;
	setPa: Dispatch<SetStateAction<{
		La: number;
		Ma: number;
	}>>
}