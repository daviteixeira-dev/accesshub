<Code language='html'>
&lt;!-- Código HTML --&gt;
&lt;label for="speed"&gt;Velocidade:&lt;/label&gt;
&lt;select id="speed" onchange="changePlaybackSpeed()"&gt;
    &lt;option value="0.25"&gt;0.25x&lt;/option&gt;
    &lt;option value="0.5"&gt;0.5x&lt;/option&gt;
    &lt;option value="1" selected&gt;1x&lt;/option&gt;
    &lt;option value="1.5"&gt;1.5x&lt;/option&gt;
    &lt;option value="2"&gt;2x&lt;/option&gt;
&lt;/select&gt;
&lt;video id="video">&lt;/video&gt;

&lt;!-- Código JavaScript --&gt;
&lt;script&gt;

let meuVideo = document.getElementById("video");

function changePlaybackSpeed() {
    let select = document.getElementById("speed");
    let playbackSpeed = parseFloat(select.value);

    meuVideo.playbackRate = playbackSpeed;
}
&lt;/script&gt;
</Code>
