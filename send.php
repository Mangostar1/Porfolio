<?php 

    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'influencia.x.94@gmail.com'; //Esta variable almacena el correo al que llegara el mensaje
    $headers = 'From: ' . $email . "\r\n"; //Esta variable almacena el correo del remitente

    echo $name . ' ' . $subject . ' ' . $email . ' ' . $message;

?>