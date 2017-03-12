var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    fs.readFile('./front/index.html', 'utf-8', (error, content) => {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// Chargement de socket.io
var io = require('socket.io').listen(server);

let nbUser = 0;
let users = [];

io.sockets.on('connection', function (socket) {

    socket.emit('message', 'socket open');

    // Quand le serveur reçoit un signal de type "message" du client
    socket.on('join', function (userName) {
        nbUser++;

        const user = {
            id: nbUser,
            name: userName,
        };

        socket.broadcast.emit('user-join', user);

        socket.emit('connection-success', users);

        users.push(user);
    });
});


server.listen(8080);