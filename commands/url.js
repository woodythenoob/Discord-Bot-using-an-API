const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const axios = require('axios').default;


module.exports= {
    name: 'url',
    description: "pops up website",
    execute(message, args){
       const key = args.shift(); 
       const url = args.shift();
        axios.get(`api here`)
        .then(function (response) {
            let embed = new MessageEmbed();
            let e = response.data
            embed.setColor("#262526");
            embed.setDescription(`**${key}** has been sent the link.`)
            embed.setTimestamp()
            message.channel.send(embed);
         })
        .catch(function (error) {
        console.log(error);
  })
    }
}
