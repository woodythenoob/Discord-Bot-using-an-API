const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const axios = require('axios').default;


module.exports= {
    name: 'private',
    description: "will gen a key upon user entry",
    execute(message, args){
    const keytime = args.shift();
        axios.get(`api here`)
        .then(function (response) {
            let embed = new MessageEmbed();
            let generated = response.data
            embed.setColor("#262526");
            embed.setDescription(`${generated}`)
            embed.setTimestamp()
            message.channel.send(embed);
         })
        .catch(function (error) {
        console.log(error);
  })
    }
}
