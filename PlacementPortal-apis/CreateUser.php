<?php
    header('Content-Type: application/json');

    include 'database.php';

    date_default_timezone_set('Asia/Kolkata');

    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (!(isset($data['user_username'])) || !(isset($data['user_password'])) || !(isset($data['user_type']))) {
        $get_query = "SELECT id FROM login WHERE username='".$data['user_username']."'";
        $get_result = mysqli_query($conn, $get_query);
        if ($row = mysqli_fetch_array($get_result)) {
            $err = array(
                'success'=> false,
                'http code'=> 513,
                'message'=> 'Username already taken please provide other username!',
            );
            header("HTTP/1.1 513 Username Already taken!");
            echo json_encode($err);
        } else {
            $insert_query = "INSERT INTO login (username, password, type) VALUES (".$data['username'].", ".$data['password'].", ".$data['type'].")";
            if (mysqli_query($conn, $insert_query)) {
                $succ = array(
                    'success'=> true,
                    'http code'=> 200,
                    'message'=> "User added successfully",
                );
                echo json_encode($succ);
            } else {
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