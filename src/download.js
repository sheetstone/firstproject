/*
batched downloades file from server defined in path
Run this code by using node download.js
*/

var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

//var path="https://az415828.vo.msecnd.net/pictures/8/203/8203553/lowres/256048955.jpg"

var start=4793;
var end=4800;

var path1="https://az415828.vo.msecnd.net/pictures/8/203/8203553/lowres/255985652.jpg"
var path2="https://az415828.vo.msecnd.net/pictures/8/203/8203553/lowres/255985695.jpg"

var path3="https://az415828.vo.msecnd.net/pictures/8/203/8203553/lowres/256254793.jpg"
var path4="https://az415828.vo.msecnd.net/pictures/8/203/8203553/lowres/256254669.jpg"

for (var i=start;i<end;i++){
  var path=`https://az415828.vo.msecnd.net/pictures/8/203/8203553/lowres/25625${i}.jpg`;
  var imageName=`aa${i}.jpg`
  download(path, imageName, function(){
    console.log(imageName);
  });
}

