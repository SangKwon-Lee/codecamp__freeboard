import Head from 'next/head';
import { useEffect } from 'react';

export default function Map() {
	const style = {
		width: '500px',
		height: '400px',
	};

	useEffect(() => {
		const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
		const options = {
			//지도를 생성할 때 필요한 기본 옵션
			//@ts-ignore
			center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
			level: 3, //지도의 레벨(확대, 축소 정도)
		};
		//@ts-ignore
		const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

		// 마커가 표시될 위치입니다
		//@ts-ignore
		var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

		// 마커를 생성합니다
		//@ts-ignore
		var marker = new kakao.maps.Marker({
			position: markerPosition,
		});

		// 마커가 지도 위에 표시되도록 설정합니다
		// marker.setMap(map);
		// // 지도에 클릭 이벤트를 등록합니다
		// // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
		// kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
		// 	// 클릭한 위도, 경도 정보를 가져옵니다
		// 	var latlng = mouseEvent.latLng;

		// 	// 마커 위치를 클릭한 위치로 옮깁니다
		// 	marker.setPosition(latlng);
		// });
	}, []);

	const onClickMap = () => {
		window.open(
			'https://map.kakao.com/link/map/33.450701,126.570667',
			'target:_black',
		);
	};

	return (
		<>
			<Head>
				<script
					type="text/javascript"
					src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c9c818a0b024f377caf51fe6e31268db"
				></script>
			</Head>
			<div id="map" style={style} onClick={onClickMap}></div>
		</>
	);
}
