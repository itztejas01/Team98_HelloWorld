<?php 

    header('Content-Type: application/json');

    include 'database.php';
    include 'mail.php';
    include 'TokenGenerator.php';

    date_default_timezone_set('Asia/Kolkata');

    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $company_name = $data['company_name'];
    $dream_company = $data['dream_company'];
    var_dump($company_name);
    if(isset($company_name) || isset($dream_company)){
        $get_query = "SELECT * FROM `company_details` WHERE `company_name` = '$company_name'";
        $get_result = mysqli_query($conn, $get_query);
        $row = mysqli_fetch_row($get_result);
        if($row){
            $err = array(
                'success'=> false,
                'http code'=> 513,
                'message'=> 'Company already exist',
            );
            header("HTTP/1.1 513 Username Already taken!");
            echo json_encode($err);
        }
        else{
            $insert_query = "INSERT INTO `company_details`(`company_name`, `dream_company`) VALUES ('$company_name','$dream_company')";
            $result = mysqli_query($conn,$insert_query);
            if($result){
                $succ = array(
                'success'=> true,
                'http code'=> 200,
                'message'=> 'Company added successfully',
                );
                header("HTTP/1.1 200 Company added successfully");
                echo json_encode($succ);
            }
            else{
                $succ = array(
                    'success'=> false,
                    'http code'=> 200,
                    'message'=> 'Company added successfully',
                );
                header("HTTP/1.1 200 Company not added");
                echo json_encode($succ);
            }
        }
    }




?>