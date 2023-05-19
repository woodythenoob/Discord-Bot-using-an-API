const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const axios = require('axios').default;


module.exports= {
    name: 'download',
    description: "gives loader download",
    execute(message, args){
            let embed = new MessageEmbed();
            embed.setColor("#262526");
            embed.setTitle("Download Here")
            embed.setURL('loader download link here')
            message.channel.send(embed);
}
}
