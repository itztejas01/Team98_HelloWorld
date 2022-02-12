<?php
    header('Content-type: application/json');

    include 'database.php';
    include 'TokenGenerator.php';

    date_default_timezone_set('Asia/Kolkata');

    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $params = ['username', 'password'];

    if (isset($data['username']) && isset($data['password'])) {
        $userName = $data['username'];
        $login_query = "SELECT * FROM login WHERE `user_name`='$userName'";
        $login_result = mysqli_query($conn, $login_query);
        while($login_row = mysqli_fetch_array($login_result)) {
            if (strcmp($data['password'],$login_row['password'])==0) {
                if($login_row['user_token'] == ""){
                    $first_time_login = 1;
                }else{
                    $first_time_login = 0;
                }
                $token = generateToken();
                $token_query = "UPDATE `login` SET `user_token`='$token' WHERE id=".$login_row['id']."";
                if (mysqli_query($conn, $token_query)) {
                    if (strcmp($login_row['type'], 'student')==0) {

                            $user_id = $login_row['id'];
                            $user_token = $token;
                            $succ = array(
                                "success"=> true,
                                "message"=> "Logged in successfully",
                                'result'=>array(
                                    "user_details"=> array(
<<<<<<< HEAD
                                        "user_id"=> $details_row[0],
                                        "user_token"=> $token,
                                        "user_name"=> $name,
                                        "type"=> "Student"
=======
                                        "user_id"=> $user_id,
                                        "user_token"=> $user_token,
                                        "first_time_login"=>$first_time_login,
>>>>>>> f8cd5a39638f3574a9c656bc618e952c8929769d
                                    ),
                                ),
                                "serverdatetime"=> date('Y/M/D H:i:s'),
                                "http_code"=> 200
                            );

                        echo json_encode($succ);

                    } else if (strcmp($login_row['type'], 'super_admin') == 0) {
                        if($login_row['user_token'] == ""){
                            $first_time_login = 1;
                        }else{
                            $first_time_login = 0;
                        }

                            $user_id = $login_row['id'];
                            $user_token = $token;
                            $succ = array(
                                "success"=> true,
                                "message"=> "Logged in successfully",
                                'result'=>array(
                                    "user_details"=> array(
<<<<<<< HEAD
                                        "user_id"=> $details_row[0],
                                        "user_token"=> $token,
                                        "user_name"=> $name,
                                        "type"=> "Super Admin"
=======
                                        "user_id"=> $user_id,
                                        "user_token"=> $user_token,
                                        "first_time_login"=>$first_time_login,
>>>>>>> f8cd5a39638f3574a9c656bc618e952c8929769d
                                    ),
                                ),
                                "serverdatetime"=> date('Y/M/D H:i:s'),
                                "http_code"=> 200
                            );

                        echo json_encode($succ);

                    } else if (strcmp($login_row['type'], 'other_admin') == 0) {
                        if($login_row['user_token'] == ""){
                            $first_time_login = 1;
                        }else{
                            $first_time_login = 0;
                        }

                            $user_id = $login_row['id'];
                            $user_token = $token;
                            $succ = array(
                                "success"=> true,
                                "message"=> "Logged in successfully",
                                'result'=>array(
                                    "user_details"=> array(
<<<<<<< HEAD
                                        "user_id"=> $details_row['id'],
                                        "user_token"=> $token,
                                        "user_name"=> $name,
                                        "type"=> "Other Admin"
=======
                                        "user_id"=> $user_id,
                                        "user_token"=> $user_token,
                                        "first_time_login"=>$first_time_login,
>>>>>>> f8cd5a39638f3574a9c656bc618e952c8929769d
                                    ),
                                ),
                                "serverdatetime"=> date('Y/M/D H:i:s'),
                                "http_code"=> 200
                            );

                        echo json_encode($succ);
                    }

                } else {
                    $err = array(
                        'success'=> false,
                        'http code'=> 200,
                        'message'=> "Couldn't Login please try again after sometime!!",
                    );
                    echo json_encode($err);
                }
            } else {
                $err = array(
                    'success'=> false,
                    'http code'=> 200,
                    'message'=> 'Invalid Credentials',
                );
                echo json_encode($err);
            }
        }
    } else {
        $err = array(
            'success'=> false,
            'http code'=> 513,
            'message'=> 'Please provide either phone number or email id!',
        );
        header("HTTP/1.1 513 All Parameters not provided!");
        echo json_encode($err);
    }

?>