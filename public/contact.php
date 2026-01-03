<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    exit("Method Not Allowed");
}

if (!empty($_POST['website'])) {
    http_response_code(200);
    exit("Cool Story Bro!");
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit("Invalid input. Please fill all fields.");
}

$to = "mtinfo@militarymuaythai.com";

$from = "no-reply@militarymuaythai.com";
$subject = "New Contact Form Submission from $name";
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
$headers = "From: $from\r\nReply-To: $email\r\n";
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    exit("Thank you for contacting us, $name. We will get back to you shortly.");
} else {
    http_response_code(500);
    exit("An error occurred while sending your message. Please try again later.");
}

exit;
?>