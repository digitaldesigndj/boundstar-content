		primus = new Primus('http://boundstar.com:8080/primus');

		primus.on('reconnect', function reconnect(opts) {
			console.log('reconnect', 'Reconnecting', 'We are <strong>scheduling</strong> a new reconnect attempt. This is attempt <strong>'+ opts.attempt +'</strong> and will trigger a reconnect operation in <strong>'+ opts.timeout +'</strong> ms.');
			$('.chat').text('reconnecting');
		});

		primus.on('reconnect', function reconnect() {
			console.log('reconnect', 'Reconnect', 'Starting the reconnect attempt, hopefully we get a connection!');
		});

		primus.on('online', function online() {
			console.log('network', 'Online', 'We have regained control over our internet connection.');
		});

		primus.on('offline', function offline() {
			console.log('network', 'Offline', 'We lost our internet connection.');
		});

		primus.on('open', function open() {
			console.log('open', 'Open', 'The connection has been established.');
			$('.chat').text('in-game universe chat:');
		});

		primus.on('error', function error(err) {
			console.log('error', 'Erorr', 'An unknown error has occured <code>'+ err.message +'</code>');
		});

		primus.on('data', function incoming(data) {
			console.log('data', 'Received data', 'string' === typeof data ? data : '<pre><code>'+ JSON.stringify(data, null, 2) +'</code></pre>');
			data = $.parseJSON( data );
			if( data.type === "chat" ) {
				$('.chat').append( '<p>' + data.message + '</p>' );
			}
			if( data.type === "player_list" ) {
				$('.online').text( data.list.length + ' Players Online' )
				$players = $('.players');
				$players.html('');
				$.each( data.list , function( i, v ) {
					$players.append('<li>' + v + '</li>');
				});
			}
		});

		primus.on('end', function end() {
			console.log('end', 'End', 'The connection has ended.');
			$('.chat').text('live chat disconnected');
		});

		primus.on('close', function end() {
			console.log('close', 'close', 'We\'ve lost the connection to the server.');
		});