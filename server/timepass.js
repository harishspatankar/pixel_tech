colors = ["red", "green", "blue", "black", "pink", "black"]
var WSS = require('ws').Server;

// Start the server
var wss1 = new WSS({ port: 8081 });
var wss2 = new WSS({ port: 8082 });

// When a connection is established
wss1.on('connection', function(socket) {
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
wss2.on('connection', function(socket) {
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
  colorCode = Math.floor(Math.random() * 5);
  var color = colors[colorCode]
  var json = JSON.stringify({
    message: color
  });

  // wss.clients is an array of all connected clients
  wss1.clients.forEach(function each(client) {
    client.send(json);
    console.log(json);
  });
}

var broadcast1 = function() {
  colorCode = Math.floor(Math.random() * 5);
  var color = colors[colorCode]
  var json = JSON.stringify({
    message: color
  });

  // wss.clients is an array of all connected clients
  wss2.clients.forEach(function each(client) {
    client.send(json);
    console.log(json);
  });
}
setInterval(broadcast, 500);
setInterval(broadcast1, 500);
