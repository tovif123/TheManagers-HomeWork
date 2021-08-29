<?php

require 'connect.php';
require 'config.php';
// Get the posted data.
$postdata = file_get_contents("php://input");

$con = mysqli_connect('localhost', 'root', '');//,'themanagers'


// הגדרת סט הנתונים כדי שיתמוך בעברית
mysqli_set_charset($con, "utf8");

  // Create database
   $sql = "CREATE DATABASE tovaDB";
  mysqli_query($con,$sql); 

 
  //$con->close();
  $con = mysqli_connect('localhost', 'root', '','tovaDB');//,'themanagers'

if (!$con)
  {
    echo ('Could not connect: ' );
  //die('Could not connect: ' );
  }
  
 $sql = "CREATE TABLE IF NOT EXISTS `mails` (
     `id` int(11) UNSIGNED NOT NULL,
     `userName` varchar(255) DEFAULT '',
     `adressEmail`  varchar(255) DEFAULT '',
   `subject` enum('female','male','n/a') DEFAULT NULL,
     `content` varchar(20) DEFAULT '',
     `created_at` datetime DEFAULT current_timestamp(),
     `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
     `active` int(1) UNSIGNED DEFAULT 0
   ) ENGINE=InnoDB DEFAULT CHARSET=UTF8";
  
    mysqli_query($con,$sql);

if(isset($postdata) && !empty($postdata))
{
  echo $postdata;
  // Extract the data.
  $request = json_decode($postdata);
 

  // get the data.
  $userName = mysqli_real_escape_string($con, trim($request->data->userName));
  $adressEmail = mysqli_real_escape_string($con, trim($request->data->adressEmail));
  $subject = mysqli_real_escape_string($con, trim($request->data->subject));
  $content = mysqli_real_escape_string($con, trim($request->data->content));
  $id = mysqli_real_escape_string($con, (int)$request->data->id); 
 
  $sql = "INSERT INTO `mails`(`id`,`userName`,`adressEmail`,`subject`,`content`) 
  VALUES (`{$id}`,'{$userName}','{$adressEmail}','{$subject}','{$content}')";////
   mysqli_query($con,$sql);
}
$headers = 'From: tovind48@gmail.com' . "\r\n" .
    'Reply-To: tovind48@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

# SEND THE EMAIL
mail(
   $adressEmail,$subject,$content,$headers 
)
?>
