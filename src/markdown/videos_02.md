<Code language='html'>
// Código HTML
&lt;button onclick='toggleFullscreen()'>Tela Cheia&lt;/button&gt;
&lt;video id="video">&lt;/video&gt;

// Código JavaScript
&lt;script&gt;
let meuVideo = document.getElementById("video");

function toggleFullscreen() {
    if (meuVideo.requestFullscreen) {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            meuVideo.requestFullscreen();
        }
    } else if (meuVideo.mozRequestFullScreen) { // Firefox
        if (document.mozFullScreenElement) {
            document.mozCancelFullScreen();
        } else {
            meuVideo.mozRequestFullScreen();
        }
    } else if (meuVideo.webkitRequestFullscreen) { // Chrome, Safari and Opera
        if (document.webkitFullscreenElement) {
            document.webkitExitFullscreen();
        } else {
            meuVideo.webkitRequestFullscreen();
        }
    } else if (meuVideo.msRequestFullscreen) { // IE/Edge
        if (document.msFullscreenElement) {
            document.msExitFullscreen();
        } else {
            meuVideo.msRequestFullscreen();
        }
    }
}
&lt;/script&gt;
</Code>