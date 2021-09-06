const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const axios = require('axios').default;


module.exports= {
    name: 'gen',
    description: "will gen a key upon user entry",
    execute(message, args){
    const keytime = args.shift();
        axios.get(`http://45.76.255.213:3838/do_something?key=&password=woodythenoob123&action=gen&name=Apollyon&parameter=${keytime}`)
        .then(function (response) {
            let embed = new MessageEmbed();
            let generated = response.data
            embed.setColor("#262526");
            embed.setDescription(`${generated}`)
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