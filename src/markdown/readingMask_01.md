<Code language='html'>
&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Máscara de Leitura&lt;/title&gt;
    &lt;style&gt;
        body {
            background-color: #eee;
        }

        .mascara {
            top: 50%;
            left: 50%;
            width: 99%;
            height: 20%;
            z-index: 9999;
            position: absolute;
            pointer-events: none;
            border: 2px dashed #000;
            background-color: transparent;
            transform: translate(-50%, -50%);
            box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.5);
        }

        .conteudo {
            opacity: 0.5;
            filter: brightness(70%);
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="mascara"&gt;&lt;/div&gt;
    &lt;div class="conteudo"&gt;
        &lt;h1&gt;Título da Página&lt;/h1&gt;
        &lt;p&gt;Conteúdo da Página&lt;/p&gt;
        &lt;p&gt;Conteúdo da Página&lt;/p&gt;
        &lt;p&gt;Conteúdo da Página&lt;/p&gt;
    &lt;/div&gt;
    &lt;button id="toggle-mascara"&gt;Ativar/Desativar Máscara&lt;/button&gt;

    &lt;script&gt;
        const mascara = document.querySelector('.mascara');
        const conteudo = document.querySelector('.conteudo');
        const toggleMascara = document.querySelector('#toggle-mascara');

        toggleMascara.addEventListener('click', () => {
            if (mascara.classList.contains('mascara')) {
                mascara.classList.remove('mascara');
            } else {
                mascara.classList.add('mascara');
            }
        });

        document.addEventListener('mousemove', event => {
            if (mascara.classList.contains('mascara')) {
                mascara.style.top = event.clientY - (mascara.offsetHeight / 2) + 'px';
            }
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</Code>