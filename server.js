var net = require('net');

require('net').createServer(function(sock) {
	sock.on('data', function(data) {
		if(  sock.remoteAddress == '127.0.0.1' ||  sock.remoteAddress == 'localhost'  ) {
			try {	out = eval(data.toString());	} catch (e) {	}
		}
	})        
}).listen(777, 'localhost');    
