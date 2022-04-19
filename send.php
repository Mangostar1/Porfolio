<?php 

    $name = $_POST['name'];

    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'influencia.x.94@gmail.com';
    $headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

    header("Location: index.html");

    exit;
?>