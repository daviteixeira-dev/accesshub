<Code language='html'>
// Código HTML
&lt;label for="subtitleSelect"&gt;Escolha a legenda:&lt;/label&gt;
&lt;select id="subtitleSelect" onchange="changeSubtitle()"&gt;
    &lt;option value="0"&gt;Desativar legenda&lt;/option&gt;
    &lt;option value="1"&gt;Português&lt;/option&gt;
    &lt;option value="2"&gt;English&lt;/option&gt;
    &lt;option value="3"&gt;Español&lt;/option&gt;
&lt;/select&gt;

// Código JavaScript
&lt;script&gt;
let subtitleSelect = document.getElementById("subtitleSelect");

function changeSubtitle() {
    let tracks = meuVideo.textTracks;
    let selectedIndex = subtitleSelect.selectedIndex;

    for (let i = 0; i < tracks.length; i++) {
        let track = tracks[i];
        track.mode = "disabled";
        track.removeEventListener("loadeddata", trackLoaded);
    }

    if (selectedIndex > 0) {
        let selectedTrack = tracks[selectedIndex - 1];
        selectedTrack.addEventListener("loadeddata", trackLoaded);
        selectedTrack.mode = "showing";
    }
}

function trackLoaded() {
    let track = this;
    track.removeEventListener("loadeddata", trackLoaded);
    track.mode = "showing";
}
&lt;/script&gt;
</Code>