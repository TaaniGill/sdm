<?php
/**
 * Shared guard for the website mail handlers.
 *
 * Include at the top of every *-send.php BEFORE any output.
 *   require_once __DIR__ . '/mail-guard.php';
 *   sdm_guard();
 *
 * Handles: CORS lock, origin check, honeypot, submission-rate limit, and the
 * From: header that makes mail() actually deliverable.
 */

define('SDM_DOMAIN', 'sachkhanddigitalmarketing.com');

/** Sender address on our own domain - required for SPF/DMARC alignment. */
function sdm_from_header($reply_name, $reply_email) {
    $from = 'website@' . SDM_DOMAIN;
    $h  = "From: Sachkhand Digital Marketing <" . $from . ">\r\n";
    if ($reply_email) {
        // FILTER_VALIDATE_EMAIL has already rejected anything containing CR/LF,
        // so this cannot be used for header injection.
        $name = preg_replace('/[^A-Za-z0-9 .\-]/', '', (string)$reply_name);
        $h .= $name
            ? "Reply-To: " . $name . " <" . $reply_email . ">\r\n"
            : "Reply-To: " . $reply_email . "\r\n";
    }
    $h .= "Return-Path: " . $from . "\r\n";
    return $h;
}

/** Envelope sender, so the host does not fall back to www-data@. */
function sdm_envelope() {
    return '-f website@' . SDM_DOMAIN;
}

/**
 * Reject anything that is not a genuine same-origin form post.
 * Echoes JSON and exits on failure.
 */
function sdm_guard() {
    $fail = function ($msg) {
        echo json_encode(array('success' => false, 'message' => $msg));
        exit;
    };

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        $fail('Invalid request.');
    }

    // Only our own site may post here.
    $origin = '';
    if (!empty($_SERVER['HTTP_ORIGIN']))       $origin = $_SERVER['HTTP_ORIGIN'];
    elseif (!empty($_SERVER['HTTP_REFERER']))  $origin = $_SERVER['HTTP_REFERER'];
    if ($origin) {
        $host = parse_url($origin, PHP_URL_HOST);
        if ($host && !preg_match('/(^|\.)' . preg_quote(SDM_DOMAIN, '/') . '$/i', $host)
                  && $host !== 'localhost') {
            $fail('Request blocked.');
        }
    }

    // Honeypot: a hidden field only a bot fills in.
    parse_str(file_get_contents('php://input'), $in);
    $in = array_merge($_POST, $in);
    if (!empty($in['website_url']) || !empty($in['_hp'])) {
        // Pretend it worked so the bot does not retry with a different shape.
        echo json_encode(array('success' => true, 'message' => 'Sent.'));
        exit;
    }

    // Crude per-IP rate limit: 5 submissions per 10 minutes.
    $ip  = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'unknown';
    $key = sys_get_temp_dir() . '/sdm_rl_' . md5($ip);
    $now = time();
    $hits = array();
    if (is_readable($key)) {
        $raw = @json_decode(@file_get_contents($key), true);
        if (is_array($raw)) $hits = $raw;
    }
    $hits = array_values(array_filter($hits, function ($t) use ($now) {
        return $t > $now - 600;
    }));
    if (count($hits) >= 5) {
        $fail('Too many submissions. Please try again shortly, or message us on WhatsApp.');
    }
    $hits[] = $now;
    @file_put_contents($key, json_encode($hits), LOCK_EX);

    return $in;
}
