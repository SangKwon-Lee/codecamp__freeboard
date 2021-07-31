import { useEffect } from 'react';

export default function KaKaoMap({ ZipCode, setPa }) {
	//* 카카오 지도 부분
	useEffect(() => {
		const script = document.createElement('script');
		script.async = true;
		script.src =
			'https://dapi.kakao.com/v2/maps/sdk.js?appkey=c9c818a0b024f377caf51fe6e31268db&libraries=services&autoload=false';
		document.head.appendChild(script);

		script.onload = () => {
			//@ts-ignore
			kakao.maps.load(() => {
				// let el = document.getElementById('map');
				// let map = new kakao.maps.Map(el, {
				//     center: new kakao.maps.LatLng(/* latitude */, /* longitude */)
				// });
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
				// 주소-좌표 변환 객체를 생성합니다
				//@ts-ignore
				var geocoder = new kakao.maps.services.Geocoder();
				// 마커를 생성합니다
				//@ts-ignore
				var marker = new kakao.maps.Marker({
					position: markerPosition,
				});
				//@ts-ignore
				var geocoder = new kakao.maps.services.Geocoder();
				// 주소로 좌표를 검색합니다
				geocoder.addressSearch(`${ZipCode}`, function (result, status) {
					// 정상적으로 검색이 완료됐으면
					//@ts-ignore
					if (status === kakao.maps.services.Status.OK) {
						//@ts-ignore
						var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
						// 결과값으로 받은 위치를 마커로 표시합니다
						//@ts-ignore
						var marker = new kakao.maps.Marker({
							map: map,
							position: coords,
						});
						// 인포윈도우로 장소에 대한 설명을 표시합니다
						//@ts-ignore
						var infowindow = new kakao.maps.InfoWindow({
							content: `<div style="width:150px;text-align:center;padding:6px 0;">${ZipCode}</div>`,
						});
						infowindow.open(map, marker);
						// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
						map.setCenter(coords);
					}
				});
				// 마커가 지도 위에 표시되도록 설정합니다
				marker.setMap(map);
				// 지도에 클릭 이벤트를 등록합니다
				// 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
				//@ts-ignore
				kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
					// 클릭한 위도, 경도 정보를 가져옵니다
					var latlng = mouseEvent.latLng;
					setPa({ ...latlng });
					// 마커 위치를 클릭한 위치로 옮깁니다
					marker.setPosition(latlng);
				});
			});
		};
	}, [ZipCode]);

	return (
		<>
			<div className="map_wrap">
				<div id="map" style={{ width: '384px', height: '252px' }}></div>
				<div className="hAddr"></div>
			</div>
		</>
	);
}
