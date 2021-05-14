<?php 
const INPUT_DIR = '../../data';
$dir_handle = opendir(INPUT_DIR);

while($file = readdir($dir_handle)){
    var_dump($file);
}