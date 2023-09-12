# Daily-My-Script
In my daily work, sometimes I need to be more efficient. That's why I get to work and code. I will put the codes here.

### get normal string (cast box problem)
```js
/* https://castbox.fm/creator/channels
my input name of songs are not correct (maybe!)
so i write very simple script and do it for me.
*/

const str = "Night_Drive_Wave_Mix_Atmospheric_Bass_Music_602EOIsSaJI_140";

const generateHashTags = (str) => {
  let hashTags = [];
  str.split("_").forEach((item) => {
    hashTags.push(`#${item}`);
  });
  return hashTags;
};

const normalizing = (str) => {
  return str.replaceAll("_", " ");
};
```
