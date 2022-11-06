<Code language='css'>
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
</Code>