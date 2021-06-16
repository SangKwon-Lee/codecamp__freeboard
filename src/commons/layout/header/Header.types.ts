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

export interface HeaderProps {
  handleMoveLoginPage: () => void;
  accessToken: String;
  userData: typeof userDataInit
  isModal: boolean;
  handleIsModal: () => void;
}

