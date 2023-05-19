const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const axios = require('axios').default;


module.exports= {
    name: 'message',
    description: "pops up website",
    execute(message, args){
       const key = args.shift(); 
       const msg = args.shift();
        axios.get(`api here`)
        .then(function (response) {
            let embed = new MessageEmbed();
            let e = response.data
            embed.setColor("#262526");
            embed.setDescription(`**${key}** has been sent the message.`)
            embed.setTimestamp()
            message.channel.send(embed);
         })
        .catch(function (error) {
        console.log(error);
  })
    }
}
