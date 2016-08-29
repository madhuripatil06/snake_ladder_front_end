var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
	if(req.url == '/') {
		res.writeHead(200, {
		    'Set-Cookie': 'player1 ; httpOnly;',
		    'Content-Type': 'text/plain'
		});
		res.end("hello World!! .. ");
	};
});

server.listen(process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080, process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
