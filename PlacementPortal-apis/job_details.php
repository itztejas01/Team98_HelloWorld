<?php 

    header('Content-Type: application/json');

    include 'database.php';

    date_default_timezone_set('Asia/Kolkata');

    $json = file_get_contents('php://input');
    $data = json_decode($json, true);


    $company_id = $data['company_id'];
    $job_title = $data['job_title'];
    $company_ctc = $data['company_ctc'];
    $eligible_criteria = $data['eligible_criteria'];
    if ($company_id || $job_title || $company_ctc || $eligible_criteria){
        $insert_query = "INSERT INTO `job_details`(`company_id`, `job_title`, `company_ctc`, `eligible_criteria`) VALUES ('$company_id','$job_title','$company_ctc','$eligible_criteria')";
        $result = mysqli_query($conn,$insert_query);
        if($result){
            $succ = array(
                'success'=> true,
                'http code'=> 200,
                'message'=> 'Job Details added successfully',
            );
            header("HTTP/1.1 200 Company added successfully");
            echo json_encode($succ);
        }else{
            $succ = array(
                'success'=> true,
                'http code'=> 200,
                'message'=> 'Job Details not added successfully',
            );
            header("HTTP/1.1 200 Job Details not added successfully");
            echo json_encode($succ);
        }
    }
?>