import {
	MyProfileWrapper,
	MyProfileTitle,
	MyProfilePWWrapper,
	MyProfilePW,
	MyProfilePWInput,
	MyProfileBtnWrapper,
	MyProfilePWBtn,
} from './myProfile.styles';
import { MyProfileProps } from './myProfile.types';

export default function MyProfileUI({ handlePassword }: MyProfileProps) {
	return (
		<MyProfileWrapper>
			<MyProfileTitle>비밀번호 변경</MyProfileTitle>
			<MyProfilePWWrapper>
				<MyProfilePW>현재 비밀번호</MyProfilePW>
				<MyProfilePWInput
					name="now"
					onChange={handlePassword}
					placeholder="현재 비밀번호를 입력해주세요."
				></MyProfilePWInput>
			</MyProfilePWWrapper>
			<MyProfilePWWrapper>
				<MyProfilePW>새 비밀번호</MyProfilePW>
				<MyProfilePWInput
					name="new"
					onChange={handlePassword}
					placeholder="새 비밀번호를 입력해주세요."
				></MyProfilePWInput>
			</MyProfilePWWrapper>
			<MyProfilePWWrapper>
				<MyProfilePW>새 비밀번호 확인</MyProfilePW>
				<MyProfilePWInput
					name="checknew"
					onChange={handlePassword}
					placeholder="새 비밀번호를 확인해주세요."
				></MyProfilePWInput>
			</MyProfilePWWrapper>
			<MyProfileBtnWrapper>
				<MyProfilePWBtn>비밀번호 변경</MyProfilePWBtn>
			</MyProfileBtnWrapper>
		</MyProfileWrapper>
	);
}
