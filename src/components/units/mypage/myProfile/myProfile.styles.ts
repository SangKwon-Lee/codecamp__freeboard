import styled from '@emotion/styled';

export const MyProfileWrapper = styled.div`
  max-width:894px;
  width:100%;
  display: flex;
  flex-direction: column;
  margin-left:126px;
  height: 364px;
  justify-content: space-between;
`;


export const MyProfileTitle = styled.div`
  font-size:24px;
  font-weight: 700;
`;

export const MyProfilePW = styled.div`
  font-size: 16px;
    font-weight: 700;

`;

export const MyProfilePWInput = styled.input`
  max-width: 690px;
  width:100%;
  height: 52px;
  outline: none;
  border:none;
  padding:16px 14px;
  background-color: #E0E0E0;
`;

export const MyProfilePWBtn = styled.button`
width:180px;
height: 52px;
outline: none;
cursor: pointer;
border:none;
background-color: #BDBDBD;
color:#4F4F4F;
font-size:16px;
font-weight: 700;
`;

export const MyProfilePWWrapper = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MyProfileBtnWrapper = styled.div`
  width:100%;
  display: flex;
  justify-content: flex-end;`;
