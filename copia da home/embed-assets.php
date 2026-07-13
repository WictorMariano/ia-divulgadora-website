<?php
/**
 * Assets para embed — coloque no <head> da página-pai do cliente.
 */

declare(strict_types=1);

$base = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '')), '/');
// Se o include for feito de outra pasta, o cliente pode sobrescrever:
if (!isset($IA_DIVULGADORA_HOME_BASE)) {
    // Caminho relativo padrão a partir desta pasta
    $IA_DIVULGADORA_HOME_BASE = '';
}

$cssFiles = glob(__DIR__ . DIRECTORY_SEPARATOR . 'assets' . DIRECTORY_SEPARATOR . 'styles-*.css') ?: [];
$cssName = $cssFiles ? basename($cssFiles[0]) : 'styles.css';
$prefix = $IA_DIVULGADORA_HOME_BASE !== '' ? rtrim($IA_DIVULGADORA_HOME_BASE, '/') . '/' : '';
?>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" />
<link rel="stylesheet" href="<?= htmlspecialchars($prefix . 'assets/' . $cssName, ENT_QUOTES, 'UTF-8') ?>" />
<link rel="stylesheet" href="<?= htmlspecialchars($prefix . 'css/php-home.css', ENT_QUOTES, 'UTF-8') ?>" />
<script src="<?= htmlspecialchars($prefix . 'js/site.js', ENT_QUOTES, 'UTF-8') ?>" defer></script>
