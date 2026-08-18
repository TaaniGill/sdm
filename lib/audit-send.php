<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://www.sachkhanddigitalmarketing.com');
header('X-Content-Type-Options: nosniff');
require_once __DIR__ . '/mail-guard.php';
sdm_guard();

$response = array('success' => false, 'message' => '');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode($response);
    exit;
}

parse_str(file_get_contents('php://input'), $post);
$post = array_merge($_POST, $post);

$name      = isset($post['name'])      ? trim($post['name'])      : '';
$email     = isset($post['email'])     ? trim($post['email'])     : '';
$url       = isset($post['url'])       ? trim($post['url'])       : '';
$industry  = isset($post['industry'])  ? trim($post['industry'])  : '';
$challenge = isset($post['challenge']) ? trim($post['challenge']) : '';
$notes     = isset($post['notes'])     ? trim($post['notes'])     : '';

// Validate required fields
if (empty($name) || empty($email) || empty($url)) {
    $response['message'] = 'Required fields are missing.';
    echo json_encode($response);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response['message'] = 'Invalid email address.';
    echo json_encode($response);
    exit;
}

$mailTo  = 'support@sachkhanddigitalmarketing.com';
$mailCC  = 'sachkhanddigitalmarketing@gmail.com';
$subject = 'Free Website Audit Request from ' . $name;

$body  = "New free website audit request from your website.\n";
$body .= "==========================================\n\n";
$body .= "Name       : " . $name . "\n";
$body .= "Email      : " . $email . "\n";
$body .= "Website    : " . $url . "\n";
$body .= "Industry   : " . ($industry  ?: 'Not specified') . "\n";
$body .= "Challenge  : " . ($challenge ?: 'Not specified') . "\n\n";
$body .= "Notes      :\n" . ($notes ?: 'None provided') . "\n\n";
$body .= "==========================================\n";
$body .= "Please complete and deliver the audit report within 48 hours.\n";
$body .= "Sent from: Sachkhand Digital Marketing Website\n";

$headers  = sdm_from_header($name, $email);
$headers .= "CC: " . $mailCC . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$body = preg_replace('/(?<!\r)\n/', "\r\n", $body);

$success = mail($mailTo, $subject, $body, $headers, sdm_envelope());

if ($success) {
    $response['success'] = true;
    $response['message'] = 'Audit request submitted successfully.';
} else {
    $response['message'] = 'Mail server error. Please try again.';
}

echo json_encode($response);
?>