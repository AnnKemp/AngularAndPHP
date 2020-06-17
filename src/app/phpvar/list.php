<?php
// dit moet in de map var/www/api op een Linux-systeem

// to make a database with content into the command-line
// https://www.a2hosting.com/kb/developer-corner/mysql/managing-mysql-databases-and-users-from-the-command-line
/*
 * returns the list of cars
 * The api/list.php script receives a GET request from the Angular side of the application and returns the list of cars stored in the database
 * */
require 'connect.php';

$cars = [];
$sql = "SELECT id, model, price FROM cars";

if($result = mysqli_query($con, $sql))
{
    $cr = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $cars[$cr]['id'] = $row['id'];
        $cars[$cr]['model'] = $row['model'];
        $cars[$cr]['price'] = $row['price'];
        $cr++;
    }
    echo json_encode(['data'=>$cars]); // to encode to json
}else{
    http_response_code(404);
}
