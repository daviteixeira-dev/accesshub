<Code language='html'>
&lt;html&gt;
    &lt;body&gt;
        &lt;style&gt;
            main {
                display: flex;
                align-items: center;
                flex-direction: column;
            }

            video {
                margin-bottom: 1rem;
            }

            button {
                width: 10rem;
                padding: .5rem;
                margin-bottom: .5rem;
            }
        &lt;/style&gt;
        &lt;main&gt;
            &lt;video id='video' width='320' height='240' controls&gt;
                &lt;source src='exemplo.mp4' type='video/mp4'&gt;
                &lt;source src='exemplo.ogg' type='video/ogg'&gt;
                Seu navegador não suporta a elemento video.
            &lt;/video&gt;
            &lt;button onclick='playPause()'&gt;Play/Pause&lt;/button&gt;
            &lt;button onclick='grande()'&gt;Janela Grande&lt;/button&gt;
            &lt;button onclick='pequeno()'&gt;Janela Pequena&lt;/button&gt;
            &lt;button onclick='normal()'&gt;Janela Normal&lt;/button&gt;
            &lt;button onclick='aumentarVolume()'&gt;Aumentar volume&lt;/button&gt;
            &lt;button onclick='diminuirVolume()'&gt;Diminuir volume&lt;/button&gt;
            &lt;button onclick='multar()'&gt;Multar&lt;/button&gt;
        &lt;/main&gt;
        &lt;script&gt;
            var meuVideo = document.getElementById('video');

            function playPause(){
                if(meuVideo.paused){
                    meuVideo.play();
                }else{
                    meuVideo.pause();
                }
            }
            function grande(){
                meuVideo.width = 500;
            }
            function pequeno(){
                meuVideo.width = 300;
            }
            function normal(){
                meuVideo.width = 420;
            }
            function aumentarVolume(){
                meuVideo.volume += 0.1;
            }
            function diminuirVolume(){
                meuVideo.volume -= 0.1;
            }
            function multar(){
                meuVideo.volume = 0;
            }
        &lt;/script&gt;
    &lt;/body&gt;
&lt;/html&gt;
</Code>