<Code language='html'>
// Código HTML
&lt;button onclick="downloadTranscricao()"&gt;Transcrição&lt;/button&gt;

// Código JavaScript
&lt;script&gt;

function downloadTranscricao(){
    // URL do arquivo de transcrição
    let transcriptionFileURL = '../video/transcription.txt';
    // Requisição para obter o arquivo de transcrição
    let request = new XMLHttpRequest();
    request.open('GET', transcriptionFileURL, true);
    request.onreadystatechange = function(){
        if( request.readyState = 4 && request.status = 200 ){
            let transcription = request.responseText;
            // Download do arquivo de transcrição
            let downloadLink = document.createElement('a');
            downloadLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(transcription)
            downloadLink.download = 'transcription.txt';
            downloadLink.click();
        };
    };
    request.send();
};

&lt;/script&gt;
</Code>
