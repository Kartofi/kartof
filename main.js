const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const welcomeMod = require('./models/welcome');
const math = require('mathjs');
const fetch = require('node-fetch');

const canvacord = require("canvacord");

const { MessageAttachment, MessageEmbed, Client, MessageButton, MessageActionRow } = require('discord.js');
const { or } = require('mathjs');
const { and } = require('mathjs');


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
* @param {Int} expire_time - The Discord Embed

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
   console.log(Client.username)
    const response = await fetch('https://api.kartof.repl.co/meme');
    const data = await response.json();
  
  
    const meme_em = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle(data.Tittle)
	
	
	.setDescription(`👍 ${data.Upvotes} |  👎 ${data.Downvotes}  | 💬 ${data.NumComments}`)
	
	.setImage(data.url_image)
	


    message.client.channels.cache.get(channelID).send({ embeds: [meme_em]});
}
static async random_image({ message , channelID }) {
  console.log(Client.username)
 
 
 
   const meme_em = new MessageEmbed()
 .setColor('RANDOM')
 .setTitle("Here Is your random image")
 
 

 
 .setImage("https://api.kartof.repl.co/random-img")
 


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

static async calculator({message, expire_time, channelID}){
  if(!message) throw new TypeError('Please provide the Discord Message');
  if(!expire_time) throw new TypeError('Please provide the Expire Time');
  let maths = "0"
    const embed = new MessageEmbed()
		.setTitle("Calculator")
    let one = new MessageButton()
    .setCustomId('one')
    .setLabel('1')
    .setStyle('PRIMARY')
    .setDisabled(false)
    let two = new MessageButton()
    .setCustomId('two')
    .setLabel('2')
    .setStyle('PRIMARY')
    .setDisabled(false)
    let three = new MessageButton()
    .setCustomId('three')
    .setLabel('3')
    .setStyle('PRIMARY')
    .setDisabled(false)
    let four = new MessageButton()
    .setCustomId('four')
    .setLabel('4')
    .setStyle('PRIMARY')
    .setDisabled(false)
    let five = new MessageButton()
    .setCustomId('five')
    .setLabel('5')
    .setStyle('PRIMARY')
    .setDisabled(false)
    let six = new MessageButton()
    .setCustomId('six')
    .setLabel('6')
    .setStyle('PRIMARY')
    .setDisabled(false)
    let seven = new MessageButton()
    .setCustomId('seven')
    .setLabel('7')
    .setStyle('PRIMARY')
    .setDisabled(false)
    let eight = new MessageButton()
    .setCustomId('eight')
    .setLabel('8')
    .setStyle('PRIMARY')
    .setDisabled(false)
    let nine = new MessageButton()
    .setCustomId('nine')
    .setLabel('9')
    .setStyle('PRIMARY')
    .setDisabled(false)
    let zero = new MessageButton()
    .setCustomId('zero')
    .setLabel('0')
    .setStyle('PRIMARY')
    .setDisabled(false)
    let del = new MessageButton()
    .setCustomId('delete')
    .setLabel('<==')
    .setStyle('PRIMARY')
    .setDisabled(false)
    let divide = new MessageButton()
    .setCustomId('divide')
    .setLabel('/')
    .setStyle('PRIMARY')
    .setDisabled(false)
    let calcu = new MessageButton()
    .setCustomId('calcu')
    .setLabel('=')
    .setStyle('PRIMARY')
    .setDisabled(false)

    let plus = new MessageButton()
    .setCustomId('plus')
    .setLabel('+')
    .setStyle('PRIMARY')
    .setDisabled(false)
    let point = new MessageButton()
    .setCustomId('point')
    .setLabel('.')
    .setStyle('PRIMARY')
    .setDisabled(false)
    let multy = new MessageButton()
    .setCustomId('multy')
    .setLabel('x')
    .setStyle('PRIMARY')
    .setDisabled(false)

    let minus = new MessageButton()
    .setCustomId('minus')
    .setLabel('-')
    .setStyle('PRIMARY')
    .setDisabled(false)
   
    const row = new MessageActionRow().addComponents(one, two, three, del);
    const row2 = new MessageActionRow().addComponents(four, five, six,plus );
    const row3 = new MessageActionRow().addComponents(seven,eight, nine, multy);
    const row4 = new MessageActionRow().addComponents(minus,zero,calcu, divide);
    const row5 = new MessageActionRow().addComponents(point);
  
	  const meme_em = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle(maths)
  .setDescription(`You Have ` + expire_time + `seconds!`)
	const end_em = new MessageEmbed()
  .setColor('RANDOM')
	.setTitle("Ended! Use the Command Again to use it!")

  

  message.guild.channels.cache.get(channelID).send({ embeds: [meme_em], components: [row, row2, row3, row4, row5]}).then((msg) =>{
     

      const collector = msg.createMessageComponentCollector({ filter: null, time: expire_time * 1000 });
      
      collector.on('collect', async i => {
        i.deferUpdate()
        if (i.customId == "multy") {
          if (maths != "0" && maths.charAt(maths.length-1) != "+" && maths.charAt(maths.length-1) != "*" && maths.charAt(maths.length-1) != "/" && maths.charAt(maths.length-1) != ",") {
          
            maths = maths + "*"
          }

          
          const math = new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(maths)
       
          msg.edit({ embeds: [math], components: [row, row2, row3, row4, row5]})
        }
        if (i.customId == "plus") {
          if (maths != "0" && maths.charAt(maths.length-1) != "+" && maths.charAt(maths.length-1) != "*" && maths.charAt(maths.length-1) != "/" && maths.charAt(maths.length-1) != ",") {
          
            maths = maths + "+"
          }

          
          const math = new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(maths)
       
          msg.edit({ embeds: [math], components: [row, row2, row3, row4, row5]})
        }
        if (i.customId == "minus") {
          if (maths.charAt(maths.length-1) != "+" && maths.charAt(maths.length-1) != "*" && maths.charAt(maths.length-1) != "-"&& maths.charAt(maths.length-1) != "/" && maths.charAt(maths.length-1) != ",") {
          if (Number(maths)== 0) {
            maths = "-"
          }else{
            maths = maths + "-"
          }
           
          }

          
          const math = new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(maths)
       
          msg.edit({ embeds: [math], components: [row, row2, row3, row4, row5]})
        }
        if (i.customId == "divide") {
          if (maths != "0" && maths.charAt(maths.length-1) != "+" && maths.charAt(maths.length-1) != "*" && maths.charAt(maths.length-1) != "-"&& maths.charAt(maths.length-1) != "/" && maths.charAt(maths.length-1) != ",") {
         
            maths = maths + "/"
          
           
          }

          
          const math = new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(maths)
       
          msg.edit({ embeds: [math], components: [row, row2, row3, row4, row5]})
        }
        if (i.customId == "point") {
          if (maths.charAt(maths.length-1) != "+" && maths.charAt(maths.length-1) != "*" && maths.charAt(maths.length-1) != "-"&& maths.charAt(maths.length-1) != "/" && maths.charAt(maths.length-1) != ",") {
         
            maths = maths + "."
          
           
          }

          
          const math = new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(maths)
       
          msg.edit({ embeds: [math], components: [row, row2, row3, row4, row5]})
        }
        if (i.customId == 'one') {
          if (maths == "0") {
            maths = "1"
          }else{
            maths = maths + "1"
          }

          
          const math = new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(maths)
       
          msg.edit({ embeds: [math], components: [row, row2, row3, row4, row5]})
        }
        if (i.customId == 'two') {
          if (maths == "0") {
            maths = "2"
          }else{
            maths = maths + "2"
          }

          
          const math = new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(maths)
       
          msg.edit({ embeds: [math], components: [row, row2, row3, row4, row5]})
        }
        if (i.customId == 'three') {
          if (maths == "0") {
            maths = "3"
          }else{
            maths = maths + "3"
          }

          
          const math = new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(maths)
       
          msg.edit({ embeds: [math], components: [row, row2, row3, row4, row5]})
        }
        if (i.customId == 'four') {
          if (maths == "0") {
            maths = "4"
          }else{
            maths = maths + "4"
          }

          
          const math = new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(maths)
       
          msg.edit({ embeds: [math], components: [row, row2, row3, row4, row5]})
        }
        if (i.customId == 'five') {
          if (maths == "0") {
            maths = "5"
          }else{
            maths = maths + "5"
          }

          
          const math = new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(maths)
       
          msg.edit({ embeds: [math], components: [row, row2, row3, row4, row5]})
        }
        if (i.customId == 'six') {
          if (maths == "0") {
            maths = "6"
          }else{
            maths = maths + "6"
          }

          
          const math = new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(maths)
       
          msg.edit({ embeds: [math], components: [row, row2, row3, row4, row5]})
        }
        if (i.customId == 'seven') {
          if (maths == "0") {
            maths = "7"
          }else{
            maths = maths + "7"
          }

          
          const math = new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(maths)
       
          msg.edit({ embeds: [math], components: [row, row2, row3, row4, row5]})
        }
        if (i.customId == 'eight') {
          if (maths == "0") {
            maths = "8"
          }else{
            maths = maths + "8"
          }

          
          const math = new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(maths)
       
          msg.edit({ embeds: [math], components: [row, row2, row3, row4, row5]})
        }
        if (i.customId == 'nine') {
          if (maths == "0") {
            maths = "9"
          }else{
            maths = maths + "9"
          }

          
          const math = new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(maths)
       
          msg.edit({ embeds: [math], components: [row, row2, row3, row4, row5]})
        }
        if (i.customId == 'zero') {
          if (maths == "0") {
            maths = "0"
          }else{
            maths = maths + "0"
          }

          
          const math = new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(maths)
       
          msg.edit({ embeds: [math], components: [row, row2, row3, row4, row5]})
        }
        if (i.customId == 'delete') {
          if (maths.length  - 1 > 0) {
            maths = maths.slice(0,-1);
            const math = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(maths)
         
            msg.edit({ embeds: [math], components: [row, row2, row3, row4, row5]})
          }else if (maths.length - 1 == 0){
            const math = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle("0")
            maths = "0"
            msg.edit({ embeds: [math], components: [row, row2, row3, row4, row5]})
          }         
        }
        if (i.customId == "calcu") {
          if (maths.charAt(maths.length-1) == "+" || maths.charAt(maths.length-1) == "*" && maths.charAt(maths.length-1) != "-" && maths.charAt(maths.length-1) != "/"  && maths.charAt(maths.length-1) != ",") {
          message.channel.send("Invalid Syntax")
          }else{
            const math_em = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(math.evaluate(maths).toString())
            maths = math.evaluate(maths).toString()
            msg.edit({ embeds: [math_em], components: [row, row2, row3, row4, row5]})
           
          }
         
        }
      });
      
      collector.on('end', collected => msg.edit({ embeds: [end_em], components: [row, row2, row3, row4, row5]}));
    })

   
   }

}


 
module.exports = main;
