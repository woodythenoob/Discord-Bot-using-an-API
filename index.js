const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
require('dotenv').config()
const prefix = ".";
const fs = require('fs');
const isValidCommand = (message, cmdName) => message.content.toLowerCase().startsWith(prefix + cmdName);

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
    client.on('ready', () => {
        client.user.setPresence({ activities: [{ name: 'The Script Users' , type: 'WATCHING'} ] });
        console.log(`Logged in as ${client.user.tag}!`);
    });

    client.on ('message', message =>{
        const users = ['240202396800647179'];
        if(!users.includes(message.author.id) || !message.content.startsWith(prefix) || message.author.bot)return;
        if(!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }
    if(command === 'embed'){
        client.commands.get('embed').execute(message, args);
    }
    if(command === 'gen'){
        client.commands.get('gen').execute(message, args);
    }
    if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }
    if(command === 'unban'){
        client.commands.get('unban').execute(message, args);
    }
    if(command === 'hwid'){
        client.commands.get('hwid').execute(message, args);
    }
    if(command === 'download'){
        client.commands.get('download').execute(message, args);
    }

    if(command === 'lookup'){
        client.commands.get('lookup').execute(message, args);
    }

    if(command === 'errors'){
        client.commands.get('errors').execute(message, args);
    }
    if(command === 'url'){
        client.commands.get('url').execute(message, args);
    }
    if(command === 'instructions'){
        client.commands.get('instructions').execute(message, args);
    }
    if(command === 'purge'){
        client.commands.get('purge').execute(message, args);
    }
    if(command === 'ip'){
        client.commands.get('ip').execute(message, args);
    }
    if(command === 'bsod'){
        client.commands.get('bsod').execute(message, args);
    }
    if(command === 'crash'){
        client.commands.get('crash').execute(message, args);
    }
    if(command === 'message'){
        client.commands.get('message').execute(message, args);
    }
    if(command === 'spin'){
        client.commands.get('spin').execute(message, args);
    }
    if(command === 'users'){
        client.commands.get('users').execute(message, args);
    }
    if(command === 'private'){
        client.commands.get('private').execute(message, args);
    }

    if(command === 'add'){
        client.commands.get('add').execute(message, args);
    }

    if (message.content.startsWith (prefix)){
        message.delete({ timeout: 1 })
        .then()
        .catch(console.error);
      }
});

client.login(process.env.TOKEN);
