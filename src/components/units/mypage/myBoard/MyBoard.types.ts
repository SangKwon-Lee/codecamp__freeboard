import { Query } from "../../../../commons/types/generated/types";

export interface MyBoardProps {
  changeMyBoardMenu: string;
  handleChangeMyBoardMenu: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  pageArr: [];
  currentPage: number;
  data?: Query
}