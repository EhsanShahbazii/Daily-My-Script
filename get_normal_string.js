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
