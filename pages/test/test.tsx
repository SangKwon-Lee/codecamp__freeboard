{
	/* <InfinityScroll loadMore={onLoadMore} hasMore={true} height={1000}>
  {data?.fectBoards.map((data, index) => (
    <RowWrapper></RowWrapper>
  )}
</InfinityScroll> */
}

const { data, fetchMore } = useQuery<IQuery>(FETCH_BOARDS, {
	variables: { page: currentPage },
});

const LoadMore = () => {
	fetchMore({
		variables: { page: Math.floor(data?.fetchBoards.length / 10) + 1 },
		updateQuery: (prev, { fetchMoreResult }) => ({
			fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
		}),
	});
};
