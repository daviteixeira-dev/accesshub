<Code language='html'>

// Código CSS

&lt;style&gt;
    .breadcrumb {
        padding: 10px;
        font-family: sans-serif;
    }

    .breadcrumb-items {
        display: inline-block;
    }

    .breadcrumb-items:not(:last-of-type)::after {
        color: #ccc;
        content: '/';
        margin: 0 5px;
    }

    .breadcrumb-link {
        color: #999;
        text-decoration: none;
    }

    .breadcrumb-link:hover {
        text-decoration: underline;
    }

    nav.navBreadCrumb [aria-current='page'] {
        color: #008037;
        font-weight: 700;
        text-decoration: underline;
    }
&lt;/style&gt;

// Código HTML

&lt;nav class='navBreadCrumb' aria-label='breadcrumb'&gt;
    &lt;ol class='breadcrumb'&gt;
        &lt;li class='breadcrumb-items'&gt;
            &lt;a href='#' class='breadcrumb-link'&gt;Página Inicial&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class='breadcrumb-items'&gt;
            &lt;a href='#' class='breadcrumb-link'&gt;Vídeos&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class='breadcrumb-items'&gt;
            &lt;a href='#' class='breadcrumb-link'&gt;Fotos&lt;/a&gt;
            &lt;/li&gt;
        &lt;li class='breadcrumb-items'&gt;
            &lt;a href='#' class='breadcrumbs-link breadcrumbs-link-active' aria-current='page'&gt;Contato&lt;/a&gt;
        &lt;/li&gt;
    &lt;/ol&gt;
&lt;/nav&gt;

</Code>
