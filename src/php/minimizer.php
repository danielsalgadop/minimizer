<?php
const INPUT_DIR = '../../data';
const CONFIG_DIR = '../../config';
$input_dir_handle = opendir(INPUT_DIR);
$config_dir_handle = opendir(CONFIG_DIR);

while($file_name = readdir($input_dir_handle)){
    if(isAVideo($file_name)){
        minimize($file_name);
    }
}

function isAVideo(string $file_name):bool {
    $video_extensions = json_decode(file_get_contents(CONFIG_DIR.'/video_extensions.json'));
    foreach($video_extensions as $video_extension){
        if(preg_match("/${video_extension}$/", $file_name)){
            return true;
        }
    }
    return false;
}

function minimize(string $file_name, $size_ratio = 4):void {
    // ffmpeg -i FILE.mp4 -vf "scale=iw/4:ih/4" FILE_minimizer.mp4
    system('ffmpeg -i '.INPUT_DIR.'/'.$file_name.' -vf "scale=iw/'.$size_ratio.':ih/'.$size_ratio.'" '.INPUT_DIR.'/'.$file_name.'.minimizer.mp4');
}