---
title: server
layout: default
---

Players that have logged into the server:

<ul class="all"></ul>

<script>
$(function(){
	$.getJSON('/all_players.json', function( data ){
		console.log( data );
	});
});
</script>

