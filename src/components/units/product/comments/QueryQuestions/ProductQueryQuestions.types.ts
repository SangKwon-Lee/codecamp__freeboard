import { Dispatch, SetStateAction } from "react";
import { Query } from "../../../../../commons/types/generated/types";

export interface IProductQuestionsItemsProps {
  data?: any;
  Update: boolean;
  handleUpdateInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleClickUpdateComment: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  userEmail: String;
  name: boolean;
  commentUpdate: () => void;
  handleClickDeleteComment: (e: React.MouseEvent<HTMLImageElement, MouseEvent>,) => void;
  handleIsWrite: () => void;
  isWrite: boolean;
  setIsWrite: Dispatch<SetStateAction<boolean>>
  Answer: Query;
  questionId: string;
}
