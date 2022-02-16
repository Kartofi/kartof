[![discordBadge](https://img.shields.io/badge/Chat-Click%20here-7289d9?style=for-the-badge&logo=discord)](https://discord.gg/BxZJHQREsA)
[![downloadsBadge](https://img.shields.io/npm/dt/nuggies?style=for-the-badge)](https://npmjs.com/kartof)
[![versionBadge](https://img.shields.io/npm/v/nuggies?style=for-the-badge)](https://npmjs.com/kartof)



<div align="left">
  <p>
    <a href="https://nodei.co/npm/kartof
/"><img src="https://nodei.co/npm/kartof.png?downloads=true&stars=true" alt="NPM Info" /></a>
  </p>
</div>

An Utility Package For Discord Bots!

# 📂・Installation
```powershell
npm i kartof
```
	


# Packages Used
```powershell

mongoose
discord.js version 13
node-fetch
canvacord
discord-canvas
mathjs
```
# Installation

npm:
```powershell
npm i kartof
 ```

yarn:
```powershell
yarn add kartof
 ```
# 💡・Features
- Welcome/GoodBye - multyguild!
- Memes!
- Calculator With buttons!
- Random images!


## connect to database

So first you will need to connect so use welcome-goodbye

  ```js
kartof.connect( mongoDB URL )
  ```
  
  ## Set welcome-goodbye channel

  ```js
kartof.goodbye_welcome_set({ 
      message: message,
      guildID: message.guild.id,
      channelID: message.channel.id
});
  ```
  
   ## Send goodbye message

  ```js
kartof.goodbye({ 
     message: message,
      guildID: member.guild.id,
      username: member.username,
	  discriminator: member.discriminator,
	  avatarimg: member.avatarURL,
	  memberCount: member.guild.memberCount
});
  ```
 ## Send welcome message

```js
kartof.welcome({ 
      message: message,
      guildID: member.guild.id,
      username: member.username,
	  discriminator: member.discriminator,
	  avatarimg: member.avatarURL,
	  memberCount: member.guild.memberCount
});
```


 ## meme
meme command for some reason 
  ```js
kartof.meme({ 
      message: message,
      channelID: message.channel.id
      
   });
```
 ## random image
meme command for some reason 
  ```js
kartof.random_image({ 
      message: message,
      channelID: message.channel.id
      
   });
```

 ## Calculator With Buttons

  ```js
kartof.calculator({
        message: message,
         expire_time: Time in seconds,
         channelID: message.channel.id
    });
```
<img src="https://media.discordapp.net/attachments/710152357966774385/943226601527713842/unknown.png">
