import { Query, QueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types";

export interface IBoardCommentsProps {
	input: {
		writer: string;
		password: string;
		contents: string;
		rating: string;
	};
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	data?: Query;
	rating: number | String;
	onSaveRating: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	handleClickCreateComment: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
	LoadMore: () => void;
	refetch: ()=> void;
}

export interface IBoadrdCommentsItemsProps {
  data?: any;
	onSaveRating: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
		refetch: ()=> void;
}

