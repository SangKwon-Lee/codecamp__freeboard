import ProductCommentsUI from './ProductComments.presenter';
import { useState } from 'react';
import {
	FETCH_USED_ITEM_QUESTIONS,
	CREATE_USED_ITEM_QUESTION,
} from './ProductComments.queries';
import { useMutation, useQuery } from '@apollo/client';
import {
	Mutation,
	MutationCreateUseditemQuestionArgs,
	Query,
	QueryFetchUseditemQuestionsArgs,
} from '../../../../../commons/types/generated/types';
import { useRouter } from 'next/router';

function ProductCommentsPage() {
	const router = useRouter();

	//* 문의 작성 상태
	const [contents, setContents] = useState('');

	// const [currentComment, setCurrentComment] = useState(0);

	//* 문의 작성 뮤테이션
	const [createUsedItemQuestions] = useMutation<
		Mutation,
		MutationCreateUseditemQuestionArgs
	>(CREATE_USED_ITEM_QUESTION);

	//* 문의 불러오기 쿼리
	const { data, refetch, fetchMore } = useQuery<
		Query,
		QueryFetchUseditemQuestionsArgs
	>(FETCH_USED_ITEM_QUESTIONS, {
		variables: { useditemId: String(router.query.id) },
	});

	// //* 문의 더 불로오기
	const LoadMore = () => {
		if (data?.fetchUseditemQuestions.length % 10 !== 0) return;
		fetchMore({
			variables: {
				page: Math.floor(data?.fetchUseditemQuestions.length / 10) + 1,
			},
			updateQuery: (prev, { fetchMoreResult }) => ({
				fetchUseditemQuestions: [
					...prev.fetchUseditemQuestions,
					...fetchMoreResult.fetchUseditemQuestions,
				],
			}),
		});
	};

	//* 문의 작성 저장하는 함수
	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const newInput = e.target.value;
		setContents(newInput);
	};

	//* 문의 작성 뮤테이션 보내는 함수
	const handleClickCreateComment = async () => {
		try {
			const result = await createUsedItemQuestions({
				variables: {
					createUseditemQuestionInput: {
						contents,
					},
					useditemId: String(router.query.id),
				},
			});
			setContents('');
			refetch();
		} catch (error) {
			alert(error);
		}
	};

	return (
		<ProductCommentsUI
			contents={contents}
			handleInputChange={handleInputChange}
			data={data}
			handleClickCreateComment={handleClickCreateComment}
			LoadMore={LoadMore}
			refetch={refetch}
		></ProductCommentsUI>
	);
}

export default ProductCommentsPage;
