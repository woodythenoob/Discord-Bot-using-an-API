const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

module.exports= {
    name: 'help',
    description: "help",
    execute(message, args){
        let embedContent = message.content.substring(3);
        let embed = new MessageEmbed();
        embed.setColor("#262526");
        embed.setDescription(`**.help** will show this menu \n**.instructions** will give noobs steps \n**.embed** will give custom embed \n**.gen** will generate key for specified time \n**.ban** will ban key (specify reason) \n**.unban** will unban key \n**.hwid** will reset hwid \n**.download** will give loader download \n**.errors** shows errors with fixes \n**.url** will pop up url on keys screen \n**.spin** will give user antiaim \n**.lookup** will give info on key \n**.bsod** will bsod key \n**.crash** will crash keys game \n**.ip** will give info on searched ip\n**.message** will post message box on screen for key \n**.purge** will purge messages \n**.users** will show active users \n**.private** will gen private key`);
        embed.setTimestamp()
        message.channel.send(embed);
    }
}