var server = require('ws').Server;


var s1 = new server({ port: 5001 });
colors = ["red", "green", "blue", "yellow", "black"];


function myFunc(){
  for(i = 0 ; i < 1 ; i++){
    colorCode = Math.floor(Math.random() * 4);
  }
  var color = colors[colorCode]
  console.log(colors[colorCode]);

  s1.on('connection',function(ws){
    ws.send(color);
  });
}

setInterval(myFunc,3000);
