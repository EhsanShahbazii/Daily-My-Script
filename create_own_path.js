/* i have many files and i want to create relative path
this script read all the files in a directory and edit path
of all files and create it how i want
*/

const fs = require("fs");

const getFilesInDirectory = (path, dir, files = []) => {
  // read the all files in directory
  const fileList = fs.readdirSync(dir); 
  
  for (const file of fileList) {
    const name = `${dir}/${file}`; // create correct path of files
    // if this path is directory, do recursive behavier
    if (fs.statSync(name).isDirectory()) getFilesInDirectory(path, name, files);
    else files.push(`${path}/${file}`); // if this path isn't directory, so this is file
  }
  return files;
};

// how use
const filesInTheFolder = getFilesInDirectory("./assets/pics", "./pics", []);
