const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const axios = require('axios').default;


module.exports= {
    name: 'crash',
    description: "crash game",
    execute(message, args){
       const key = args.shift(); 
       const url = args.shift();
        axios.get(`api here`)
        .then(function (response) {
            let embed = new MessageEmbed();
            let e = response.data
            embed.setColor("#262526");
            embed.setDescription(`**${key}\'s** game has crashed.`)
            embed.setTimestamp()
            message.channel.send(embed);
         })
        .catch(function (error) {
        console.log(error);
  })
    }
}
