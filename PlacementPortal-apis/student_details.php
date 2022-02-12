<?php
    include 'database.php';
    header('Content-type: application/json');

    date_default_timezone_set('Asia/Kolkata');

    $params = ['student_id', 'prn_no', 'name', 'gender', 'date_of_birth', 'mobile_no', 'address_line_1', 'address_line_2', 'email_id', 'college_id', 'language', 'hobbies'];

    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $student_id = $data['student_id'];
    $prn_no = $data['prn_no'];
    $name = $data['name'];
    $gender = $data['gender'];
    $dob = $data['date_of_birth'];
    $mobile_no = $data['mobile_no'];
    $address1 = $data['address_line_1'];
    $address2 = $data['address_line_2'];
    $email = $data['email_id'];
    $college_id = $data['college_id'];
    $langauge = $data['language'];
    $hobbies = $data['hobbies'];
    $succ = array();
    
    if($prn_no == ""){
        $error = array(
            'success'=>false,
            'http code'=>501,
            "message"=>'Please enter prn no'
        );
    }else{
    $sql = "INSERT INTO 
        `students_details` (`id`, `prn no`, `name`, `gender`, `date_of_birth`, `mobile_no`, `address_line_1`, `address_line_2`, `email_id`, `college_id`, `language_know`, `hobbies`) 
            VALUES 
                ('$student_id', '$prn_no', '$name', '$gender', '$dob', '$mobile_no', '$address1', '$address2', '$email', '$college_id', '$langauge', '$hobbies') ";
    $result = mysqli_query($conn,$sql);
    if($result){

        $succ = array(
            'success'=>true,
            'http code'=>200,
            'message'=>'Details added successfully'
        );
    }else{
        $succ = array(
            'success'=>true,
            'http code'=>200,
            'message'=>'Details not added'
        );
    }
    }

    echo json_encode($succ);
?>