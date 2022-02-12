<?php
    header('Content-type: application/json');

    date_default_timezone_set('Asia/Kolkata');

    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $params = ['username', 'password'];

    $login_query = "SELECT * FROM login WHERE username='$username'";
    $login_result = mysqli_query($con, $login_query);
    while($login_row = mysqli_fetch_array($login_result)) {
        if (isset($data['username']) && isset($data['password'])) {
            if (strcmp($data['password'],$login_row['password'])==0) {
                if (strcmp($login_row[4], 'student')==0) {
                    $details_query = "SELECT * FROM student_details WHERE id='".$login_row[1]."'";
                    $details_result = mysqli_query ($con, $details_query);
                    while($details_row = mysqli_fetch_array($details_result)) {
                        // code
                        $succ = array(
                            "success"=> true,
                            "message"=> "Logged in successfully",
                            'result'=>array(
                                "user_details"=> array(
                                    "user_id"=> 1,
                                    "user_token"=> '2d7428a6-b58c-4008-8575-f05549f16316',
                                    "user_name"=> "Milind Padhye",
                                    "user_profile_url"=> "Profile URL",
                                    "user_email_id"=> "padhye.milind@gmail.com",
                                    "user_phone_number"=> "9823456262"
                                ),
                            "serverdatetime"=> date('Y/M/D H:i:s'),
                            "application_version"=> "1.0",
                            "http_code"=> 200
                        );
                    }
                    echo json_encode($succ);
                } else if (strcmp($login_row[4], 'super_admin') == 0) {
                    // code
                } else if (strcmp($login_row[4], 'other_admin') == 0) {
                    // code
                }
            } else {
                $err = array(
                    'success'=> false,
                    'http code'=> 200,
                    'message'=> 'Invalid Credentials',
                );
                echo json_encode($err);
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
    }

?>