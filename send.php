<?php 

    $name = $_POST['name'];

    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'influencia.x.94@gmail.com';
    
    if (mail($to, $subject, $message)) {
        echo '<h1>mensaje enviado</h1>';
    } else {
        echo '<h1>Error, mensaje no enviado</h1>';
    }
?>