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
export interface MyPageLayoutProps {
  handleMenu: (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  menuChoice: string;
  userData: typeof userDataInit
}
