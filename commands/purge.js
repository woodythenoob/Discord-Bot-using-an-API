const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

module.exports = {
    name: "purge",
    description: "gets rid of stuff",

    execute(message, args){

        const amount = args.join(" ");

        let woody = new MessageEmbed();
        woody.setColor("#b0b0b0");
        woody.setDescription("Please specify an amount")
        if(!amount) return message.reply(woody)

        let fart = new MessageEmbed();
            fart.setColor("#b0b0b0");
            fart.setDescription("No more than 100 messages please")
        if(amount > 1000) return message.channel.send(fart)

        let penis = new MessageEmbed();
            penis.setColor("#b0b0b0");
            penis.setDescription("Please delete at least 1 message")
        if(amount < 1) return message.reply(penis)

            message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});
    let embed = new MessageEmbed();
    embed.setColor("#262526");
    embed.setDescription(`purged ${amount} messages`);
    message.channel.send(embed);

    }
}