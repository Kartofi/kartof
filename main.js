const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const welcomeMod = require('./models/welcome');

const fetch = require('node-fetch');

const canvacord = require("canvacord");

const { MessageAttachment, MessageEmbed } = require('discord.js');


class main {
    constructor() {
		this.roles = [];
		return this;
	}
/**
 * @param {String} url - Yo
 * @param {Message} message - The Discord Message
* @param {String} channelID - the id of the channel you want to send the message to.
* @param {MessageEmbed} embed - The Discord Embed

 */
    static async connect(url) {
        if (!url) throw new TypeError('KartofError: You didn\'t provide a MongoDB connection string');
		return mongoose.connect(url, {
			useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
		});
    }


 static async meme({ message , channelID }) {
    const response = await fetch('https://api.kartof.repl.co/meme');
    const data = await response.json();
  
  
    const meme_em = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle(data.Tittle + "Test")
	
	
	.setDescription(`👍 ${data.Upvotes} |  👎 ${data.Downvotes}  | 💬 ${data.NumComments}`)
	
	.setImage(data.url_image)
	


    message.client.channels.cache.get(channelID).send({ embeds: [meme_em]});
}
   

 static async welcome({ message , guildID, username, discriminator, avatarimg, memberCount }) {
    
    if(!message) throw new TypeError('please provide the Discord Message');
    if(!guildID) throw new Error('please provide guildID!');
    if(!username) throw new Error('please provide username!');
    if(!discriminator) throw new Error('please provide discriminator!');
    if(!avatarimg) throw new Error('please provide avatarimg!');
    if(!memberCount) throw new Error('please provide memberCount!');

    welcomeMod.findOne({ guildID: guildID }, async (err, data) => {
        if(!data) return;
    
        const welcomecard = new canvacord.Welcomer()
        .setUsername(username)
        .setDiscriminator(discriminator)
        .setAvatar(avatarimg)
        .setBackground("https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
        .setMemberCount(memberCount)
        .setColor("tittle", "#b1bbe0")
        let attachment = new MessageAttachment(await welcomecard.build(), "welcome.png")
        message.guild.channels.cache.get(data.channelID).send({files: [attachment]})
      });

    
}
static async goodbye({ message , guildID, username, discriminator, avatarimg, memberCount }) {
    
    if(!message) throw new TypeError('please provide the Discord Message');
    if(!guildID) throw new Error('please provide guildID!');
    if(!username) throw new Error('please provide username!');
    if(!discriminator) throw new Error('please provide discriminator!');
    if(!avatarimg) throw new Error('please provide avatarimg!');
    if(!memberCount) throw new Error('please provide memberCount!');
    
    welcomeMod.findOne({ guildID: guildID }, async (err, data) => {
        if(!data) return;
    
        const goodbyecard = new canvacord.Leaver()
        .setUsername(username)
        .setDiscriminator(discriminator)
        .setAvatar(avatarimg)
        .setBackground("https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
        .setMemberCount(memberCount)
        .setColor("tittle", "#b1bbe0")
        let attachment = new MessageAttachment(await goodbyecard.build(), "goodbye.png")
        message.guild.channels.cache.get(data.channelID).send({files: [attachment]})
      });

    
}
static async goodbye_welcome_set({ message , guildID, channelID }) {
    if(!message) throw new TypeError('please provide the Discord Message');
    if(!guildID) throw new Error('please provide guildID!');
    if(!channelID) throw new Error('please provide channelID!');

    let welcome;
    try {
        welcome = await welcomeMod.findOne({ guildID: guildID });
      if (!welcome) {
        let welcomer = await welcomeMod.create({
          guildID: guildID,
          channelID: channelID,
          
        });
        welcomer.save();
        message.guild.channels.cache.get(channelID).send("Channel set!")
      }
      else{
        welcome.channelID = channelID;
        welcome.save();
        message.guild.channels.cache.get(channelID).send("Channel set!")
      }
    } catch (err) {
      console.log(err);
    }

    
}
/**
 * @param {String} prize - Yo
* @param {String} ends - When it ends

 */
     static async giveawaycreate({message, channelID}) {
      message.guild.channels.cache.get(channelID).send("Channel set!")
    }

}


 
module.exports = main;