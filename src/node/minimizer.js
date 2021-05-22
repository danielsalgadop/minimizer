// Import the filesystem module
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

var inputDir = '../../data';
var extension = '.mp4';
var sizeRatio = 4;
var fileName = fs.readdir(inputDir, (err, files) => {
    if (err)
      console.log(err);
    else {
      files.forEach(file => {
        if (path.extname(file) == extension)
        file.replace(extension,'')
      })
    }
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
console.log(fileName);

// exec('ffmpeg -i '.inputDir.'/'.$fileName.' -vf "scale=iw/'.$sizeRatio.':ih/'.$sizeRatio.'" '.inputDir.'/'.$fileName.'.minimizer.mp4', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`error: ${error.message}`);
//     return;
//   }

//   if (stderr) {
//     console.error(`stderr: ${stderr}`);
//     return;
//   }

//   console.log(`stdout:\n${stdout}`);
// });
