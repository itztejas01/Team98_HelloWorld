<?php

    function generateToken() {
        $token = openssl_random_pseudo_bytes(16);

        $token = bin2hex($token);
        return $token;
    }

    function password_generate(){
    $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
    $pass = array();
    $alphaLength = strlen($alphabet) - 1;
    for ($i = 0; $i < 8; $i++) {
        $n = rand(0, $alphaLength);
        $pass[] = $alphabet[$n];
    }
    return implode($pass);
    }
    
?>