<?php
/** 
 * Set the headers	
 */

//header("Access-Control-Allow-Origin: *");
/* header("Access-Control-Allow-Origin: //localhost:4200");  */// *
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET,POST"); // HEAD,OPTIONS
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");		
	
/** 
 * Handle the database
 */	
// db credentials
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'brachaDB');
//myDB
// Connect with the database.angular2_tutorial
