<?php
    header('Content-Type: application/json');

    include 'database.php';
    include 'mail.php';
    include 'TokenGenerator.php';

    date_default_timezone_set('Asia/Kolkata');

    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $password = password_generate();
    $email= $data['username'];
    $type = $data['type'];
    if ((isset($email)) || (isset($type))) {
        $get_query = "SELECT * FROM `login` WHERE user_name='$email'";
        $get_result = mysqli_query($conn, $get_query);
        if ($row = mysqli_fetch_array($get_result)) {
            $err = array(
                'success'=> false,
                'http code'=> 513,
                'message'=> 'Username already taken please provide other username!',
            );
            header("HTTP/1.1 513 Username Already taken!");
            echo json_encode($err);
            
        } 
        else {
            $insert_query = "INSERT INTO `login`(`user_name`, `password`, `type`) VALUES ('$email','$password','$type')";
            $result = mysqli_query($conn,$insert_query);
            if ($result) {
                $succ = array(
                    'success'=> true,
                    'http code'=> 200,
                    'message'=> "User added successfully",
                );
                
                $body='
                <p>username: '.$email.'</p><br>
                <p>password: '.$password.'</p>
                ';
                $Subject = 'Login Credentials to '.$email.'';
                $headers = 'From: Sender Admin ';
                $mail = mail_sender($email,$Subject,$body,$headers);
                echo json_encode($succ);
            } 
            else {
                $err = array(
                    'success'=> false,
                    'http code'=> 513,
                    'message'=> 'Username already taken please provide other username!',
                );
                header("HTTP/1.1 513 Username Already taken!");
                echo json_encode($err);
            }
        }
    }
    
?>