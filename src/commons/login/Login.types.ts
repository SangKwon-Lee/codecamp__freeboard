export interface LoginProps {
  handleLoginData: (e : React.ChangeEvent<HTMLInputElement>) =>void
  loginBtn: () => void;
  handleLoginBtn: boolean;
  handleEmail: boolean;
	handlePassword: boolean;
}