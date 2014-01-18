
	$.getJSON('http://boundstar.com/all_players.json', function( data ) {
		$('.ever').text( data.length + ' Players Ever Online' )
		$players = $('.played');
		$.each( data , function( i, v ) {
			$players.append('<li>' + v.name + ' (' + v.groupName + ')</li>');
		});
	});