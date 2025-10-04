<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gênios da Informática - Soluções Tecnológicas Inovadoras</title>
    <meta name="description"
        content="Especialistas em suporte técnico, desenvolvimento web, cibersegurança, marketing digital e soluções tecnológicas para empresas e particulares" />
    <meta name="author" content="Enoque Peter" />

    <meta property="og:title" content="genius-digital-sphere" />
    <meta property="og:description" content="Lovable Generated Project" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@lovable_dev" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Google site verification -->
    <meta name="google-site-verification" content="nmeJ2Y4ENgoYGiejqi73eCA9dn8St75RHlfkPBSX_Kw" />

    <link rel="icon" type="image/png" href="./favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
    <link rel="shortcut icon" href="./favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
    <link rel="manifest" href="./site.webmanifest" />

    <!-- Prevenir FOUC - Aplicar tema antes do React carregar -->
    <script>
        (function() {
            var storageKey = 'mundo-solucoes-theme';
            var theme = localStorage.getItem(storageKey);
            var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            var initial = theme === 'system' || !theme ? (prefersDark ? 'dark' : 'light') : theme;
            var root = document.documentElement;
            root.classList.remove('light', 'dark');
            root.classList.add(initial);
        })();
    </script>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite([
    'resources/js/main.tsx',
    ])
</head>

<body">
    <div id="root"></div>
    </body>

</html>