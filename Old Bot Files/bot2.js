var Discord = require('discord.io');

var logger = require('winston');

var auth = require('./auth.json');
var fs = require('fs');
var voiceChannelID = "409235446871097360";

// Configure logger settings

logger.remove(logger.transports.Console);

logger.add(logger.transports.Console, {

    colorize: true

});

logger.level = 'debug';

// Initialize Discord Bot

var bot = new Discord.Client({

   token: auth.token,

   autorun: true

});

bot.on('ready', function (evt) {

    logger.info('Connected');

    logger.info('Logged in as: ');

    logger.info(bot.username + ' - (' + bot.id + ')');

});

bot.on('message', function (user, userID, channelID, message, evt) {

    // Our bot needs to know if it will execute a command

    // It will listen for messages that will start with `!`


    if (message.substring(0, 1) == '!') {

		var me = true;

		if(userID !== "290300215783718912") 
			me = false;

        var args = message.substring(1).split(' ');

        var cmd = args[0];

		var DotaID = "413893715321683989";
		var GeneralID = "409235446871097360";
		var CivID = "413893981856858134";
		var TerrariaID = "413893942082273291";
		var BrawlhallaID = "426145917771579401";
		var FortniteID = "445761904053583874";
		var PoEID = "446843938649800705";
		
       

        args = args.splice(1);
		args1 = args[0];

        switch(cmd.toLowerCase()) {

            // !ping

            case 'ping':

                bot.sendMessage({

                    to: channelID,

                    message: 'Pong!'

                });

            break;

            // Just add any case commands if you want to..

			case 'nani':
				
				if(!me){
					logger.info(userID +" Has tried to nani");
					return;
				}

				if(args1 == "dota")
					voiceChannelID = DotaID;
				else if(args1== "civ")
					voiceChannelID = CivID;
					else if(args1 == "terraria")
						voiceChannelID = TerrariaID;
						else if(args1 == "general")
							voiceChannelID = GeneralID;
							else if(args1 == "brawlhalla")
								voiceChannelID = BrawlhallaID;
								else if(args1 == "fortnite")
									voiceChannelID = FortniteID;
									else if(args1 == "poe")
										voiceChannelID = PoEID;
				
				bot.joinVoiceChannel(voiceChannelID, function(error,events) {
					//Check to see if any errors happen while joining.
					if (error) return console.error(error);

					//Then get the audio context
					bot.getAudioContext(voiceChannelID, function(error, stream) {
						//Once again, check to see if any errors exist
						if (error) return console.error(error);

						//logger.info("Nani prev");

						//Create a stream to your file and pipe it to the stream
						//Without {end: false}, it would close up the stream, so make sure to include that.
						fs.createReadStream('NaniQuietest.mp3').pipe(stream, {end: false});

						//logger.info("Nani work");

						//The stream fires `done` when it's got nothing else to send to Discord.	
						stream.on('done', function() {
							//Handle

							bot.leaveVoiceChannel(voiceChannelID);

							logger.info("Exited");
						});
					});
				});

			break;	

			case 'gas':

				if(!me){
					logger.info(userID+' tried gassing');
					return;
				}

				if(args1 == "dota")
						voiceChannelID = DotaID;
					else if(args1 == "civ")
						voiceChannelID = CivID;
						else if(args1 == "terraria")
							voiceChannelID = TerrariaID;
							else if(args1 == "general")
								voiceChannelID = GeneralID;
								else if(args1 == "brawlhalla")
									voiceChannelID = BrawlhallaID;
									else if(args1 == "fortnite")
										voiceChannelID = FortniteID;
										else if(args1 == "poe")
											voiceChannelID = PoEID;
				

				bot.joinVoiceChannel(voiceChannelID, function(error, events) {
					//Check to see if any errors happen while joining.
					if (error) return console.error(error);

					//Then get the audio context
					bot.getAudioContext(voiceChannelID, function(error, stream) {
						 //Once again, check to see if any errors exist
						if (error) return console.error(error);

						//Create a stream to your file and pipe it to the stream
						//Without {end: false}, it would close up the stream, so make sure to include that.
						fs.createReadStream('gas3.mp3').pipe(stream, {end: false});

						//The stream fires `done` when it's got nothing else to send to Discord.
						stream.on('done', function() {
							//Handle

							bot.leaveVoiceChannel(voiceChannelID);

							logger.info("Exited");
						});
					});
				});
			break;

			case 'exit':
				
				if(!me){
					logger.info(userID+' tried exiting');
					return;
				}

				//logger.info("Exit"+ voiceChannelID);
				
				bot.leaveVoiceChannel(voiceChannelID);

				logger.info("Exited");

			break;

			case 'off':

				if(!me)
					return;
				bot.destroy();

			break;

			
			case 'roll':

				var num = Math.floor(Math.random() * (101 - 1 + 1)) + 1
				var numS = num.toString();
				bot.sendMessage({

                    to: channelID,
					
                    message:  numS

                });

			break;

			case 'flip':

				var num = Math.floor(Math.random() * (50 - 1 + 1)) + 1

				if(num<=25)
					var numS = "Tails";
					else if (num > 25)
						var numS = "Heads";
			
				bot.sendMessage({

                    to: channelID,
					
                    message:  numS

				});

			break;

			case 'scoop':

			if(userID !== "244619966135926786" && !me){
				logger.info(userID+' tried Scooping');
				return;
			}

			if(args1 == "dota")
						voiceChannelID = DotaID;
					else if(args1 == "civ")
						voiceChannelID = CivID;
						else if(args1 == "terraria")
							voiceChannelID = TerrariaID;
							else if(args1 == "general")
								voiceChannelID = GeneralID;
								else if(args1 == "brawlhalla")
									voiceChannelID = BrawlhallaID;
									else if(args1 == "fortnite")
										voiceChannelID = FortniteID;
										else if(args1 == "poe")
											voiceChannelID = PoEID;
				

				bot.joinVoiceChannel(voiceChannelID, function(error, events) {
					//Check to see if any errors happen while joining.
					if (error) return console.error(error);

					//Then get the audio context
					bot.getAudioContext(voiceChannelID, function(error, stream) {
						 //Once again, check to see if any errors exist
						if (error) return console.error(error);

						//Create a stream to your file and pipe it to the stream
						//Without {end: false}, it would close up the stream, so make sure to include that.
						fs.createReadStream('Whoopity Scoop, Scoopity Poop.mp3').pipe(stream, {end: false});

						//The stream fires `done` when it's got nothing else to send to Discord.
						stream.on('done', function() {
							//Handle
							bot.leaveVoiceChannel(voiceChannelID);

							logger.info("Exited");
						});
					});
				});

			break;

			case 'afro':

			if(userID !== "244619966135926786" && !me){
				logger.info(userID+' tried Afroing');
				return;
			}

			if(args1 == "dota")
						voiceChannelID = DotaID;
					else if(args1 == "civ")
						voiceChannelID = CivID;
						else if(args1 == "terraria")
							voiceChannelID = TerrariaID;
							else if(args1 == "general")
								voiceChannelID = GeneralID;
								else if(args1 == "brawlhalla")
									voiceChannelID = BrawlhallaID;
									else if(args1 == "fortnite")
										voiceChannelID = FortniteID;
										else if(args1 == "poe")
											voiceChannelID = PoEID;
				

				bot.joinVoiceChannel(voiceChannelID, function(error, events) {
					//Check to see if any errors happen while joining.
					if (error) return console.error(error);

					//Then get the audio context
					bot.getAudioContext(voiceChannelID, function(error, stream) {
						 //Once again, check to see if any errors exist
						if (error) return console.error(error);

						//Create a stream to your file and pipe it to the stream
						//Without {end: false}, it would close up the stream, so make sure to include that.
						fs.createReadStream('afro.mp3').pipe(stream, {end: false});

						//The stream fires `done` when it's got nothing else to send to Discord.
						stream.on('done', function() {
							//Handle
							bot.leaveVoiceChannel(voiceChannelID);

							logger.info("Exited");
						});
					});
				});

			break;

			case 'kazoo':

			if(userID !== "265567807494684672" && !me){
				logger.info(userID+' tried Scooping');
				return;
			}

			if(args1 == "dota")
						voiceChannelID = DotaID;
					else if(args1 == "civ")
						voiceChannelID = CivID;
						else if(args1 == "terraria")
							voiceChannelID = TerrariaID;
							else if(args1 == "general")
								voiceChannelID = GeneralID;
								else if(args1 == "brawlhalla")
									voiceChannelID = BrawlhallaID;
									else if(args1 == "fortnite")
										voiceChannelID = FortniteID;
										else if(args1 == "poe")
											voiceChannelID = PoEID;
				

				bot.joinVoiceChannel(voiceChannelID, function(error, events) {
					//Check to see if any errors happen while joining.
					if (error) return console.error(error);

					//Then get the audio context
					bot.getAudioContext(voiceChannelID, function(error, stream) {
						 //Once again, check to see if any errors exist
						if (error) return console.error(error);

						//Create a stream to your file and pipe it to the stream
						//Without {end: false}, it would close up the stream, so make sure to include that.
						fs.createReadStream('kazoo.mp3').pipe(stream, {end: false});

						//The stream fires `done` when it's got nothing else to send to Discord.
						stream.on('done', function() {
							//Handle
							bot.leaveVoiceChannel(voiceChannelID);

							logger.info("Exited");
						});
					});
				});

			break;

			case 'polka':

			if(userID !== "244619966135926786" && !me && userID !== "265567807494684672"){
				logger.info(userID+' tried Scooping');
				return;
			}

			if(args1 == "dota")
						voiceChannelID = DotaID;
					else if(args1 == "civ")
						voiceChannelID = CivID;
						else if(args1 == "terraria")
							voiceChannelID = TerrariaID;
							else if(args1 == "general")
								voiceChannelID = GeneralID;
								else if(args1 == "brawlhalla")
									voiceChannelID = BrawlhallaID;
									else if(args1 == "fortnite")
										voiceChannelID = FortniteID;
										else if(args1 == "poe")
											voiceChannelID = PoEID;
				

				bot.joinVoiceChannel(voiceChannelID, function(error, events) {
					//Check to see if any errors happen while joining.
					if (error) return console.error(error);

					//Then get the audio context
					bot.getAudioContext(voiceChannelID, function(error, stream) {
						 //Once again, check to see if any errors exist
						if (error) return console.error(error);

						//Create a stream to your file and pipe it to the stream
						//Without {end: false}, it would close up the stream, so make sure to include that.
						fs.createReadStream('polka.mp3').pipe(stream, {end: false});

						//The stream fires `done` when it's got nothing else to send to Discord.
						stream.on('done', function() {
							//Handle
							bot.leaveVoiceChannel(voiceChannelID);

							logger.info("Exited");
						});
					});
				});

			break;

			case 'richard':

			if(!me && userID !== "265567807494684672"){
				logger.info(userID+' tried Scooping');
				return;
			}

			if(args1 == "dota")
						voiceChannelID = DotaID;
					else if(args1 == "civ")
						voiceChannelID = CivID;
						else if(args1 == "terraria")
							voiceChannelID = TerrariaID;
							else if(args1 == "general")
								voiceChannelID = GeneralID;
								else if(args1 == "brawlhalla")
									voiceChannelID = BrawlhallaID;
									else if(args1 == "fortnite")
										voiceChannelID = FortniteID;
										else if(args1 == "poe")
											voiceChannelID = PoEID;
				

				bot.joinVoiceChannel(voiceChannelID, function(error, events) {
					//Check to see if any errors happen while joining.
					if (error) return console.error(error);

					//Then get the audio context
					bot.getAudioContext(voiceChannelID, function(error, stream) {
						 //Once again, check to see if any errors exist
						if (error) return console.error(error);

						//Create a stream to your file and pipe it to the stream
						//Without {end: false}, it would close up the stream, so make sure to include that.
						fs.createReadStream('richard.mp3').pipe(stream, {end: false});

						//The stream fires `done` when it's got nothing else to send to Discord.
						stream.on('done', function() {
							//Handle
							bot.leaveVoiceChannel(voiceChannelID);

							logger.info("Exited");
						});
					});
				});

			break;

			case 'greed':

			if(userID !== "244619966135926786" && !me ){
				logger.info(userID+' tried Scooping');
				return;
			}

			if(args1 == "dota")
						voiceChannelID = DotaID;
					else if(args1 == "civ")
						voiceChannelID = CivID;
						else if(args1 == "terraria")
							voiceChannelID = TerrariaID;
							else if(args1 == "general")
								voiceChannelID = GeneralID;
								else if(args1 == "brawlhalla")
									voiceChannelID = BrawlhallaID;
									else if(args1 == "fortnite")
										voiceChannelID = FortniteID;
										else if(args1 == "poe")
											voiceChannelID = PoEID;
				

				bot.joinVoiceChannel(voiceChannelID, function(error, events) {
					//Check to see if any errors happen while joining.
					if (error) return console.error(error);

					//Then get the audio context
					bot.getAudioContext(voiceChannelID, function(error, stream) {
						 //Once again, check to see if any errors exist
						if (error) return console.error(error);

						//Create a stream to your file and pipe it to the stream
						//Without {end: false}, it would close up the stream, so make sure to include that.
						fs.createReadStream('greed.mp3').pipe(stream, {end: false});

						//The stream fires `done` when it's got nothing else to send to Discord.
						stream.on('done', function() {
							//Handle
							bot.leaveVoiceChannel(voiceChannelID);

							logger.info("Exited");
						});
					});
				});

			break;

			case 'kira':

			if(userID !== "244619966135926786" && !me){
				logger.info(userID+' tried Scooping');
				return;
			}

			if(args1 == "dota")
						voiceChannelID = DotaID;
					else if(args1 == "civ")
						voiceChannelID = CivID;
						else if(args1 == "terraria")
							voiceChannelID = TerrariaID;
							else if(args1 == "general")
								voiceChannelID = GeneralID;
								else if(args1 == "brawlhalla")
									voiceChannelID = BrawlhallaID;
									else if(args1 == "fortnite")
										voiceChannelID = FortniteID;
										else if(args1 == "poe")
											voiceChannelID = PoEID;
				

				bot.joinVoiceChannel(voiceChannelID, function(error, events) {
					//Check to see if any errors happen while joining.
					if (error) return console.error(error);

					//Then get the audio context
					bot.getAudioContext(voiceChannelID, function(error, stream) {
						 //Once again, check to see if any errors exist
						if (error) return console.error(error);

						//Create a stream to your file and pipe it to the stream
						//Without {end: false}, it would close up the stream, so make sure to include that.
						fs.createReadStream('kira.mp3').pipe(stream, {end: false});

						//The stream fires `done` when it's got nothing else to send to Discord.
						stream.on('done', function() {
							//Handle
							bot.leaveVoiceChannel(voiceChannelID);

							logger.info("Exited");
						});
					});
				});

			break;
         }

     }

});