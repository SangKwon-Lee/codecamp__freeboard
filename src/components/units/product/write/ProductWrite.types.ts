import { Query } from "../../../../commons/types/generated/types";
import { Dispatch, SetStateAction } from "react";

export interface IBoardWriterProps {
	data?: Query;
	handleChangeInput: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
	handleClickCreateBoard: () => void;
	isTrue: boolean;
	handleClickUpdateBoard: () => void;
	imgArr: String[];
	fileRef: any;
	onChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
	UploadPhotoCancle: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	postOpen: boolean;
	ZipCode: string;
	handleZipCodeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleChangeEditor: (contents: string) => void;
	pa: {
		La: number,
		Ma: number,
	}
	handleComplete: (data: any) => void;
	handlePostOpen: () => void;
	input: {
		name: string,
		remarks: string,
		contents: string,
		price: number,
		tags: any[],
	}
	setPa: Dispatch<SetStateAction<{
		La: number;
		Ma: number;
	}>>
}