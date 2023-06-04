<Code language='html'>
// Código HTML
&lt;button onclick='aumentarVolume()'&gt;Aumentar volume&lt;/button&gt;
&lt;button onclick='diminuirVolume()'&gt;Diminuir volume&lt;/button&gt;
&lt;button onclick='toggleMultar()'&gt;Multar&lt;/button&gt;
&lt;video id="video">&lt;/video&gt;

// Código JavaScript
&lt;script&gt;
let meuVideo = document.getElementById("video");

function aumentarVolume() {
    if(meuVideo.volume < 1.0){
        meuVideo.volume += 0.1;
    }
}

function diminuirVolume() {
    if(meuVideo.volume > 0.0){
        meuVideo.volume -= 0.1;
    }
}

function toggleMultar() {
    video.muted = !video.muted;
}
&lt;/script&gt;
</Code>