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
            .setTitle("Reinforced Alloy Ingot Calculator")
            .setThumbnail("https://media.discordapp.net/attachments/856788504297078814/856788520130707456/latest.png")
            .setColor("BLUE")
            .addField("Iron Dust", amount * 4)
            .addField("Iron Ingot", amount * 4)
            .addField("Coal", amount * 64)
            .addField("Aluminum Dust", amount * 2)
            .addField("Aluminum Ingot", amount * 2)
            .addField("Copper Dust", amount * 5)
            .addField("Copper Ingot", amount * 2)
            .addField("Tin Dust", amount * 3)
            .addField("Silver Dust", amount * 2)
            .addField("Silver Ingot", amount * 1)
            .addField("Gold Dust", amount * 12)
            .addField("Lead Dust", amount * 1)
            .addField("Lead Ingot", amount * 1)
            .setFooter(`Requested by ${message.author.tag}`)
            message.channel.send(RNAembed)
            
        } else {
            let embed = new Discord.MessageEmbed()
            .setTitle("Please input an option to calculate!")
            .setDescription("Usage: `s!calculate [Option] [Number of Items]`\nEverything is CAPS SENSITIVE")
            .addField("RAI", "Calculate Reinforced Alloy Ingot!")
            .setColor("BLUE")
            .setFooter("Made by TheFirstMine_PH#6062")
            message.channel.send(embed)
        }
    } else if(command == 'help'){
        let embed = new Discord.MessageEmbed()
        .setTitle("Help Embed")
        .addField("s!ping", "haha ping pong")
        .addField("s!help", "This message, duh")
        .addField("s!calculate", "Calculates ammount of materials for your project!")
    }

})
client.login(token)
