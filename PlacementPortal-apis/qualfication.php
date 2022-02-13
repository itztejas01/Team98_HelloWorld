<?php
    include 'database.php';
    header('Content-type: application/json');

    date_default_timezone_set('Asia/Kolkata');

    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $student_id = $data['student_id'];
    $education_level = $data['education_level'];
    $percentage = $data['education_level_percentage'];
    $education_name = $data['education_name'];

    if($student_id && $education_level && $percentage && $education_name){
        $insert_query = "INSERT INTO `qualifications`(`student_id`, `education_level`, `education_level_percentage`, `education_name`) 
                    VALUES ('$student_id','$education_level','$percentage','$education_name')";
        $result = mysqli_query($conn,$insert_query);
        if($result){
            $succ = array(
                'success'=> true,
                'http code'=> 200,
                'message'=> "User qualification added successfully",
            );
            echo json_encode($succ);
        }
        else{
            $succ = array(
                'success'=> false,
                'http code'=> 200,
                'message'=> "User qualification not added",
            );
            echo json_encode($succ);
        }
    }

?>