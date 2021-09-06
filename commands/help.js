const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

module.exports= {
    name: 'help',
    description: "help",
    execute(message, args){
        let embedContent = message.content.substring(3);
        let embed = new MessageEmbed();
        embed.setColor("#262526");
        embed.setAuthor("APOLLYON", 'https://media.discordapp.net/attachments/881624691108900875/882814652667527258/AP_NEW_FINAL_LOGO_CROPPED.gif')
        embed.setDescription(`**.help** will show this menu \n**.instructions** will give noobs steps \n**.embed** will give custom embed \n**.gen** will generate key for specified time \n**.ban** will ban key (specify reason) \n**.unban** will unban key \n**.hwid** will reset hwid \n**.download** will give loader download \n**.errors** shows errors with fixes \n**.url** will pop up url on keys screen \n**.spin** will give user antiaim \n**.lookup** will give info on key`);
        embed.setFooter('Apollyon.gg', 'https://i.imgur.com/jjvnvag.gif')
        embed.setTimestamp()
        message.channel.send(embed);
    }
}