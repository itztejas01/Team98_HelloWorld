<?php

    function generateToken() {
        $token = openssl_random_pseudo_bytes(16);

        $token = bin2hex($token);

        echo $token;
        return $token;
    }
    
?>