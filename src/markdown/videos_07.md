<Code language='html'>
// Código HTML
&lt;button onclick="downloadAudiodescricao()"&gt;Áudio descrição&lt;/button&gt;

// Código JavaScript
&lt;script&gt;
function downloadAudiodescricao() {
    // URL da audiodescrição do vídeo
    let audiodescricaoURL = 'caminho/para/audiodescricao.mp3';

    // Cria um elemento de link temporário
    let link = document.createElement('a');
    link.href = audiodescricaoURL;
    link.download = 'audiodescricao.mp3';

    // Adiciona o link temporário ao documento
    document.body.appendChild(link);

    // Aciona o download
    link.click();

    // Remove o link temporário do documento
    document.body.removeChild(link);
}
&lt;/script&gt;
</Code>