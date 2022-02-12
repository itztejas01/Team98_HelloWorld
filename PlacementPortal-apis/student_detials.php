<?php
 
    header('Content-type: application/json');

    date_default_timezone_set('Asia/Kolkata');

    $params = ['student_id', 'user_token', 'name', 'emailId', 'contact', 'address_line_1', 'address_line_2', 'city', 'pincode', 'state', 'country', 'app_version', 'actionType'];

    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    






?>