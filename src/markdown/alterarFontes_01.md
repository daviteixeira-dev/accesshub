
<Code language='html'>

// Código HTML

&lt;button title="Aumentar fonte" onclick="increaseFont()"&gt;(A+)&lt;/button&gt;
&lt;button title="Tamanho de fonte padrão" onclick="resetFont()"&gt;(A)&lt;/button&gt;
&lt;button title="Diminuir fonte" onclick="decreaseFont()"&gt;(A-)&lt;/button&gt;

&lt;p class="font-size"&gt;Esse é um texto de exemplo para você observar as funcionalidades.&lt;/p&gt;

// Código JavaScript

&lt;script&gt;
    //Variáveis para armazenar os valores originais da fonte

    let fontSizeElements = document.querySelectorAll(".font-size");
    let originalFontSizes = {};

    for(let i = 0; i < fontSizeElements.length; i++){
        // Armazena o tamanho original da fonte
        originalFontSizes[i] = getComputedStyle(fontSizeElements[i]).fontSize;
    }

    // Função para aumentar o tamanho da fonte
    function increaseFont(){
        // Seleciona todos os elementos com a classe "font-size"
        let elements = document.querySelectorAll(".font-size");

        for(let i = 0; i < elements.length; i++){
            let fontSize = parseInt(getComputedStyle(elements[i]).fontSize);

            if(fontSize < 30){  // Limite máximo de aumento
                fontSize += 2;
                elements[i].style.fontSize = fontSize + "px";
            }
        }
    }

    // Função para diminuir o tamanho da fonte
    function decreaseFont(){
        // Seleciona todos os elementos com a classe "font-size"
        let elements = document.querySelectorAll(".font-size");

        for(let i = 0; i < elements.length; i++){
            let fontSize = parseInt(getComputedStyle(elements[i]).fontSize);

            if(fontSize > 12){ // Limite mínimo de diminuição
                fontSize -= 2;
                elements[i].style.fontSize = fontSize + "px";
            }
        }
    }

    // Função para voltar ao tamanho original da fonte
    function resetFont(){
        for(let i = 0; i < fontSizeElements.length; i++){
            fontSizeElements[i].style.fontSize = originalFontSizes[i];
        }
    }
&lt;/script&gt;
</Code>
