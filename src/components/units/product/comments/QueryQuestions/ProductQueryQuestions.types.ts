import { Dispatch, SetStateAction } from "react";
import { Query } from "../../../../../commons/types/generated/types";

const userDataInit = {
	name: '',
	_id: '',
	email: '',
	createdAt: '',
	updatedAt: '',
	userPoint: {
		_id: '',
		amount: '',
		createdAt: '',
		updatedAt: '',
	},
};

export interface IProductQuestionsItemsProps {
  data?: any;
  Update: boolean;
  handleUpdateInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleClickUpdateComment: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  userData: typeof userDataInit;
  name: boolean;
  commentUpdate: () => void;
  handleClickDeleteComment: (e: React.MouseEvent<HTMLImageElement, MouseEvent>,) => void;
  handleIsWrite: () => void;
  isWrite: boolean;
  setIsWrite: Dispatch<SetStateAction<boolean>>
  Answer: Query;
  questionId: string;
}
