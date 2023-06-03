<Code language='html'>
&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;

&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Pular Navegação&lt;/title&gt;

    &lt;style&gt;
        body {
            padding: 16px;
        }

        nav {
            margin-top: 5rem;
            background-color: #999;
        }

        nav ul {
            display: flex;
        }

        nav ul li {
            list-style: none;
            margin-right: 16px;
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

    &lt;a href="#main-content" id="skip-link" class="hidden"
        Ir para o conteúdo principal
    &lt;/a&gt;

    &lt;nav&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="#"&gt;Página Inicial&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#"&gt;Sobre&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#"&gt;Contato&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/nav&gt;

    &lt;main id="main-content"&gt;
        &lt;h1&gt;Conteúdo principal da página&lt;/h1&gt;

        &lt;p&gt;
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quia 
            pariatur consequatur sit, laborum quasi totam, recusandae illo, voluptatem 
            adipisci delectus saepe soluta mollitia? Aliquam iure a totam natus qui.
        &lt;/p&gt;

        &lt;a href="#"&gt;Algum Link&lt;/a&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, facilis dolorem 
            in aspernatur atque iure ipsa ad autem, sequi aut perferendis accusamus at 
            impedit nemo, quam illum. Dolor, cum! Adipisci.
        &lt;/p&gt;
    &lt;/main&gt;

    &lt;script&gt;
        const skipLink = document.getElementById("skip-link");
        const skipLinkHidden = document.querySelector(".hidden");

        skipLinkHidden.style.width = "0";
        skipLinkHidden.style.overflow = "hidden";
        skipLinkHidden.style.position = "absolute";


        document.addEventListener("keydown", (event) => {

            if (event.key === "Tab") {

                skipLink.style.color = "#444";
                skipLink.style.width = "250px";
                skipLink.style.padding = "16px";
                skipLink.style.fontWeight = "bold";
                skipLink.style.overflow = "visible";
                skipLink.style.position = "absolute";
                skipLink.style.textDecoration = "none";
                skipLink.style.border = "3px solid #444";
                skipLink.style.backgroundColor = "#d9d9d9";

            }
        });
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</Code>