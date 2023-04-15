<Code language='html'>
&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Pular Navegação&lt;/title&gt;
    &lt;style&gt;
        #skip-link {
            top: auto;
            width: 1px;
            height: 1px;
            left: -10000px;
            overflow: hidden;
            position: absolute;
        }

        #skip-link:focus {
            width: auto;
            height: auto;
            position: static;
            overflow: visible;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;a href="#main-content" id="skip-link"&gt;
        Ir para o conteúdo principal
    &lt;/a&gt;

    &lt;main&gt;
        &lt;a href='#' id='main-content' class='oculto'&gt;
            Conteúdo principal da página
        &lt;/a&gt;
    &lt;/main&gt;

    &lt;script&gt;
        const skipLink = document.getElementById('skip-link');

        document.addEventListener('keydown', event => {
            if (event.key === 'Tab') {
                skipLink.style.position = 'static';
                skipLink.style.width = 'auto';
                skipLink.style.height = 'auto';
                skipLink.style.overflow = 'visible';
            }
        });

        skipLink.addEventListener('click', () => {
            skipLink.style.position = 'absolute';
            skipLink.style.width = '1px';
            skipLink.style.height = '1px';
            skipLink.style.overflow = 'hidden';
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</Code>