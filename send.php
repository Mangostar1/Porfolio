<?php 

    $name = $_POST['name'];

    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'influencia.x.94@gmail.com';
    $headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    $status = mail($to, $subject, $message, $headers);
    if ($status) {
        echo "<script>alert('Mensaje enviado correctamente');</script>";
    } else {
        echo "<script>alert('Error al enviar el mensaje');</script>";
    }
?>