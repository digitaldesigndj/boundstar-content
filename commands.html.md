---
layout: default
title: commands
---

Restart the server hardware

	shutdown -r now

Run Bash Script to start all services below:
	
	bash start.sh

<hr /> 

Start the Starbound Server

	cd /root/Starbound/linux64/
	mono-service starrybound_server.exe

GitHub Website Updater (docpad)

	cd /var/www/boundstar.com/boundstar/
	forever start app.js

Players online Log Reader

	cd /root/players_online/
	forever start player.js


Show what node apps are running

	forever list
	
<hr />

Start the server in interactive mode

	cd /root/Starbound/linux64/
	mono starrybound_server.exe
