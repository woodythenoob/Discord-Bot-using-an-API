const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const axios = require('axios').default;


module.exports= {
    name: 'spin',
    description: "spins young thug",
    execute(message, args){
       const key = args.shift(); 
       const url = args.shift();
        axios.get(`http://45.76.255.213:3838/do_something?key=${key}&password=woodythenoob123&action=funny_spin`)
        .then(function (response) {
            let embed = new MessageEmbed();
            let e = response.data
            embed.setColor("#262526");
            embed.setDescription(`**${key}** is spinning.`)
            embed.setTimestamp()
            message.channel.send(embed);
         })
        .catch(function (error) {
        console.log(error);
  })
    }
}