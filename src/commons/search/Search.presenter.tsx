import {
	DateImg,
	SearchBar,
	SearchBarWrapper,
	SearchBtn,
	SearchDateWrapper,
	SearchWrapper,
	SearchImg,
} from './Search.styles';

export default function SearchUI() {
	return (
		<SearchWrapper>
			<SearchBarWrapper>
				<SearchBar placeholder="제목을 검색해주세요."></SearchBar>
				<SearchDateWrapper>
					<DateImg src="/dateImg.png" />
					2020.02.12
					<DateImg src="/dateImg.png" />
					2020.02.12
				</SearchDateWrapper>
			</SearchBarWrapper>
			<SearchBtn>검색하기</SearchBtn>
		</SearchWrapper>
	);
}
