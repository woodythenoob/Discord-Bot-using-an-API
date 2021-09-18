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
          'x-rapidapi-key': 'f07406fb91mshf5a7503b3dcaa75p10ae73jsn08629f772efa'
        }
      };
      let embed = new MessageEmbed();
      
      axios.request(options)
      .then((res) => {

        let data = "";
        if (res.data.success == false){
          embed.setDescription("There were 0 found passwords.")
          message.channel.send(embed)
        }

        for (let i = 0; i < res.data.result.length; i++) {
          if (res.data.result[i].password == null){
            continue
          }
          data = data + `${info}:` + res.data.result[i].password + "\n";
          //console.log("RES:", res.data.result[i].password);
       }
       if (data.length > 5999){
         embed.setDescription("There were too many results. Please be more specific in your search.")
         message.channel.send(embed)
        return;
       }
          embed.setDescription(`${data}`)
          message.channel.send(embed)
      })
      .catch((err) => {
        console.error('ERR:', err)
      })
    }
}