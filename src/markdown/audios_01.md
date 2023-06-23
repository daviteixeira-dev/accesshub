<Code language='html'>
&lt;!-- Código CSS --&gt;
&lt;style&gt;
    audio, a {
        margin-bottom: 1rem;
    }

    button {
        width: 10rem;
        padding: .5rem;
        margin-bottom: .5rem;
    }
&lt;/style&gt;

&lt;!-- Código HTML --&gt;
&lt;audio id='audio' controls&gt;
    &lt;source src='audio.ogg' type='audio/ogg'&gt;
    &lt;source src='audio.mp3' type='audio/mpeg'&gt;
    Your browser does not support the audio tag.
&lt;/audio&gt;
&lt;a href='/src/documento.txt' download='documento.txt'&gt;Baixar a transcrição textual do áudio (documento .txt, 10 KB)&lt;/a&gt;
&lt;button onclick='playPause()'&gt;Play/Pause&lt;/button&gt;
&lt;button onclick='aumentarVolume()'&gt;Aumentar volume&lt;/button&gt;
&lt;button onclick='diminuirVolume()'&gt;Diminuir volume&lt;/button&gt;
&lt;button onclick='multar()'&gt;Multar&lt;/button&gt;

&lt;!-- Código JavaScript --&gt;
&lt;script&gt;
    var meuAudio = document.getElementById('audio');
    function playPause(){
        if(meuAudio.paused){
            meuAudio.play();
        }else{
            meuAudio.pause();
        }
    }

    function aumentarVolume(){
        meuAudio.volume += 0.1;
    }

    function diminuirVolume(){
        meuAudio.volume -= 0.1;
    }

    function multar(){
        meuAudio.volume = 0;
    }
&lt;/script&gt;
</Code>
