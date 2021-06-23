import ProductUI from './ProductWrite.presenter';
import { useMutation, useQuery } from '@apollo/client';
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import {
	FETCH_USED_ITEM,
	UPDATE_USED_ITEM,
	UPLOAD_FILE,
	CREATE_USED_ITEM,
} from './ProductWrite.queries';
import { useRouter } from 'next/router';
import {
	Mutation,
	Query,
	MutationUploadFileArgs,
	MutationCreateUseditemArgs,
	QueryFetchUseditemArgs,
	MutationUpdateUseditemArgs,
} from '../../../../commons/types/generated/types';

function ProductWritePage() {
	const router = useRouter();
	//* 우편 주소 상태
	const [postOpen, setPostOpen] = useState(false);

	//* 우편 주소 인풋
	const [ZipCode, setZipCode] = useState('');

	//* 이미지 관련 상태
	const [imgArr, setImgArr] = useState(['0', '0']);

	//*이미지 Ref
	const fileRef = useRef<HTMLInputElement>(null);

	//* 등록버튼 ON OFF
	const [isTrue, setIsTrue] = useState(true);

	//* 인풋 데이터
	const [input, setInput] = useState({
		name: '',
		remarks: '',
		contents: '',
		price: 0,
		tags: [],
	});

	//* 등록 / 수정
	const [createUseditem] = useMutation<Mutation, MutationCreateUseditemArgs>(
		CREATE_USED_ITEM,
	);

	const [updateUsedItem] = useMutation<Mutation, MutationUpdateUseditemArgs>(
		UPDATE_USED_ITEM,
	);

	const { data } = useQuery<Query, QueryFetchUseditemArgs>(FETCH_USED_ITEM, {
		variables: { useditemId: String(router.query.id) },
	});

	//* 이미지 등록
	// const [uploadFileMutation] = useMutation<Mutation, MutationUploadFileArgs>(
	// 	UPLOAD_FILE,
	// );

	//* 수정시 데이터 살리기
	useEffect(() => {
		setInput({
			name: data?.fetchUseditem.name,
			remarks: data?.fetchUseditem.remarks,
			contents: data?.fetchUseditem.contents,
			price: data?.fetchUseditem.price,
			tags: data?.fetchUseditem.tags,
		});
	}, [data]);

	console.log(input);
	//* 인풋 함수
	const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newInput = {
			...input,
			[event.target.name]: event.target.value,
		};
		setInput(newInput);
		if (newInput.name && newInput.remarks && newInput.price && newInput.tags) {
			setIsTrue(false);
		} else {
			setIsTrue(true);
		}
	};

	//* 카카오 지도 부분
	useEffect(() => {
		// const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
		// const options = {
		// 	//지도를 생성할 때 필요한 기본 옵션
		// 	//@ts-ignore
		// 	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
		// 	level: 3, //지도의 레벨(확대, 축소 정도)
		// };
		// //@ts-ignore
		// const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

		// // 마커가 표시될 위치입니다
		// //@ts-ignore
		// var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

		// // 주소-좌표 변환 객체를 생성합니다
		// //@ts-ignore
		// var geocoder = new kakao.maps.services.Geocoder();

		// // 마커를 생성합니다
		// //@ts-ignore
		// var marker = new kakao.maps.Marker({
		// 	position: markerPosition,
		// });
		// //@ts-ignore
		// var geocoder = new kakao.maps.services.Geocoder();

		// // 주소로 좌표를 검색합니다
		// geocoder.addressSearch(`${ZipCode}`, function (result, status) {
		// 	// 정상적으로 검색이 완료됐으면
		// 	//@ts-ignore
		// 	if (status === kakao.maps.services.Status.OK) {
		// 		//@ts-ignore
		// 		var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

		// 		// 결과값으로 받은 위치를 마커로 표시합니다
		// 		//@ts-ignore
		// 		var marker = new kakao.maps.Marker({
		// 			map: map,
		// 			position: coords,
		// 		});

		// 		// 인포윈도우로 장소에 대한 설명을 표시합니다
		// 		//@ts-ignore
		// 		var infowindow = new kakao.maps.InfoWindow({
		// 			content: `<div style="width:150px;text-align:center;padding:6px 0;">${ZipCode}</div>`,
		// 		});
		// 		infowindow.open(map, marker);

		// 		// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
		// 		map.setCenter(coords);
		// 	}
		// });

		// // 마커가 지도 위에 표시되도록 설정합니다
		// marker.setMap(map);

		// // 지도에 클릭 이벤트를 등록합니다
		// // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
		// //@ts-ignore
		// kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
		// 	// 클릭한 위도, 경도 정보를 가져옵니다
		// 	var latlng = mouseEvent.latLng;
		// 	setPa({ ...latlng });
		// 	// 마커 위치를 클릭한 위치로 옮깁니다
		// 	marker.setPosition(latlng);
		// });
	}, [ZipCode, data]);

	//* 카카오 지도 위도 경도 저장
	const [pa, setPa] = useState({
		La: 33.450701,
		Ma: 126.57066,
	});

	//*웹 에디터 체인지 함수

	const handleChangeEditor = (contents) => {
		const newInput = {
			...input,
			contents,
		};
		setInput(newInput);
	};

	//* 등록함수
	const handleClickCreateBoard = async () => {
		// const res = await Promise.all(
		// 	input.images.map((file) => uploadFileMutation({ variables: { file } })),
		// );

		// let images = [];
		// for (let i = 0; i < res.length; i++) {
		// 	images.push(res[i].data.uploadFile.url);
		// }
		//* Tags의 배열 데이터 변환
		let newTags;
		if (typeof input.tags === 'object') {
			newTags = input.tags[0];
		} else {
			newTags = input.tags;
		}
		newTags
			.split('#')
			.filter((data) => data !== '')
			.map((data) => '#' + data);

		try {
			const result = await createUseditem({
				variables: {
					createUseditemInput: {
						name: input.name,
						remarks: input.remarks,
						contents: input.contents,
						price: Number(input.price),
						tags: newTags,
					},
				},
			});
			alert('게시글 등록 성공');
			router.push(`/product/${result.data?.createUseditem._id}`);
		} catch (error) {
			alert(error);
		}
	};

	//* 수정함수
	const handleClickUpdateBoard = async () => {
		//* Tags의 배열 데이터 변환
		let newTags;
		if (typeof input.tags === 'object') {
			newTags = input.tags[0];
		} else {
			newTags = input.tags;
		}
		newTags
			.split('#')
			.filter((data) => data !== '')
			.map((data) => '#' + data);

		try {
			const result = await updateUsedItem({
				variables: {
					updateUseditemInput: {
						name: input.name,
						remarks: input.remarks,
						contents: input.contents,
						price: Number(input.price),
						tags: newTags,
					},
					useditemId: String(router.query.id),
				},
			});
			alert('게시글 수정 성공');
			router.push(`/product/${result.data?.updateUseditem._id}`);
		} catch (error) {
			alert(error.message);
		}
	};

	//* 이미지 등록 함수
	const onChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
		// const fileArr = e.target.files;
		// let fileURLs = [];
		// let fileName = [];
		// let file;
		// for (let i = 0; i < fileArr.length; i++) {
		// 	if (fileArr[i].size > 5 * 1024 * 1024) {
		// 		alert('파일이 크다');
		// 		return;
		// 	}
		// 	if (!fileArr[i].type.includes('png')) {
		// 		alert('png 파일만 업로드 가능합니다!');
		// 		return;
		// 	}
		// 	file = fileArr[i];
		// 	fileName.push(fileArr[i]);
		// 	let reader = new FileReader();
		// 	reader.onload = () => {
		// 		console.log(reader.result);
		// 		fileURLs[i] = reader.result;
		// 		setImgArr([...fileURLs]);
		// 	};
		// 	reader.readAsDataURL(file);
		// }
		// setInput({
		// 	...input,
		// 	images: fileName,
		// });
	};

	//* 이미지 삭제 함수
	const UploadPhotoCancle = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		// let newArr = [...imgArr];
		// newArr.splice(Number(e.target.id), 1);
		// setImgArr(newArr);
	};

	//* 우편 모달 오픈함수
	const handlePostOpen = () => {
		setPostOpen((prev) => !prev);
	};
	//* 주소 추가
	const handleZipCodeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setZipCode(e.target.value);
	};
	//* 우편 함수
	const handleComplete = (data) => {
		let fullAddress = data.address;
		let extraAddress = '';

		if (data.addressType === 'R') {
			if (data.bname !== '') {
				extraAddress += data.bname;
			}
			if (data.buildingName !== '') {
				extraAddress +=
					extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
			}
			fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
		}

		setPostOpen(false);
		setZipCode(fullAddress);
	};

	return (
		<>
			<ProductUI
				data={data}
				handleChangeInput={handleChangeInput}
				handleClickCreateBoard={handleClickCreateBoard}
				isTrue={isTrue}
				handleClickUpdateBoard={handleClickUpdateBoard}
				fileRef={fileRef}
				onChangeFile={onChangeFile}
				UploadPhotoCancle={UploadPhotoCancle}
				imgArr={imgArr}
				postOpen={postOpen}
				ZipCode={ZipCode}
				handleZipCodeInput={handleZipCodeInput}
				handleChangeEditor={handleChangeEditor}
				pa={pa}
				handlePostOpen={handlePostOpen}
				handleComplete={handleComplete}
				input={input}
			></ProductUI>
		</>
	);
}

export default ProductWritePage;
