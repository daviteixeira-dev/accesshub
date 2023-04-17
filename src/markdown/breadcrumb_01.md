<Code language='html'>
&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title>breadcrumbs&lt;/title&gt;
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
&lt;/head&gt;
&lt;body&gt;
    &lt;nav class='navBreadCrumb' aria-label='breadcrumb'&gt;
        &lt;ol class='breadcrumb'&gt;
            &lt;li class='breadcrumb-items'&gt;
                &lt;a href='#' class='breadcrumb-link'&gt;Home&lt;/a&gt;
            &lt;/li&gt;
            &lt;li class='breadcrumb-items'&gt;
                &lt;a href='#' class='breadcrumb-link'&gt;Media&lt;/a&gt;
            &lt;/li&gt;
            &lt;li class='breadcrumb-items'&gt;
                &lt;a href='#' class='breadcrumb-link'&gt;Photos&lt;/a&gt;
            &lt;/li&gt;
            &lt;li class='breadcrumb-items'&gt;
                &lt;a 
                    href='#'
                    class='breadcrumbs-link breadcrumbs-link-active'
                    aria-current='page'
                &gt;
                    Contact
                &lt;/a&gt;
            &lt;/li&gt;
        &lt;/ol&gt;
    &lt;/nav&gt;
&lt;/body&gt;
&lt;/html&gt;
</Code>