
<Code language='html'>
&lt;!DOCTYPE html&gt;
&lt;html lang="pt-br"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
        &lt;title&gt;Função para Alterar o tamanho da fonte&lt;/title&gt;
        &lt;style&gt;

            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            header nav {
                width: 100%;
                padding: 1rem;
                display: flex;
                margin-bottom: 1rem;
                align-items: center;
                background-color: #ddd;
                justify-content: space-around;
            }

            header nav ul, 
            header nav .bts {
                display: flex;
                align-items: center;
                justify-content: space-around;
            }

            header nav ul {
                width: 60%;
            }

            header nav p, 
            header nav .bts {
                width: 20%;
            }

            header nav ul li {
                list-style: none;
            }

            header nav .bts button {
                padding: .5rem;
                cursor: pointer;
            }

            main {
                margin: 1rem;
            }

            main h1 {
                font-size: 30px;
                margin-bottom: 1rem;
            }

            main p {
                font-size: 16px;
                margin-bottom: 1rem;
            }

            main h1, main p {
                transition: 0.4s ease-in-out;
            }
        &lt;/style&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;header&gt;
            &lt;nav&gt;
                &lt;p&gt;Menu&lt;/p&gt;
                &lt;ul&gt;
                    &lt;li&gt;Home&lt;/li&gt;
                    &lt;li&gt;Produtos&lt;/li&gt;
                    ...
                    &lt;li&gt;Sobre&lt;/li&gt;
                &lt;/ul&gt;
                &lt;div class="bts"&gt;
                    &lt;button title="Aumentar fonte" onclick="increaseFont()"&gt;(A+)&lt;/button&gt;
                    &lt;button title="Tamanho de fonte padrão" onclick="resetFont()"&gt;(A)&lt;/button&gt;
                    &lt;button title="Diminuir fonte" onclick="decreaseFont()"&gt;(A-)&lt;/button&gt;
                &lt;/div&gt;
            &lt;/nav&gt;
        &lt;/header&gt;
        &lt;main&gt;
            &lt;h1 class="font-size"&gt;
                Texto de Exemplo
            &lt;/h1&gt;

            &lt;p class="font-size"&gt;
                Esse é um texto de exemplo para você observar as funcionalidades de aumentar e diminuir 
                a fonte, como também resetar a mesma para o tamanho original.
            &lt;/p&gt;

            &lt;p class="font-size"&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam iusto vero 
                perspiciatis dolor, ducimus, dolorum delectus omnis voluptas pariatur error 
                esse provident facilis. Doloribus suscipit quisquam quod saepe deleniti asperiores?
            &lt;/p&gt;
        &lt;/main&gt;
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
    &lt;/body&gt;
&lt;/html&gt;
</Code>
