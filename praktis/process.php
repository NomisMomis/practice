<?php

$food = $_REQUEST['food'];
$newFood = str_replace('','',$food);

$foodarray = explode(",", $newFood);

?>