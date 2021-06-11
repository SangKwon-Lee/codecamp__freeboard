import { Query } from "../../../../../commons/types/generated/types";

export interface QueryAnswerQuestionsProps {
  data: any;
  isUpdate: boolean;
  handleIsUpdate: () => void;
  isUser: boolean;
  write: boolean;
  handleContents: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleWrite: () => void;
  deleteAnswer: () => void;
  updateAnswer: () => void;
  handleCreateAnswer:()=>void
}