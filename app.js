require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log('Bot is ready');
});
  
client.on('message', (msg) => {
    switch(msg.content.toLowerCase()) {
        case 'mish': 
            return msg.reply('mishmish is a giga pipsqueak')
        case 'john':
            return msg.reply('Dalamarth is a boom boom')
        case 'scott':
            return msg.reply('scooter likes tickle action')
        case 'jesse':
            return msg.reply('jesse loves almoooond butter')
        case 'jason':
            return msg.reply('ELDEST BOOM');
        case 'ham':
            return msg.reply('samie is 2x giga pipsqueak')
        case 'sam':
            return msg.reply('ham or samE?')
        case 'same':
            return msg.reply('SOGGY EGG')
        case 'blai':
            return msg.reply('there are two blais')
        case 'matt':
            return msg.reply('ratchew')
    }
});
  
client.login(process.env.BOT_TOKEN);