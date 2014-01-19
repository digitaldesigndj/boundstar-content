
	$.getJSON('all_players.json', function( data ) {
		console.log(data);
		$('.ever').text( data.length + ' Players Have Visited this Universe' );
		$players = $('.played');
		$.each( data , function( i, v ) {
			if( v.groupName != 'guest' ) {
				$players.append('<li><a href="/player?name=' + encodeURIComponent( v.name ) + '">' + v.name + '[' + v.groupName + '] - </a> <a href="/edit_profile?name=' + encodeURIComponent( v.name ) + '">Edit Profile</a></li>');
			}
		});
	});
