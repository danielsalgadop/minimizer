<?php
const INPUT_DIR = '../../data';
$dir_handle = opendir(INPUT_DIR);

while($file_name = readdir($dir_handle)){
    if(isAVideo($file_name)){
        minimize($file_name);
    }
}

function isAVideo(string $file_name):bool {
    return preg_match('/.*.mp4$/',$file_name);
}

function minimize(string $file_name, $size_ratio = 4):void {
    // ffmpeg -i FILE.mp4 -vf "scale=iw/4:ih/4" FILE_minimizer.mp4
    system('ffmpeg -i '.INPUT_DIR.'/'.$file_name.' -vf "scale=iw/'.$size_ratio.':ih/'.$size_ratio.'" '.INPUT_DIR.'/'.$file_name.'.minimizer.mp4');
}