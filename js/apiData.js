// API로부터 데이터를 가져오는 함수
async function fetchData(step) {
  const response = await fetch(`https://api.odcloud.kr/api/15052602/v1/uddi:855807e2-fe8a-4e47-8a5a-ce1894e410d7_201909031553?page=${step + 1}&perPage=4&serviceKey=YoYE1pAXNRFcBQnQEk4J6yyEhET2WvOywGXkQ5b3sGntZ5ZTS4QesDWqdH54lDQPpnG0Bh5IQgi1Y8GtNIv6VA%3D%3D`);
  const data = await response.json();
  return data.data;
}

// 데이터를 가져와서 렌더링하는 함수
async function updateDataAndRender(step) {
  try {
    const data = await fetchData(step);
    // 가져온 데이터를 처리하고 렌더링
    dataPlus(data);
    dataMinus(data);
    // 맵(map) 처리하는 곳
    map(data);
  } catch (error) {
    console.error("데이터 가져오기 오류:", error);
  }
}

// 초기 데이터 가져오기와 렌더링
updateDataAndRender(currentStep);