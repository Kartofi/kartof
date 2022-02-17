const { MessageEmbed, Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const kartof = require('kartof');

client.on('message', async message => { 
   if (message.content == "calculator") {
     kartof.calculator({
        message: message,
         expire_time: 20,
         channelID: message.channel.id,
         userID: message.member.id
    });
   }
   
});

client.login('Your Token');
