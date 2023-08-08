function map(data) {

  var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

  var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
      center: new kakao.maps.LatLng(35.8672, 128.5936), // 지도의 중심좌표
      level: 5 // 지도의 확대 레벨
    };

  // 지도를 생성합니다    
  var map = new kakao.maps.Map(mapContainer, mapOption);

  // LatLngBounds 객체에 좌표를 추가합니다
  var bounds = new kakao.maps.LatLngBounds();

  const markers = data.map(restaurant => {
    const marker = displayMarker(restaurant);
    bounds.extend(new kakao.maps.LatLng(restaurant.위도, restaurant.경도));
    return marker;
  });

  console.log(data);

  // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다.
  const item_list = document.querySelector('.item_list');

  // 새로운 항목들을 추가하기 전에 item_list를 비웁니다.
  item_list.innerHTML = '';

  data.forEach((restaurant, index) => {
    const title = document.createElement('div');
    title.innerHTML = `
    <div class="map_items">
      <img src="${restaurant.이미지링크}" alt="음식 사진">
      <div class="item_title">
        <p class="item_title_main">${restaurant.상호}</p>
        <div class="item_location">
          <img src="./img/location.png" alt="장소">
          <p>${restaurant.도로명주소}</p>
        </div>
        <p class="item_description">${restaurant.이용시간}</p>
        <div class="item_icons">
          <img src="./img/good_icon.png" alt="좋아요">
          <p>16</p>
          <img src="./img/zzim_icon.png" alt="찜">
          <p>16</p>
          <img src="./img/review_icon.png" alt="리뷰">
          <p>16</p>
        </div>
      </div>
    </div>
  `;
    title.addEventListener('click', () => {
      map.setLevel(5);
      setTimeout(() => {
        map.panTo(new kakao.maps.LatLng(restaurant.위도, restaurant.경도));
        kakao.maps.event.trigger(markers[index], 'click');
      }, 100);
    });
    item_list.appendChild(title);
  });

  // 지도에 마커를 표시하는 함수입니다
  function displayMarker(restaurant) {
    // 마커 이미지의 이미지 주소입니다
    var imageSrc = "./img/shopping_marker.png";

    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(30, 41);

    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(restaurant.위도, restaurant.경도),
      image: markerImage // 마커 이미지 
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function () {
      map.setLevel(5);
      setTimeout(() => {
        map.panTo(new kakao.maps.LatLng(restaurant.위도, restaurant.경도));
      }, 100);

      // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
      infowindow.setContent(`
    <div class="info_item">
      <img src="${restaurant.이미지링크}" alt="음식 사진" />
      <div class="info_text">
        <div>
          <p>${restaurant.상호}</p>
          <a href="#">
            <button>더보기
            <img src="./img/arrow_icon.png" alt="arrow" />
            </button>
          </a>
        </div>
        <div class="info_description">
          <p></p>
          <p>
            ‣ 주소: ${restaurant.도로명주소}<br>
            ‣ 문의: ${restaurant.전화번호}<br>
            ‣ 영업시간: ${restaurant.이용시간}</p>
        </div>
      </div>
    </div>
    `);
      infowindow.open(map, marker);

      // infowindow css 강제 변환
      let info_item = document.querySelectorAll('.info_item');
      // console.log(info_item);
      info_item.forEach(function (e) {
        e.parentElement.previousSibling.style.display = "none";
        e.parentElement.parentElement.style.border = "0px";
        e.parentElement.parentElement.style.background = "unset";
      });
    });

    return marker;
  }

  // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
  var zoomControl = new kakao.maps.ZoomControl();

  // 지도의 우측에 줌 컨트롤을 추가합니다
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

  // 현재 맵의 레벨을 가져와 이전 레벨이라는 값으로 저장해둔다..
  var previousLevel = map.getLevel();

  // 이전 맵 레벨보다 현재 맵 레벨이 크다면 인포 윈도우를 닫는다.
  kakao.maps.event.addListener(map, 'zoom_changed', function () {
    var currentLevel = map.getLevel();
    if (currentLevel > previousLevel) {
      infowindow.close();
    }
    previousLevel = currentLevel;
  });

  // 맵을 클릭하면 인포윈도우가 닫기게 하는 코드
  kakao.maps.event.addListener(map, 'click', function () {
    infowindow.close();
  });
}
