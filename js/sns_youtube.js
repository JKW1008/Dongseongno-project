const optionParams = {
  q: "동성로관광",
  part: "snippet",
  key: config.YOUTUBE_API_KEY, // Your YouTube API key
  type: "video",
  maxResults: 12,
  regionCode: "KR",
  videoDuration: "medium"
};

tagButtons.forEach(button => {
  button.addEventListener('click', () => {
    tagButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const tag = button.dataset.tag;
    optionParams.q = `동성로${tag}`;
    performYoutubeSearch();
  });
});

function performYoutubeSearch() {
  var resultsDiv = document.getElementById("youtube_results");
  resultsDiv.innerHTML = "";

  var url = "https://www.googleapis.com/youtube/v3/search?";
  for (var option in optionParams) {
    url += option + "=" + optionParams[option] + "&";
  }
  url = url.substr(0, url.length - 1);

  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.items.forEach(item => {
        var thumbnailUrl = item.snippet.thumbnails.high.url;
        var title = item.snippet.title;
        var videoId = item.id.videoId;

        if (title.length > 25) {
          title = title.substring(0, 25) + "...";
        }

        var resultDiv = document.createElement("div");
        resultDiv.className = "result";
        resultDiv.innerHTML = `
            <div>
                <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
                    <img src="${thumbnailUrl}" alt="${title}">
                    <p>${title}</p>
                </a>
            </div>
            `;
        resultsDiv.appendChild(resultDiv);
      });
    })
    .catch(error => {
      resultsDiv.innerHTML = `
        <div>
          <a href="#">
            <img src="./img/youtube.png" alt="">
            <p>로딩중...</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="./img/youtube.png" alt="">
            <p>로딩중...</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="./img/youtube.png" alt="">
            <p>로딩중...</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="./img/youtube.png" alt="">
            <p>로딩중...</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="./img/youtube.png" alt="">
            <p>로딩중...</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="./img/youtube.png" alt="">
            <p>로딩중...</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="./img/youtube.png" alt="">
            <p>로딩중...</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="./img/youtube.png" alt="">
            <p>로딩중...</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="./img/youtube.png" alt="">
            <p>로딩중...</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="./img/youtube.png" alt="">
            <p>로딩중...</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="./img/youtube.png" alt="">
            <p>로딩중...</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="./img/youtube.png" alt="">
            <p>로딩중...</p>
          </a>
        </div>
        `;
    });
}

// 초기화 함수 호출
performYoutubeSearch();
