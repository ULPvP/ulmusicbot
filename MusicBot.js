// Require the Discord.js library.
const Discord = require('discord.js');

// Start a new Client from Discord.js. You can name this to whatever you like.
const client = new Discord.Client();
const exampleEmbed = new Discord.RichEmbed()
const config = require("./config.json");
//-----------------------------------------------------------------------------------------------------------------
client.on('ready', () => {
	client.user.setStatus('online')
	client.user.setGame('Made By UL老熊(UL老熊-Aim_老熊/WhyIamABear#1188)')

	console.log('OPENED')
})
//--------------------------------------------------------------------------------------------------------------------------------

// Put the Music module in the new Client object.
// This allows for easy access to all the modules
// functions and data.
client.music = require("dc-music-bot-addon-chinese");
// Now we start the music module.
client.music.start(client, {
  // Set the api key used for YouTube.
  // This is required to run the bot.
	botPrefix: "ul!",
  youtubeKey: "AIzaSyDC1L_V32QN44YqSqMl0PfA7Q9NjUuf2UM"
});

// Connect the bot with your Discord applications bot token.
client.login("NjEwNDIxNzU0MzM0MjgxNzQ5.XVFnCA.aQas6JPcKHv0_WYCdTgTGUdEbJQ");
