<Code language='html'>
// Código HTML
&lt;button onclick="downloadVideo()"&gt;Baixar vídeo&lt;/button&gt;

// Código JavaScript
&lt;script&gt;
function downloadVideo() {
    let videoUrl = "../video/video.mp4";
    let filename = "video.mp4";

    fetch(videoUrl)
        .then(response => response.blob())
        .then(blob => {
            let url = URL.createObjectURL(blob);
            let a = document.createElement("a");
            a.href = url;
            a.download = filename;
            a.click();
            URL.revokeObjectURL(url);
        });
}
&lt;/script&gt;
</Code>