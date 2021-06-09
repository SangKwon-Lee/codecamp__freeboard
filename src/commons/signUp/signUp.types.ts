export interface SignUpProps {
  handleSignUpDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  signUpBtn: () => void;
  signUpIsTrue: boolean;
  signUpOK: boolean;
}