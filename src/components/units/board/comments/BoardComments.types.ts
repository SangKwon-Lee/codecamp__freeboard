export interface IBoardCommentsProps {
	input: {
		writer: string;
		password: string;
		contents: string;
		rating: string;
	};
	handleInputChange: (event:any) => void;
	data?: any;
	rating: any;
	onSaveRating: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	handleClickCreateComment: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
	handleDeleteComment: (
		event: React.MouseEvent<HTMLImageElement, MouseEvent>
	) => void;
}

export interface IBoadrdCommentsItemsProps {
  data?: any;
	onSaveRating: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	handleDeleteComment: (
	event: React.MouseEvent<HTMLImageElement, MouseEvent>
	) => void;
}

