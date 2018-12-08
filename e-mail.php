<?php

    $email_to = "piotrkucia95@gmail.com";
    $email_subject = "Wiadomość z Twojej strony internetowej";

    $imie = $_POST["imie"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $email_message = "";

    $email_message .= "Od: ".$imie."\n";
    $email_message .= "Email: ".$email."\n\n\n";
    $email_message .= $message."\n";

    mail($email_to, $email_subject, $email_message, " ");  
    
    header("Location: http://www.piotr-kucia.pl");
?>

