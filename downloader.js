const ytdl = require('ytdl-core');
const fs = require('fs');

ytdl('https://www.youtube.com/watch?v=TE7LbZT5WAk', { quality: 140 }).pipe(fs.createWriteStream('music/0018.mp3'));