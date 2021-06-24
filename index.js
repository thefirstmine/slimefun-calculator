import displayItem from ./materials
// made while 2 programmers arguing in a vc
const Discord = require("discord.js");
const { prefix, token } = require('./config.json')
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();

    if (command === 'ping'){
        message.channel.send("haha this bot is online cool")
    } else if (command === 'calculate'){
        if (args[0] === 'RAI'){
            const amount = parseInt(args[1]);
            if (!amount) return message.channel.send("Please input a number!")

            let RNAembed = new Discord.MessageEmbed()

            displayItem('RAI', amount, RNAembed, message.channel)

        } else {
            let embed = new Discord.MessageEmbed()
            .setTitle("Please input an option to calculate!")
            .setDescription("Usage: `s!calculate [Option] [Number of Items]`\nEverything is CAPS SENSITIVE")
            .addField("RAI", "Calculate Reinforced Alloy Ingot!")
            .setColor("BLUE")
            .setFooter("Made by TheFirstMine_PH#6062")
            message.channel.send(embed)
        }
    } else if(command === 'help'){
        let embed = new Discord.MessageEmbed()
        .setTitle("Help Embed")
        .addField("s!ping", "haha ping pong")
        .addField("s!help", "This message, duh")
        .addField("s!calculate", "Calculates ammount of materials for your project!")
        message.channel.send(embed)
    }

})
client.login(token)
