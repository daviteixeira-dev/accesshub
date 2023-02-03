<Code language='html'>
&lt;!DOCTYPE html&gt;
&lt;html lang="pt-br"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;

    &lt;title&gt;Navegação pelo Teclado&lt;/title&gt;

    &lt;style&gt;
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        table, caption, th, td {
            padding: 1rem;
            margin: .1rem;
            font-weight: 600;
            border: 1px solid #000;
            background-color: #ddd;
        }

        main {
            margin: 1rem;
            display: flex;
            justify-content: center;
        }

        body header nav {
            width: 100%;
            margin: 1rem;
        }

        body header nav ul {
            width: 50%;
            display: flex;
            background-color: #ddd;
            border: 1px solid #000;
            justify-content: space-evenly;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;nav&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#"&gt;Produtos&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#"&gt;Sobre&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
    &lt;/header&gt;
    &lt;main&gt;
        &lt;table tabindex="0"&gt;
            &lt;caption tabindex="0"&gt;Lista de Compras&lt;/caption&gt;
            &lt;thead tabindex="0"&gt;
                &lt;tr&gt;
                    &lt;th tabindex="0"&gt;Produto&lt;/th&gt;
                    &lt;th tabindex="0"&gt;Quantidade&lt;/th&gt;
                    &lt;th tabindex="0"&gt;Valor (Unitario)&lt;/th&gt;
                &lt;/tr&gt;
            &lt;/thead&gt;
            &lt;tbody tabindex="0"&gt;
                &lt;tr&gt;
                    &lt;td tabindex="0"&gt;Suco de Laranja, 2L&lt;/td&gt;
                    &lt;td tabindex="0"&gt;2&lt;/td&gt;
                    &lt;td tabindex="0"&gt;R$ 08,00&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td tabindex="0"&gt;Biscoito&lt;/td&gt;
                    &lt;td tabindex="0"&gt;2&lt;/td&gt;
                    &lt;td tabindex="0"&gt;R$ 04,25&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td tabindex="0"&gt;Bolo&lt;/td&gt;
                    &lt;td tabindex="0"&gt;1&lt;/td&gt;
                    &lt;td tabindex="0"&gt;R$ 10,00&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/tbody&gt;
            &lt;tfoot tabindex="0"&gt;
                &lt;tr&gt;
                    &lt;td tabindex="0"&gt;Total&lt;/td&gt;
                    &lt;td tabindex="0"&gt;5&lt;/td&gt;
                    &lt;td tabindex="0"&gt;R$ 34,50&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/tfoot&gt;
        &lt;/table&gt;
    &lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;
</Code>