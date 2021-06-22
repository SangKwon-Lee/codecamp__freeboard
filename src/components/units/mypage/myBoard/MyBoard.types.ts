export interface MyBoardProps {
  changeMyBoardMenu: string;
  handleChangeMyBoardMenu: (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  pageArr: [];
  currentPage: number;
}