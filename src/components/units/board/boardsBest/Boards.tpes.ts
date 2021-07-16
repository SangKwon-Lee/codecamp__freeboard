import { Query } from '../../../../commons/types/generated/types';
import React from 'react';
export interface IBoardsProps {
	data?: Query;
	handleMoveList: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}