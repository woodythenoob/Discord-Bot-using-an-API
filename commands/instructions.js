const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

module.exports= {
    name: 'instructions',
    description: "help for idiots",
    execute(message, args){
        let embedContent = message.content.substring(3);
        let embed = new MessageEmbed();
        embed.setColor("#262526");
        embed.setAuthor("APOLLYON", 'https://media.discordapp.net/attachments/881624691108900875/882814652667527258/AP_NEW_FINAL_LOGO_CROPPED.gif')
        embed.setDescription(`1. Enable discord overlay. Disable all Antivirus and uninstall vanguard, faceit, etc. \n\n2. Open loader, should prompt you with a txt. Delete all the text on the txt and enter your key. Then save it. \n\n3. Reopen loader, it should prompt you to open another notepad and repeat step 2 with this. \n\n4. Open loader once more, and let the injection process begin. Once completed, please press ok on the successful message box, and then start your game.`)
        embed.setFooter('Apollyon.gg', 'https://i.imgur.com/jjvnvag.gif')
        embed.setTimestamp()
        message.channel.send(embed);
    }
}