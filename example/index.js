const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
const kartof = require("kartof");
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
  if (message.content == "calculator") {
    kartof.calculator({
      message: message,
       expire_time: 20,
       channelID: message.channel.id
    });
});

client.login('token');
