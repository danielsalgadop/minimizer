// Import the filesystem module
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

var inputDir = '../../data';
var extension = '.mp4';
var sizeFps = 24;

fs.readdir(inputDir, (err, files) => {
    if (err)
      process.exit();
    files.forEach(file => {
        if (path.extname(file) == extension) {
        let fileName = file
        let fileNameExt = file.replace(extension,'')
        minimizer(inputDir,fileName,sizeFps,fileNameExt)
      }})
  })

// fs.readdir(inputDir, (err, files) => {
//     if (err)
//       console.log(err);
//     else {
//       console.log(`\Filenames with the ${extension} extension:`);
//       files.forEach(file => {
//         if (path.extname(file) == extension)
//           console.log(file);
//       })
//     }
//   })

const minimizer = (inputDir, fileName, sizeFps, fileNameExt) => { 
  exec('ffmpeg -i ' + inputDir + '/' + fileName + ' -r ' + sizeFps + ' ' + inputDir + '/' + fileNameExt + '.minimizer.mp4', (error, stdout) => {
  //exec('ls', (error, stdout) => {
    if (error) {
      console.error(`error: ${error.message}`);
      return;
    }
    stdout;
  });
}

