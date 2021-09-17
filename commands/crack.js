const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const axios = require('axios').default;

module.exports= {
    name: 'crack',
    description: "database search for password leaks",
    execute(message, args){
    const info = args.shift();
    var options = {
        method: 'GET',
        url: 'https://breachdirectory.p.rapidapi.com/',
        params: {func: 'auto', term: `${info}`},
        headers: {
          'x-rapidapi-host': 'breachdirectory.p.rapidapi.com',
          'x-rapidapi-key': '93721a36d6msh8a70ed5fff232ddp1c79e6jsn982dc5696f20'
        }
      };
      
      axios.request(options)
      .then((res) => {
        let data = "";
        for (let i = 0; i < res.data.result.length; i++) {
          if (res.data.result[i].password == null){
            continue
          }
          data = data + `${info}:` + res.data.result[i].password + "\n";
          //console.log("RES:", res.data.result[i].password);
       }
          let embed = new MessageEmbed();
          embed.setDescription(`${data}`)
          message.channel.send(embed)
      })
      .catch((err) => {
        console.error('ERR:', err)
      })
    }
}