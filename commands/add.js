const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const axios = require('axios').default;


module.exports= {
    name: 'add',
    description: "ban user",
    execute(message, args){
       const key = args.shift(); 
       const time = args.shift();

        axios.get(`API HERE`)
        .then(function (response) {
            let embed = new MessageEmbed();
            let e = response.data
            embed.setColor("#262526");
            embed.setDescription(`**${key}** | ${e}`)
            embed.setTimestamp()
            message.channel.send(embed);
         })
        .catch(function (error) {
        console.log(error);
  })
    }
}
