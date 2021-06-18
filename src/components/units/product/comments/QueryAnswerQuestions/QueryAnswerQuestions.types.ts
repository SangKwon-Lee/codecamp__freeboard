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
  handleCreateAnswer: () => void
  userData: typeof userDataInit
}