import { Query } from "../../../../commons/types/generated/types";

export interface IBoardWriterProps {
	handleChangeInput: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
	handleClickCreateBoard: () => void;
	isTrue: boolean;
	data?: Query;
	handleClickUpdateBoard: () => void;
	imgArr: String[];
	fileRef: any;
	onChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
	UploadPhotoCancle: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}