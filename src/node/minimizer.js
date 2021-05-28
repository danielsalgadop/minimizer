// Import the filesystem module
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const extension = require('../../config/video_extensions_node.json');

var inputDir = '../../data';
var sizeFps = 24;

fs.readdir(inputDir, (error, files) => {
    if (error) {
    console.error(`error: ${error.message}`);
    return;
    }
    extension.map(ext => 
      files.forEach(file => {
        if(ext === path.extname(file)) {
          let fileName = file
          let fileNameExt = file.replace(path.extname(file),'')
          minimizer(inputDir,fileName,sizeFps,fileNameExt,ext)
          console.log(fileName + ' and ' + fileNameExt )
      }}))
  })

const minimizer = (inputDir, fileName, sizeFps, fileNameExt, ext) => { 
  exec('ffmpeg -i ' + inputDir + '/' + fileName + ' -r ' + sizeFps + ' ' + inputDir + '/' + fileNameExt + '.minimizer' + ext, (error, stdout) => {
    if (error) {
      console.error(`error: ${error.message}`);
      return;
    }
    stdout;
  });
}

