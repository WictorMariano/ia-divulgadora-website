<?php
/**
 * Entrada PHP da cópia estática da home — IA Divulgadora
 *
 * Use esta pasta em qualquer hospedagem PHP (Apache/Nginx + PHP).
 * O React do projeto principal NÃO roda aqui: esta é uma versão
 * HTML + CSS + JS pronta para o servidor do cliente.
 *
 * Exemplos de uso:
 * 1) Acesse diretamente: /copia-da-home/ ou /copia-da-home/index.php
 * 2) No site do cliente: header("Location: /caminho/para/copia da home/");
 * 3) Embed parcial: include __DIR__ . '/embed.php';
 */

declare(strict_types=1);

$pageFile = __DIR__ . DIRECTORY_SEPARATOR . 'home.html';

if (!is_readable($pageFile)) {
    http_response_code(500);
    header('Content-Type: text/plain; charset=utf-8');
    echo "Erro: arquivo home.html não encontrado nesta pasta.";
    exit;
}

header('Content-Type: text/html; charset=utf-8');
readfile($pageFile);
