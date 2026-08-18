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

$fname   = isset($post['fname'])   ? trim($post['fname'])   : '';
$lname   = isset($post['lname'])   ? trim($post['lname'])   : '';
$email   = isset($post['email'])   ? trim($post['email'])   : '';
$phone   = isset($post['phone'])   ? trim($post['phone'])   : '';
$website = isset($post['website']) ? trim($post['website']) : '';
$goal    = isset($post['goal'])    ? trim($post['goal'])    : '';
$format  = isset($post['format'])  ? trim($post['format'])  : '';

// Validate required fields
if (empty($fname) || empty($lname) || empty($email)) {
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
$subject = 'Free Consultation Request from ' . $fname . ' ' . $lname;

$body  = "New free consultation booking from your website.\n";
$body .= "==========================================\n\n";
$body .= "Name    : " . $fname . ' ' . $lname . "\n";
$body .= "Email   : " . $email . "\n";
$body .= "Phone   : " . ($phone   ?: 'Not provided') . "\n";
$body .= "Website : " . ($website ?: 'Not provided') . "\n";
$body .= "Goal    : " . ($goal    ?: 'Not specified') . "\n";
$body .= "Format  : " . ($format  ?: 'Not specified') . "\n\n";
$body .= "==========================================\n";
$body .= "Please confirm the consultation slot with the client within 30 minutes.\n";
$body .= "Sent from: Sachkhand Digital Marketing Website\n";

$headers  = sdm_from_header('', $email);
$headers .= "CC: " . $mailCC . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$body = preg_replace('/(?<!\r)\n/', "\r\n", $body);

$success = mail($mailTo, $subject, $body, $headers, sdm_envelope());

if ($success) {
    $response['success'] = true;
    $response['message'] = 'Consultation booked successfully.';
} else {
    $response['message'] = 'Mail server error. Please try again.';
}

echo json_encode($response);
?>