import { Query, QueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types";

export interface IProductQuestionsProps {
	contents: string;
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	data?: Query;
	handleClickCreateComment: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
	LoadMore: () => void;
	refetch: ()=> void;
}

export interface IProductQuestionsItemsProps {
  data?: any;
	refetch: ()=> void;
}

