const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

module.exports= {
    name: 'errors',
    description: "shows errors with solutions",
    execute(message, args){
        let embedContent = message.content.substring(3);
        let embed = new MessageEmbed();
        embed.setColor("#262526");
        embed.addFields(
        {name: 'failed to create IPC (code a)', value: 'Script is already running.' },
        {name: 'failed to create IPC (code b)', value: 'Something big fucked up contact woody#3886' },
        {name: 'input your key into key.ini', value: 'check to make sure the key.in in your docs folder and appdata folder are setup properly' },
        {name: 'unprotected script, do not release retard', value: 'dev failed to protect script' },
        {name: 'failed to connect to auth server', value: 'our server is either down or you do not have internet' },
        {name: 'discord overlay not found', value: 'reinstall discord using revo uninstaller' },
        {name: 'discord overlay invalid', value: 'reinstall discord using revo uninstaller => caused by diablo' },
        {name: 'script says loaded successfully but wont show up', value: '1: Open up steam 2: Open up task manager 3: Right click steam and go to Details 4: Right click steam.exe and go to Properties 5: Go to Compatibility tab and unclick "Run this program in compatibility mode" and apply settings.' },
        
        )
        embed.setTimestamp()
        message.channel.send(embed);
    }
}