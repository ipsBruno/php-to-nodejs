var net = require('net');

require('net').createServer(function(sock) {
	
	sock.on('data', function(data) {



		if(  sock.remoteAddress != '127.0.0.1' && sock.remoteAddress != 'localhost'  ) {
			console.log('Apenas se comunica com localhost  ' + sock.remoteAddress);
		}


	
		out = data.toString();

		try {
			out = eval(out);
		} catch (e) {	}

		sock.end();
	})        
   
}).listen(777, 'localhost');    
