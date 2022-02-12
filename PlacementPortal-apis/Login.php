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
                $token = generateToken();
                $token_query = "UPDATE `login` SET `user_token`='$token' WHERE id=".$login_row['id']."";
                if (mysqli_query($conn, $token_query)) {
                    if (strcmp($login_row['type'], 'student')==0) {

                        $details_query = "SELECT * FROM student_details WHERE id=".$login_row['id']."";
                        $details_result = mysqli_query ($conn, $details_query);
                        while($details_row = mysqli_fetch_array($details_result)) {
                            $name = $details_row[1];
                            $contact = $details_row[2];
                            $email = $details_row[3];
                            $succ = array(
                                "success"=> true,
                                "message"=> "Logged in successfully",
                                'result'=>array(
                                    "user_details"=> array(
                                        "user_id"=> $details_row[0],
                                        "user_token"=> $token,
                                        "user_name"=> $name,
                                        "user_email_id"=> $email,
                                        "user_phone_number"=> $contact
                                    ),
                                ),
                                "serverdatetime"=> date('Y/M/D H:i:s'),
                                "http_code"=> 200
                            );
                        }
                        echo json_encode($succ);

                    } else if (strcmp($login_row['type'], 'super_admin') == 0) {
                        
                        $details_query = "SELECT * FROM superadmin_details WHERE id=".$login_row['id']."";
                        $details_result = mysqli_query ($conn, $details_query);
                        while($details_row = mysqli_fetch_array($details_result)) {
                            $name = $details_row['full_name'];
                            $contact = $details_row['contact'];
                            $email = $details_row['email_id'];
                            $succ = array(
                                "success"=> true,
                                "message"=> "Logged in successfully",
                                'result'=>array(
                                    "user_details"=> array(
                                        "user_id"=> $details_row[0],
                                        "user_token"=> $token,
                                        "user_name"=> $name,
                                        "user_email_id"=> $email,
                                        "user_phone_number"=> $contact
                                    ),
                                ),
                                "serverdatetime"=> date('Y/M/D H:i:s'),
                                "http_code"=> 200
                            );
                        }
                        echo json_encode($succ);

                    } else if (strcmp($login_row['type'], 'other_admin') == 0) {

                        $details_query = "SELECT * FROM other_admin_details WHERE id=".$login_row['id']."";
                        $details_result = mysqli_query ($conn, $details_query);
                        while($details_row = mysqli_fetch_array($details_result)) {
                            $name = $details_row[1];
                            $contact = $details_row[2];
                            $email = $details_row[3];
                            $succ = array(
                                "success"=> true,
                                "message"=> "Logged in successfully",
                                'result'=>array(
                                    "user_details"=> array(
                                        "user_id"=> $details_row['id'],
                                        "user_token"=> $token,
                                        "user_name"=> $name,
                                        "user_email_id"=> $email,
                                        "user_phone_number"=> $contact
                                    ),
                                ),
                                "serverdatetime"=> date('Y/M/D H:i:s'),
                                "http_code"=> 200
                            );
                        }
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