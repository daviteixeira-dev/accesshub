<Code language='html'>
&lt;html&gt;
    &lt;body&gt;
        &lt;style&gt;
            nav {
                width: 12rem;
                padding: 1rem;
                text-align: start;
            }

            ul {
                margin: 0;
                padding: 0;
                display: flex;
                list-style: none;
                flex-direction: column;
                justify-content: space-evenly;
            }

            li {
                margin-bottom: .5rem;
            }

        &lt;/style&gt;
        &lt;nav id='bloco-conteudo'&gt;
            &lt;p&gt;Bem-Vindo(a), você deseja: &lt;/p&gt;
            &lt;ul&gt;
                &lt;li&gt;
                    &lt;a href='#cabecalho'&gt;
                        Ir para o cabeçalho
                    &lt;/a&gt;
                &lt;/li&gt;
                ...
                &lt;li&gt;
                    &lt;a href='#conteudo'&gt;
                        Ir para o conteúdo principal
                    &lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href='#menu'&gt;
                        Ir para o menu principal
                    &lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href='#rodape'&gt;
                        Ir para o rodapé
                    &lt;/a&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
    &lt;/body&gt;
&lt;/html&gt;
</Code>