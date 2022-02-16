Hello, this is my first package.

	

<a href="https://www.npmjs.com/package/kartof">Kartof npm package</a>

# Packages Used
```powershell

mongoose
discord.js
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
