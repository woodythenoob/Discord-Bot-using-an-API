const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const axios = require('axios').default;


module.exports= {
    name: 'lookup',
    description: "will show info on key",
    execute(message, args){
       const key = args.shift(); 
       const reason = args.shift();

        axios.get(`http://45.76.255.213:3838/do_something?key=${key}&password=woodythenoob123&action=show_key`)
        .then(function (response) {
            let embed = new MessageEmbed();
            let e = response.data
            embed.setColor("#262526");
            embed.setDescription(`${e}`)
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