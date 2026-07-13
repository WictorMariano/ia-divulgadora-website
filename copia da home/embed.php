<?php
/**
 * Embed parcial — inclui o conteúdo da home dentro de outra página PHP.
 *
 * ATENÇÃO: para o visual ficar correto, a página-pai também precisa
 * carregar os CSS (veja embed-assets.php no <head>).
 *
 * Exemplo no site do cliente:
 *
 *   <?php include 'caminho/copia da home/embed-assets.php'; ?>  // no <head>
 *   <?php include 'caminho/copia da home/embed.php'; ?>         // no <body>
 */

declare(strict_types=1);

$pageFile = __DIR__ . DIRECTORY_SEPARATOR . 'home.html';

if (!is_readable($pageFile)) {
    echo '<!-- embed: home.html não encontrado -->';
    return;
}

$html = file_get_contents($pageFile);
if ($html === false) {
    echo '<!-- embed: falha ao ler home.html -->';
    return;
}

if (preg_match('/<body[^>]*>(.*)<\/body>/is', $html, $matches)) {
    echo $matches[1];
    return;
}

echo $html;
