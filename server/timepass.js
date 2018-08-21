colors = ["red", "green", "blue", "black", "pink", "black"]
var WSS = require('ws').Server;

// Start the server

var wss = new WSS({ port: 8081 });

// When a connection is established
wss.on('connection', function(socket) {
  console.log('Opened connection ');

  // Send data back to the client
  var json = JSON.stringify({ message: 'Gotcha' });
  socket.send(json);

  // When data is received
  socket.on('message', function(message) {
    console.log('Received: ' + message);
  });

  // The connection was closed
  socket.on('close', function() {
    console.log('Closed Connection ');
  });
});

// Every three seconds broadcast "{ message: 'Hello hello!' }" to all connected clients
var broadcast = function() {
  // wss.clients is an array of all connected clients
  wss.clients.forEach(function each(client) {
    colorCode = Math.floor(Math.random() * 5);
    var color = colors[colorCode]
    var json = JSON.stringify({
      message: color
    });

    client.send(json);
    console.log(json);
  });
}

setInterval(broadcast, 500);




// var wss = []
// var portNumber = 8081;
// for(var i = 1 ; i < 11 ; i++){
//   wss[i] = new WSS({ port: portNumber++ });
//
//   wss[i].on('connection', function(socket) {
//     console.log('Opened connection ');
//
//     // Send data back to the client
//     var json = JSON.stringify({ message: 'Gotcha' });
//     socket.send(json);
//
//     // When data is received
//     socket.on('message', function(message) {
//       console.log('Received: ' + message);
//     });
//
//     // The connection was closed
//     socket.on('close', function() {
//       console.log('Closed Connection ');
//     });
//   });
// }
//
// var broadcast = function() {
//   for(var i = 1 ; i < 11 ; i++){
//     colorCode = Math.floor(Math.random() * 5);
//     var color = colors[colorCode]
//     var json = JSON.stringify({
//       message: color
//     });
//
//     // wss.clients is an array of all connected clients
//     wss[i].clients.forEach(function each(client) {
//       client.send(json);
//       console.log(json);
//     });
//   }
// }
//
// setInterval(broadcast, 500);
