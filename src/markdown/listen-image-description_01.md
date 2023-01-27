<Code language='html'>
&lt;!DOCTYPE html&gt;
&lt;html lang="pt-br"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Função para ouvir a descrição da imagem&lt;/title&gt;
    &lt;style&gt;
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        main {
            margin: 1rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }

        main figure {
            width: 25%;
            display: flex;
            margin-top: 1rem;
            flex-direction: column;
        }

        main figure img {
            margin-bottom: 1rem;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;main&gt;
        &lt;h1&gt;
            Imagem de exemplo
        &lt;/h1&gt;

        &lt;button id="playButton" onclick="playDescription()"&gt;Play&lt;/button&gt;
        &lt;figure&gt;
            &lt;img
                src="imagem.jpg"
                alt="Aqui você vai descrever a sua imagem, faça uma descrição sintética 
                em poucas palavras ou em uma frase curta. "
                id="image"
            &gt;
        &lt;/figure&gt;
    &lt;/main&gt;
    &lt;script&gt;
        var images = document.getElementsByTagName("img");

        for (var i = 0; i < images.length; i++) {
            images[i].addEventListener("mouseover", function() {
                var alt = this.getAttribute("alt");
                if (alt) {
                    speak(alt);
                }
            });
        }

        function speak(text) {
            var speech = new SpeechSynthesisUtterance();
            speech.text = text;
            speech.volume = 1;
            speech.rate = 1;
            speech.pitch = 1;
            speech.lang = 'pt-BR';
            window.speechSynthesis.speak(speech);
        }

        // Ou, podemos executar a função playDescription em um botão
        function playDescription(){
            const desc = new SpeechSynthesisUtterance(image.alt);
            window.speechSynthesis.speak(desc);
        }
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</Code>