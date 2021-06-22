const Discord = require('discord.js');
const nekoslife = require('nekos.life');
let neko = new nekoslife();
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {

  const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();

	if (message.content === `${prefix}ping`) {
		  message.channel.send('Pong.');
	} else if (message.content === `${prefix}beep`) {
		  message.channel.send('Boop.');
	} else if (message.content === `${prefix}server`) {
		  message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (message.content === `${prefix}user-info`) {
		  message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  } else if(command === "yuri"){
    if(!message.channel.nsfw) return message.channel.send("tfm you baka this isnt nsfw channel smh");

    async function yuwuri(){
      const nekoslife = require('nekos.life');
      let neko = new nekoslife();
      let yuri = await neko.nsfw.yuri();

      let yuriEmbed = new Discord.MessageEmbed()
      .setTitle("Here you horny baka")
      .setImage(yuri.url)
      .setColor("RANDOM")
      .setTitle(yuri.url)
      .setFooter("hormy detected 3000")
  
      message.channel.send(yuriEmbed)
    }

      let yuriTimer = setInterval(yuwuri, 5000)
      function yuriStop(){
        clearInterval(yuriTimer)
        console.log("lmao i got called aswellbut to stop")
      }
    if(args[0] === "start"){
      yuriTimer();
      message.channel.send("Starting, please wait 5 seconds to send the first image.")
    } else if(args[0] === "stop"){
      yuriStop();
      console.log("pog")
      message.channel.send("Stopping! (if its alr stopped then why are you-)")
    }
}
});

client.login(token);