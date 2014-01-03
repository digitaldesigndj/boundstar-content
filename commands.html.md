---
layout: default
title: commands
---

Restart the server hardware

	shutdown -r now

Start the Starbound Server

	cd /root/Starbound/linux64/

	mono-service starrybound_server.exe

GitHub Website Updater (docpad)

	forever /var/www/boundstar.com/boundstar/app.js

Players online Log Reader

	forever /root/players_online/player.js


Should show both node apps running

	forever list