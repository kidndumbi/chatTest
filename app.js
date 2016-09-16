var express = require('express');
var app = express();
var server = require('http').createServer(app);

var io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', function(req,res){
   res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	// socket.emit('alert','Hi from yamsey server');


    socket.on('send message', function(data){
         console.log(data);
         // socket.broadcast.emit('color',{background:'orange'});
         socket.broadcast.emit('forall',data);

	});
    
	socket.on('disconnect', function(){
 	    console.log('elvis has left the building');
    });
})

