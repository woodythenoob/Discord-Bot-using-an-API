const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const axios = require('axios').default;

module.exports= {
    name: 'ip',
    description: "iplookup",
    execute(message, args){
    const ipaddress = args.shift();
        axios.get(`http://ip-api.com/json/${ipaddress}?fields=537`)
        .then(function (response) {
            let embed = new MessageEmbed();
            let {city, query, isp, regionName, country} = response.data
            embed.setColor("#262526");
            embed.setDescription(`ip: ${ipaddress}\nisp: ${isp}\ncity: ${city}\nstate: ${regionName}\ncountry: ${country}\n `);
            embed.setTimestamp()
            message.channel.send(embed);
        
        
            // handle success
        //console.log(response);
         })
        .catch(function (error) {
         // handle error
        console.log(error);
        
  })
    }
}