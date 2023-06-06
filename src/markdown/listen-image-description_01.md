<Code language='html'>

// Código HTML

&lt;button id="playButton" onclick="playDescription()"&gt;Reproduzir&lt;/button&gt;

&lt;figure&gt;
    &lt;img
        src="imagem.jpg"
        alt="Aqui você vai descrever a sua imagem, faça uma descrição sintética 
        em poucas palavras ou em uma frase curta. "
        id="image"
    &gt;
&lt;/figure&gt;

// Código JavaScript

&lt;script&gt;
    var images = document.getElementsByTagName("img");

    // Podemos executar a função playDescription em um botão
    function playDescription(){
        const desc = new SpeechSynthesisUtterance(image.alt);
        window.speechSynthesis.speak(desc);
    }
&lt;/script&gt;
</Code>