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

export interface AnswerQuestionsWriteProps {
  handleContents: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleCreateAnswer: () => void;
  userData: typeof userDataInit
}