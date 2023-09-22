# Daily-My-Script
In my daily work, sometimes I need to be more efficient. That's why I get to work and code. I will put the codes here.

### get normal string (cast box problem)
```js
// telegram channel: https://t.me/JustCoffeAndMe
// (The best of Chill Music)
/* https://castbox.fm/creator/channels
my input name of songs are not correct (maybe!)
so i write very simple script and do it for me.
and generate hashtag for bio.
*/

// name of the song
const str = "Night_Drive_Wave_Mix_Atmospheric_Bass_Music_602EOIsSaJI_140";

// generate hashtag with the name
const generateHashTags = (str) => {
  let hashTags = [];
  str.split("_").forEach((item) => {
    hashTags.push(`#${item}`);
  });
  return hashTags;
};

// remove _ and replace it with space
const normalizing = (str) => {
  return str.replaceAll("_", " ");
};

```

### create own path of files
```js
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
```

### get all links of art
```py
from bs4 import BeautifulSoup
import re


with open('./index.html', 'r', encoding='utf-8') as file:
    soup = BeautifulSoup(file.read(), 'html.parser')
    data = soup.find_all("a", {'href': re.compile('/artwork/165')})
    links = []
    for i in range(len(data)):
        links.append(data[i].get('href'))

print(links)
```

### convert piped link to yourube
```node
const fs = require("fs");
const readline = require("readline");

const fileStream = fs.createReadStream("data.txt");
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

rl.on("line", (line) => {
  console.log(`https://youtu.be/${line.split("=")[1]}`);
});
```
