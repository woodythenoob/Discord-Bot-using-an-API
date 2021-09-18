var Scraper = require('images-scraper');
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const axios = require('axios').default;

module.exports= {
    name: 'image',
    description: "images for messages",
    execute(message, args){
    const input = args.shift();
    const google = new Scraper({
        puppeteer: {
          headless: false,
        },
      });
      (async () => {
        const results = await google.scrape(`${input}`, 200);
        let embed = new MessageEmbed();
        embed.setImage(results)
        message.channel.send(embed)
      })();
    }
}