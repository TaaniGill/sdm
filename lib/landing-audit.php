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

$name     = isset($post['name'])     ? trim($post['name'])     : '';
$phone    = isset($post['phone'])    ? trim($post['phone'])    : '';
$email    = isset($post['email'])    ? trim($post['email'])    : '';
$industry = isset($post['industry']) ? trim($post['industry']) : '';
$service  = isset($post['service'])  ? trim($post['service'])  : '';
$goals    = isset($post['goals'])    ? trim($post['goals'])    : '';

// Validate required fields
if (empty($name) || empty($email) || empty($phone)) {
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
$subject = 'Free Audit Request (Landing) from ' . $name;

$body  = "New free audit request from the landing page.\n";
$body .= "==========================================\n\n";
$body .= "Name     : " . $name . "\n";
$body .= "Phone    : " . $phone . "\n";
$body .= "Email    : " . $email . "\n";
$body .= "Industry : " . ($industry ?: 'Not specified') . "\n";
$body .= "Service  : " . ($service  ?: 'Not specified') . "\n";
$body .= "Goals    :\n" . ($goals   ?: 'None provided') . "\n\n";
$body .= "==========================================\n";
$body .= "Please complete and deliver the audit report within 48 hours.\n";
$body .= "Sent from: Sachkhand Digital Marketing Landing Page\n";

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
