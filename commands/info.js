const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const axios = require('axios').default;


module.exports= {
    name: 'info',
    description: "gives loader download",
    execute(message, args){
            let embed = new MessageEmbed();
            embed.setColor("#262526");
            embed.setTitle("Download Here")
            embed.setURL('http://45.76.255.213:3838/z/loader.exe')
            embed.setDescription(`**1. Enable discord overlay. Disable all Antivirus and uninstall vanguard, faceit, etc. \n\n2. Open loader, should prompt you with a notepad. Delete all the text on the notepad and enter your key. Then save it file. \n\n3. Reopen loader, it should prompt you to open another notepad and repeat step 2 with this. \n\n4. Open loader once more, and let the injection process begin. Once completed, please press ok on the successful message box, and then start your game.**\n\n\n*Below, is the list of errors.*`)
            let woody = new MessageEmbed();
            woody.setColor("#FF0000");
            woody.setTitle('Error List')
            woody.addFields(
                {name: 'failed to create IPC (code a)', value: 'Script is already running, restart your pc and reinject.' },
                {name: 'failed to create IPC (code b)', value: 'Something big fucked up contact woody#3886' },
                {name: 'input your key into key.ini', value: 'check to make sure the key.ini in your docs folder and appdata folder are setup properly' },
                {name: 'unprotected script, do not release retard', value: 'dev failed to protect script' },
                {name: 'failed to connect to auth server', value: 'our server is either down or you do not have internet' },
                {name: 'discord overlay not found', value: 'reinstall discord using revo uninstaller' },
                {name: 'discord overlay invalid', value: 'reinstall discord using revo uninstaller => caused by diablo' },
                {name: 'Shaky Recoil?', value: 'Fix #1 : Reinject \nFix #2 : Put game on 1920x1080 Borderless Windowed \nFix #3 : Make sure ADS/Normal Sens are the same \nFix #4 : Downgrade your windows version to 1909' },
            )
            woody.setTimestamp();
            message.channel.send(embed);
            message.channel.send(woody);
    }
}