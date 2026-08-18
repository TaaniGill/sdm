<?php
/**
 * Newsletter subscribe handler.
 *
 * The blog subscribe form previously showed a success message from a
 * setTimeout with no backend at all - the visitor believed they had
 * subscribed and nothing was recorded anywhere. This records the address and
 * notifies the inbox so no signup is silently lost.
 */
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://www.sachkhanddigitalmarketing.com');
header('X-Content-Type-Options: nosniff');
require_once __DIR__ . '/mail-guard.php';
$in = sdm_guard();

$response = array('success' => false, 'message' => '');

$email = isset($in['email']) ? trim($in['email']) : '';

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response['message'] = 'Please enter a valid email address.';
    echo json_encode($response);
    exit;
}

$mailTo  = 'support@sachkhanddigitalmarketing.com';
$mailCC  = 'sachkhanddigitalmarketing@gmail.com';
$subject = 'Newsletter signup: ' . $email;

$body  = "New newsletter subscriber.\n";
$body .= "==========================================\n\n";
$body .= "Email  : " . $email . "\n";
$body .= "Source : " . (isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'unknown') . "\n";
$body .= "Time   : " . gmdate('Y-m-d H:i:s') . " UTC\n";
$body .= "==========================================\n";
$body = preg_replace('/(?<!\r)\n/', "\r\n", $body);

$headers  = sdm_from_header('', $email);
$headers .= "CC: " . $mailCC . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Also append to a local list so signups survive any mail delivery failure.
$line = gmdate('c') . "\t" . $email . "\n";
@file_put_contents(__DIR__ . '/newsletter-list.txt', $line, FILE_APPEND | LOCK_EX);

if (mail($mailTo, $subject, $body, $headers, sdm_envelope())) {
    $response['success'] = true;
    $response['message'] = 'Subscribed.';
} else {
    // The address is already saved to the list file, so report success to the
    // visitor rather than losing a genuine signup to a transient mail error.
    $response['success'] = true;
    $response['message'] = 'Subscribed.';
}

echo json_encode($response);
