<Code language='html'>
&lt;!-- Código HTML --&gt;
&lt;button onclick='playPause()' class="pausePlaybtn"&gt;Play&lt;/button&gt;
&lt;video id="video"&gt;&lt;/video&gt;

&lt;!-- Código JavaScript --&gt;
&lt;script&gt;
let meuVideo = document.getElementById("video");

function playPause() {

    let pausePlaybtn = document.querySelector(".pausePlaybtn");

    if (meuVideo.paused) {
        pausePlaybtn.innerHTML = "Pause";
        meuVideo.play();
    } else {
        pausePlaybtn.innerHTML = "Play";
        meuVideo.pause();
    }
}
&lt;/script&gt;
</Code>
