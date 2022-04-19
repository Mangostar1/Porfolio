<?php 

    $name = $_POST['name'];

    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'influencia.x.94@gmail.com';
    $headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if(mail($to, $subject, $message, $headers)){
        echo '<p>Your message has been sent!</p>';
    } else {
        echo '<p>Something went wrong, go back and try again!</p>';
    }

    header("Location: index.html");

    exit;
?>