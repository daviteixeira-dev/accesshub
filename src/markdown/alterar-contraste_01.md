
<Code language='html'>
&lt;!-- Código HTML --&gt;
&lt;!DOCTYPE html&gt;
&lt;html lang="pt-br"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
        &lt;title&gt;Função para mudar o contraste de um site&lt;/title&gt;
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
                justify-content: space-around;
                border-bottom: 1px solid #ddd;
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
    &lt;body class="contrast"&gt;
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
                    &lt;button id="contrast-btn" onclick="changeContrast()"&gt;
                        Alterar para o modo escuro
                    &lt;/button&gt;
                &lt;/div&gt;
            &lt;/nav&gt;
        &lt;/header&gt;
        &lt;main&gt;
            &lt;h1 class="textContrast"&gt;
                Texto de Exemplo
            &lt;/h1&gt;

            &lt;p class="textContrast"&gt;
                Esse é um texto de exemplo para você observar as funcionalidades de aumentar e diminuir 
                a fonte, como também resetar a mesma para o tamanho original.
            &lt;/p&gt;

            &lt;p class="textContrast"&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam iusto vero 
                perspiciatis dolor, ducimus, dolorum delectus omnis voluptas pariatur error 
                esse provident facilis. Doloribus suscipit quisquam quod saepe deleniti asperiores?
            &lt;/p&gt;
        &lt;/main&gt;

        &lt;!-- Código JavaScript --&gt;
        &lt;script&gt;

            let isDarkMode = false;
            let contrastBtn = document.getElementById("contrast-btn");

            // Função para mudar o contraste do site
            function changeContrast() {
                // Seleciona todos os elementos da página
                let elements = document.querySelectorAll(".contrast");
                let textElements = document.querySelectorAll(".textContrast");

                for (let i = 0; i < elements.length; i++) {
                    // Verifica se o contraste atual é o padrão
                    if (!isDarkMode) {
                        elements[i].style.backgroundColor = "#000";
                        elements[i].style.color = "#fff";
                        contrastBtn.innerHTML = "Alterar para o modo claro";
                        isDarkMode = true;
                    } else {
                        elements[i].style.backgroundColor = "#fff";
                        elements[i].style.color = "#000";
                        contrastBtn.innerHTML = "Alterar para o modo escuro";
                        isDarkMode = false;
                    }
                }

                for(let i = 0; i < textElements.length; i++){
                    if(!isDarkMode){
                        textElements[i].style.color = "#000";
                    } else {
                        textElements[i].style.color = "#fff";
                    }
                }
            }
        &lt;/script&gt;
    &lt;/body&gt;
&lt;/html&gt;
</Code>
