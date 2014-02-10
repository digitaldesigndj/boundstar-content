$.getJSON('http://boundstar.com/status/server/status', function( data ) {
	// console.log( data );
	$('.ever').text( data.playersSeen + ' Players Have Visited this Universe' );
	$('.worlds').text( data.worldsExplored + ' Worlds Explored' );
	$('.max').text( data.maxPlayers + ' Concurrent Players' );

	var $planets = $('.planets');
	$.each( data.activeWorlds, function(i,v) {
		if( v.sector !== "sectorx" ) {
			$planets.append("<li>Sector: " + v.sector + ", X:" + v.x + ", Y:" + v.y + ", Z:" + v.z + ", Planet: " + v.planet + " </li>");
		}
	});

});