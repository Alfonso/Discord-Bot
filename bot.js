var Discord = require('discord.io');

var logger = require('winston');

var auth = require('./auth.json');
var fs = require('fs');
var voiceChannelID = "409235446871097360";

var DotaID = "413893715321683989";
var GeneralID = "409235446871097360";
var CivID = "413893981856858134";
var TerrariaID = "413893942082273291";
var BrawlhallaID = "426145917771579401";
var FortniteID = "445761904053583874";
var PoEID = "446843938649800705";
		

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

       

        args = args.splice(1);
		args1 = args[0];

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

        switch(cmd.toLowerCase()) {

            // !ping

			case 'text':

				if(!me){
					logger.info(userID+"Has tried to nani Text");
					return;
				}

				bot.sendMessage({
					to: channelID,
					message: '<:nani:453405467578859524>                 <:nani:453405467578859524>               <:nani:453405467578859524> <:nani:453405467578859524>               <:nani:453405467578859524>                 <:nani:453405467578859524>    <:nani:453405467578859524><:nani:453405467578859524><:nani:453405467578859524>       <:nani:453405467578859524>'
				});

				bot.sendMessage({
					to: channelID,
					message: '<:nani:453405467578859524> <:nani:453405467578859524>         <:nani:453405467578859524>       <:nani:453405467578859524>                 <:nani:453405467578859524>       <:nani:453405467578859524> <:nani:453405467578859524>         <:nani:453405467578859524>           <:nani:453405467578859524>              <:nani:453405467578859524>'
				});

				bot.sendMessage({
					to: channelID,
					message: '<:nani:453405467578859524>      <:nani:453405467578859524>    <:nani:453405467578859524>       <:nani:453405467578859524>                 <:nani:453405467578859524>       <:nani:453405467578859524>      <:nani:453405467578859524>    <:nani:453405467578859524>           <:nani:453405467578859524>              <:nani:453405467578859524>'
				});

				bot.sendMessage({
					to: channelID,
					message: '<:nani:453405467578859524>         <:nani:453405467578859524> <:nani:453405467578859524>       <:nani:453405467578859524> <:nani:453405467578859524>:<:nani:453405467578859524> <:nani:453405467578859524>       <:nani:453405467578859524>         <:nani:453405467578859524> <:nani:453405467578859524>           <:nani:453405467578859524>'
				});

				bot.sendMessage({
					to: channelID,
					message: '<:nani:453405467578859524>                  <:nani:453405467578859524>       <:nani:453405467578859524>                 <:nani:453405467578859524>      <:nani:453405467578859524>                  <:nani:453405467578859524>    <:nani:453405467578859524><:nani:453405467578859524><:nani:453405467578859524>      <:nani:453405467578859524>'
				});

			break;

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

				sound(voiceChannelID,'NaniQuietest.mp3');

			break;	

			case 'gas':

				if(!me){
					logger.info(userID+' tried gassing');
					return;
				}

				sound(voiceChannelID,'gas3.mp3');

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

				sound(voiceChannelID,'Whoopity Scoop, Scoopity Poop.mp3');

			break;

			case 'afro':

				if(userID !== "244619966135926786" && !me){
					logger.info(userID+' tried Afroing');
					return;
				}

				sound(voiceChannelID,'afro.mp3');

			break;

			case 'kazoo':

				if(userID !== "265567807494684672" && !me){
					logger.info(userID+' tried Kazooing');
					return;
				}

				sound(voiceChannelID,'kazoo.mp3');

			break;

			case 'polka':

				if(userID !== "244619966135926786" && !me && userID !== "265567807494684672"){
					logger.info(userID+' tried Polkaing');
					return;
				}
				
				sound(voiceChannelID,'polka.mp3');

			break;

			case 'richard':

				if(!me && userID !== "265567807494684672"){
					logger.info(userID+' tried Richarding');
					return;
				}

				sound(voiceChannelID,'richard.mp3');

			break;

			case 'greed':

				if(userID !== "244619966135926786" && !me ){
					logger.info(userID+' tried Greeding');
					return;
				}

				sound(voiceChannelID,'greed.mp3');

			break;

			case 'kira':

				if(userID !== "244619966135926786" && !me){
					logger.info(userID+' tried Kiraing');
					return;
				}

				sound(voiceChannelID,'kira.mp3');

			break;

			case 'noice':

				if(userID !== "226125252067852300" && !me){
					logger.info(userID+' tried noice-ing');
					return;
				}

				sound(voiceChannelID,'noice.mp3');

			break;

			case 'fit':
			
				if(!me){
					logger.info(userID+' tried fitnessing');
					return;
				}

				sound(voiceChannelID,'fit.mp3');

			break

			case 'one':

				if(!me){
					logger.info(userID+' tried number one-ing');
					return;
				}

				sound(voiceChannelID,'one.mp3');

			break

			case 'gimme':

				if(!me && userID!= "244619966135926786"){
					logger.info(userID+' tried gimme-ing');
					return;
				}
				
				sound(voiceChannelID,'gimme.mp3');

			break
         }

     }

});
//issue with a socket closing?
function sound(voiceChannelID, file){				

	bot.joinVoiceChannel(voiceChannelID, function(error, events) {
		//Check to see if any errors happen while joining.
		if (error) return console.error(error);

		//Then get the audio context
		bot.getAudioContext(voiceChannelID, function(error, stream) {
			 //Once again, check to see if any errors exist
			if (error) return console.error(error);

			//Create a stream to your file and pipe it to the stream
			//Without {end: false}, it would close up the stream, so make sure to include that.
			fs.createReadStream(file).pipe(stream, {end: false});

			//The stream fires `done` when it's got nothing else to send to Discord.
			stream.on('done', function() {
				//Handle
				bot.leaveVoiceChannel(voiceChannelID);

				logger.info("Exited");
			});
		});
	});

}