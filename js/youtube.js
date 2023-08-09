var optionParams = {
    q: "동성로관광",
    part: "snippet",
    key: config.YOUTUBE_API_KEY,
    type: "video",
    maxResults: 3,
    regionCode: "KR",
    videoDuration: "medium"
};

optionParams.q = encodeURI(optionParams.q);

var url = "https://www.googleapis.com/youtube/v3/search?";
for (var option in optionParams) {
    url += option + "=" + optionParams[option] + "&";
}

url = url.substr(0, url.length - 1);

fetch(url)
    .then(response => response.json())
    .then(data => {
        var resultsDiv = document.getElementById("youtube_results");
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
                    <img src="./img/youtube_icon.png" alt="youtube_icon">
                    <p>${title}</p>
                </a>
            </div>
            `;
            console.dir(resultsDiv)
            resultsDiv.appendChild(resultDiv);
        });
    })
    .catch(error => {
        var resultsDiv = document.getElementById("youtube_results");
        resultsDiv.innerHTML = `
        <div>
          <img src="./img/youtube.png" alt="">
          <img src="./img/youtube_icon.png" alt="">
          <p>로딩중...</p>
        </div>
        <div>
          <img src="./img/youtube.png" alt="">
          <img src="./img/youtube_icon.png" alt="">
          <p>로딩중...</p>
        </div>
        <div>
          <img src="./img/youtube.png" alt="">
          <img src="./img/youtube_icon.png" alt="">
          <p>로딩중...</p>
        </div>
        `;
    });