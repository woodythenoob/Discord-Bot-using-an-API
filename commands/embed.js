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
        embed.setAuthor("APOLLYON", 'https://media.discordapp.net/attachments/881624691108900875/882814652667527258/AP_NEW_FINAL_LOGO_CROPPED.gif')
        embed.setDescription(woody)
        embed.setImage('https://cdn.discordapp.com/attachments/882810481331556375/882820222682271764/Purple_Line.gif')
        embed.setFooter('Apollyon.gg', 'https://i.imgur.com/jjvnvag.gif')
        embed.setTimestamp()
        message.channel.send(embed);



    }
}