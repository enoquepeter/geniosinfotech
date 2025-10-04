<?php
// Configurações de segurança
ini_set('display_errors', '0');
error_reporting(E_ALL);

// Headers necessários
header('Access-Control-Allow-Origin: https://geniosdainformatica.wuaze.com'); // Ajuste para seu domínio
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Carregar variáveis de ambiente (crie um arquivo .env na raiz)
$envFile = __DIR__ . '/../.env';
if (file_exists($envFile)) {
    $env = parse_ini_file($envFile);
    $API_KEY = $env['IPAPI_KEY'] ?? '';
} else {
    http_response_code(500);
    die(json_encode(['error' => 'Configuration error']));
}

// Validação do IP
$ip = filter_var($_GET['ip'] ?? '', FILTER_VALIDATE_IP);
if (!$ip) {
    http_response_code(400);
    die(json_encode(['error' => 'Invalid IP address']));
}

// Cache setup
$cacheFile = sys_get_temp_dir() . '/location_' . md5($ip) . '.json';
$cacheTime = 24 * 60 * 60; // 24 horas

// Configuração de logs
$logFile = __DIR__ . '/../logs/api_' . date('Y-m-d') . '.log';
$logDir = dirname($logFile);

// Criar diretório de logs se não existir
if (!file_exists($logDir)) {
    mkdir($logDir, 0755, true);
}

// Função para logging
function logMessage($message, $type = 'INFO') {
    global $logFile;
    $timestamp = date('Y-m-d H:i:s');
    $logEntry = "[$timestamp] [$type] $message" . PHP_EOL;
    file_put_contents($logFile, $logEntry, FILE_APPEND);
}

// Após obter o IP
logMessage("Request received for IP: $ip");

// Verificar cache
if (file_exists($cacheFile) && (time() - filemtime($cacheFile) < $cacheTime)) {
    logMessage("Cache hit for IP: $ip");
    echo file_get_contents($cacheFile);
    exit;
}

// Configuração da requisição
$fields = 'country,countryCode,status';
$url = "https://pro.ipapi.org/api_json/one.php";
$params = http_build_query([
    'key' => $API_KEY,
    'ip' => $ip,
    'fields' => $fields
]);

// Inicializar cURL
$ch = curl_init($url . '?' . $params);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 5,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_SSL_VERIFYHOST => 2,
    CURLOPT_USERAGENT => 'GeniosInfotech/1.0',
    CURLOPT_HTTPHEADER => ['Accept: application/json']
]);

// Executar requisição
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

// Após a requisição cURL
if ($error) {
    logMessage("cURL error: $error", 'ERROR');
    http_response_code(500);
    die(json_encode([
        'error' => 'API request failed',
        'debug' => [
            'code' => $httpCode,
            'message' => $error
        ]
    ]));
}

// Validação detalhada da resposta
$data = json_decode($response, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    $jsonError = json_last_error_msg();
    logMessage("JSON decode error: $jsonError", 'ERROR');
    http_response_code(500);
    die(json_encode([
        'error' => 'Invalid API response',
        'debug' => [
            'json_error' => $jsonError,
            'raw_response' => substr($response, 0, 100) . '...'
        ]
    ]));
}

// Log da resposta
logMessage("API Response - Status: {$data['status']}, Country: {$data['country']}");

// Cache handling com log
if ($httpCode === 200 && isset($data['status']) && $data['status'] === 'success') {
    if (file_put_contents($cacheFile, $response)) {
        logMessage("Cache updated for IP: $ip");
    } else {
        logMessage("Failed to update cache for IP: $ip", 'WARNING');
    }
}

// Headers para debug (apenas em desenvolvimento)
if ($_SERVER['SERVER_NAME'] === 'localhost') {
    header('X-Debug-IP: ' . $ip);
    header('X-Debug-Cache: ' . ($cacheHit ? 'HIT' : 'MISS'));
    header('X-Debug-Response-Time: ' . number_format(microtime(true) - $_SERVER["REQUEST_TIME_FLOAT"], 4));
}