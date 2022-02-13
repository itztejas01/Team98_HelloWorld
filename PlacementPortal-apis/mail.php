<?php

function mail_sender($to_email,$subject,$body,$headers){
    $to_email = $to_email;
    $subject = $subject;
    $body = $body;
    $headers = $headers;
     
    if (mail($to_email, $subject, $body, $headers)) {
        return true;
    } else {
        return false;
    }
}



?>