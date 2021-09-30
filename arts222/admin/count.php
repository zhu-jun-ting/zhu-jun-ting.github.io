<?php

$info=$_GET["info"];

$myfile = fopen("count.txt", "r+") or die("Unable to open file!");
$num = number_format(fgets($myfile));
echo $num+1;
fclose($myfile);

$myfile = fopen("count.txt", "r+") or die("Unable to open file!");
fwrite($myfile,($num+1));
fclose($myfile);


//echo fgets($myfile);





?>