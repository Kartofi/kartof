Hello, this is my first package.

	

<a href="https://www.npmjs.com/package/kartof">Kartof npm package</a>

# Required
```powershell

mongoose
discord.js
node-fetch
canvacord
discord-canvas

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
      guildID: your guild id,
      username: some username,
	  discriminator: discriminator of that user,
	  avatarimg: avatar img url,
	  memberCount: memebr count
});
  ```
 ## Send welcome message

```js
kartof.welcome({ 
      message: channel id,
      guildID: your guild id,
      username: some username,
	  discriminator: discriminator of that user,
	  avatarimg: avatar img url,
	  memberCount: memebr count
});
```


 ## meme
and a meme command for some reason 
  ```js
kartof.meme({ 
      message: message,
      channelID: message.channel.id
      
   });
```
