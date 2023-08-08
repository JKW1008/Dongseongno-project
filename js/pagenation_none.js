// DOM 요소들 선택하기
const startBtn = document.querySelector("#startBtn"); // 시작 버튼 요소 선택
const endBtn = document.querySelector("#endBtn"); // 끝 버튼 요소 선택
const prevNext = document.querySelectorAll(".prevNext"); // "이전", "다음" 버튼 요소들 선택
const numbers = document.querySelectorAll(".link"); // 페이지 번호 링크 요소들 선택

// 초기 스텝 값 설정
let currentStep = 0;

// 버튼 상태를 업데이트하는 함수
const updateBtn = () => {
  startBtn.disabled = currentStep === 0;
  endBtn.disabled = currentStep === 8;
  prevNext[0].disabled = currentStep === 0;
  prevNext[1].disabled = currentStep === 8;
};

// 현재 그룹의 페이지 번호 링크들을 보여주는 함수
const showCurrentGroup = () => {
  const groupIndex = Math.floor(currentStep / 3); // 3개의 링크가 한 그룹이 됨
  document.querySelectorAll(".links-group").forEach((group, index) => {
    group.classList.toggle("active", index === groupIndex);
  });
};

// 페이지 번호 링크에 이벤트 리스너 추가하기
numbers.forEach((number, numIndex) => {
  number.addEventListener("click", (e) => {
    e.preventDefault();
    // 현재 스텝 값을 클릭한 페이지 번호 링크의 인덱스로 설정
    currentStep = numIndex;
    numbers.forEach((number, numIndex) => {
      // 현재 스텝에 해당하는 페이지 번호 링크에 "active" 클래스 토글
      number.classList.toggle("active", numIndex === currentStep);
    });
    showCurrentGroup(); // 현재 그룹의 페이지 번호 링크 보여주기
    updateBtn(); // 버튼 상태 업데이트
    // 현재 스텝에 해당하는 데이터 가져와서 렌더링
    // updateDataAndRender(currentStep);
  });
});

// "이전"과 "다음" 버튼에 이벤트 리스너 추가하기
prevNext.forEach((button) => {
  button.addEventListener("click", (e) => {
    // 버튼에 따라 현재 스텝 값을 증가 또는 감소
    currentStep += e.target.id === "next" ? 1 : -1;
    currentStep = Math.max(0, Math.min(8, currentStep)); // 최소 0, 최대 8로 제한
    numbers.forEach((number, numIndex) => {
      // 현재 스텝에 해당하는 페이지 번호 링크에 "active" 클래스 토글
      number.classList.toggle("active", numIndex === currentStep);
    });
    showCurrentGroup(); // 현재 그룹의 페이지 번호 링크 보여주기
    updateBtn(); // 버튼 상태 업데이트
    // 현재 스텝에 해당하는 데이터 가져와서 렌더링
    // updateDataAndRender(currentStep);
  });
});

// "시작" 버튼에 이벤트 리스너 추가하기
startBtn.addEventListener("click", () => {
  // 현재 스텝 값을 0으로 설정
  currentStep = 0;
  numbers.forEach((number, numIndex) => {
    // 현재 스텝에 해당하는 페이지 번호 링크에 "active" 클래스 토글
    number.classList.toggle("active", numIndex === currentStep);
  });
  showCurrentGroup(); // 현재 그룹의 페이지 번호 링크 보여주기
  updateBtn(); // 버튼 상태 업데이트
  // 현재 스텝에 해당하는 데이터 가져와서 렌더링
  // updateDataAndRender(currentStep);
});

// "끝" 버튼에 이벤트 리스너 추가하기
endBtn.addEventListener("click", () => {
  // 현재 스텝 값을 8로 설정
  currentStep = 8;
  numbers.forEach((number, numIndex) => {
    // 현재 스텝에 해당하는 페이지 번호 링크에 "active" 클래스 토글
    number.classList.toggle("active", numIndex === currentStep);
  });
  showCurrentGroup(); // 현재 그룹의 페이지 번호 링크 보여주기
  updateBtn(); // 버튼 상태 업데이트
  // 현재 스텝에 해당하는 데이터 가져와서 렌더링
  // updateDataAndRender(currentStep);
});
