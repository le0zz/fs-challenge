var filewatcher = require('filewatcher');
 
var watcher = filewatcher();
const md5File = require('md5-file');
const path  = require('path');
const fs = require('fs');
 
const { exec, execSync } = require("child_process");
 
const MAX_TRIES = 10;

// ... or a directory
watcher.add(__dirname + '/public');
 
watcher.on('change', (file, stat) =>
{
  var stats = fs.statSync('dist/public/index.html');

  const refTime = stats.mtime;
  var timeNow;

  var runs = 0;
  var interval = setInterval(() => {
    if((runs / 100) > MAX_TRIES){
      console.out('Limite máximo de espera atingido');
      clearInterval(interval);
    }

    stats = fs.statSync('dist/public/index.html');
    timeNow = stats.mtime;

    console.log(timeNow, stat.mtime);
    if(timeNow > refTime){
      console.log('Arquivos compilados');

      const time = new Date();
      fs.utimesSync('src/main.ts', time, time);
      clearInterval(interval);
    }
  }, 100);

});