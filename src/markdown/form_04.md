<Code language='html'>
&lt;html&gt;
    &lt;body&gt;
        &lt;form action="#" method="post"&gt;
            &lt;label for="nome"&gt;Nome:&lt;/label&gt;
            &lt;input type=text name="nome" id="nome" placeholder="Digite o seu nome" required /&gt;
            &lt;label&gt;Data de Nascimento:&lt;/label /&gt;
            &lt;input type="date" name="data" min="2000-01-02" /&gt;
            &lt;label&gt;CEP:&lt;/label&gt;
            &lt;input name="CEP" id="CEP" required placeholder="Digite seu CEP" pattern="\d{5}-?\d{3}" /&gt;
            &lt;input type="submit" name="action" value="Salvar rascunho" formnovalidate /&gt;
            &lt;input type="submit" name="action" value="Enviar" /&gt;
        &lt;/form&gt;
    &lt;/body&gt;
&lt;/html&gt;
</Code>