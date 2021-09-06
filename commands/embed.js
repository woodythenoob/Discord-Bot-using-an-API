const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

module.exports= {
    name: 'embed',
    description: "custom",
    execute(message, args){
        let woody = args.join (" ")
        let embedContent = message.content.substring(3);
        let embed = new MessageEmbed();
        embed.setColor("#262526");
        embed.setDescription(woody)
        embed.setTimestamp()
        message.channel.send(embed);



    }
}