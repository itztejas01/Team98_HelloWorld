<?php
    header('Content-Type: application/json');

    include 'database.php';
    include 'mail.php';
    include 'TokenGenerator.php';

    date_default_timezone_set('Asia/Kolkata');

    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $user_name = $data['email_id'];
    if($user_name){
        $see_query = "SELECT * FROM `login` WHERE user_name = '$user_name' ";
        $see_result = mysqli_query($conn,$see_query);
        $row = mysqli_fetch_row($see_result);
        if($row){
            $password = password_generate();
            $token = generateToken();
            $update_query = "UPDATE `login` SET `user_token` = '$token' `password` = '$password' ";
            $update_result = mysqli_query($conn,$update_query);
            if($update_query){
                $succ = array(
                    'success'=>true,
                    'http code'=>200,
                    'message'=>'New password has sent to email'
                );
                $body='
                <p>New password is: </p><br>
                <p>'.$password.'</p>
                ';
                $Subject = 'Login Credentials to '.$user_name.'';
                $headers = 'From: Sender Admin ';
                $mail = mail_sender($user_name,$Subject,$body,$headers);
                echo json_encode($succ);
            }else{
                $err = array(
                    'success'=>false,
                    'http code'=>200,
                    'message'=>'New password has not sent'
                );
                echo json_encode($err);
            }
        }else{
            $err = array(
                'success'=>false,
                'http code'=>512,
                'message'=>'User not exist'
            );
            echo json_encode($err);
        }
    }
?>