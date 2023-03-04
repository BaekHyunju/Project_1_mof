var mbNavList = document.querySelector(".mb-nav-list");
var mbBt = document.querySelector(".mb-bt");
mbBt.addEventListener("click", function () {
    mbNavList.classList.toggle("active");
    mbBt.classList.toggle("active");
})



// 스와이퍼 슬라이드 유튜브 영상 넣기
// // 유튜브 api 추가
// 만약 이게 쓰고싶지않다면 
// <script src="https://www.youtube.com/iframe_api"></script> 
// 해당 스크립트를 import 할 것.

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
    // Check all slides and initialize video players
    var swiper = document.getElementById('video-swiper');
    var slides = swiper.getElementsByClassName('swiper-slide')

    var players = [];

    for (var i = 0; i < slides.length; i++) {
        var element = slides[i].getElementsByClassName('yt-player')[0];
        var id = element.getAttribute('data-id');
        var player = new YT.Player(element, {
            height: '200',
            width: '270',
            videoId: id,
            playerVars: {
                autoplay: false,
                modestbranding: true,
                rel: 0
            },
            on: {
                slideChange: function () {
                    players[mySwiper.previousIndex].pauseVideo();
                    // players[mySwiper.activeIndex].playVideo();
                }
            }

            // events: {
            //   'onReady': onPlayerReady,
            //   'onStateChange': onPlayerStateChange
            // }
        });
        players.push(player);
    }



}