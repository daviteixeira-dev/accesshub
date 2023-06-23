<Code language='html'>
&lt;!-- Código HTML --&gt;
&lt;a href="#main-content" id="skip-link" class="hidden"&gt;Ir para o conteúdo principal&lt;/a&gt;

&lt;main id="main-content"&gt;
    &lt;h1&gt;Conteúdo principal da página&lt;/h1&gt;
    &lt;p&gt;
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quia 
        pariatur consequatur sit, laborum quasi totam, recusandae illo, voluptatem 
        adipisci delectus saepe soluta mollitia? Aliquam iure a totam natus qui.
    &lt;/p&gt;

&lt;/main&gt;

&lt;!-- Código JavaScript --&gt;
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
</Code>
