<?php 

    $name = $_POST['name'];

    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'influencia.x.94@gmail.com';
    
    if (mail($to, $subject, $message)) {
        echo 'mensaje enviado';
    } else {
        echo 'Error, mensaje no enviado';
    }
?>