/**
 * Presser Beta
 * @author 7teen
 */
const { Client, Intents, MessageEmbed } = require('discord.js'),
    nuker = new Client({
        intents: Object.values(Intents.FLAGS).reduce((a, b) => a + b),
    }),
    { red } = require('chalk'),
    {
        MassChannels,
        DelAllChannels,
        MassChnPing,
        MassRoles,
        DelAllRoles,
        DelAllStickers,
        DelAllEmotes,
        BanAll,
        KickAll,
    } = require('./nuke_functions'),
    {
        token,
        prefix,
        userID,
        disableEveryone,
    } = require('../config/config.json')

nuker.on('ready', () => {
    console.clear()
    console.log(
        red(`


    ██▓███   ██▀███  ▓█████   ██████   ██████ ▓█████  ██▀███
    ▓██░  ██▒▓██ ▒ ██▒▓█   ▀ ▒██    ▒ ▒██    ▒ ▓█   ▀ ▓██ ▒ ██▒
    ▓██░ ██▓▒▓██ ░▄█ ▒▒███   ░ ▓██▄   ░ ▓██▄   ▒███   ▓██ ░▄█ ▒
    ▒██▄█▓▒ ▒▒██▀▀█▄  ▒▓█  ▄   ▒   ██▒  ▒   ██▒▒▓█  ▄ ▒██▀▀█▄
    ▒██▒ ░  ░░██▓ ▒██▒░▒████▒▒██████▒▒▒██████▒▒░▒████▒░██▓ ▒██▒
    ▒▓▒░ ░  ░░ ▒▓ ░▒▓░░░ ▒░ ░▒ ▒▓▒ ▒ ░▒ ▒▓▒ ▒ ░░░ ▒░ ░░ ▒▓ ░▒▓░
    ░▒ ░       ░▒ ░ ▒░ ░ ░  ░░ ░▒  ░ ░░ ░▒  ░ ░ ░ ░  ░  ░▒ ░ ▒░
    ░░         ░░   ░    ░   ░  ░  ░  ░  ░  ░     ░     ░░   ░
    ░        ░  ░      ░        ░     ░  ░   ░


                            Beta
                    Nuker: ${nuker.user.tag}
                    Prefix: ${prefix}
    `)
    )
    nuker.user.setActivity({ name: 'Presser Beta', type: 'PLAYING' })
})

/**
 * Commands
 * @param {Message} message The inial message
 * @param {string} args1 Arg 1
 * @param {string} args2 Arg 2
 * @param {string} args3 Arg 3
 * @param {boolean} allowed Is the executor allowed to run any command ?
 */
function playNuke(message, args1, args2, args3, allowed = false) {
    if (!allowed)
        return message.reply(
            "You are not authorised to use any of this tools' commands."
        )

    // Mass Channels
    if (message.content.startsWith(`${prefix}mc`)) {
        MassChannels(args1, args2).catch((err) => {
            message.reply(err)
        })
    }

    // Delete all channels
    if (message.content.startsWith(`${prefix}dc`)) {
        DelAllChannels().catch((err) => {
            message.reply(err)
        })
    }

    // Mass Channels and Ping
    if (message.content.startsWith(`${prefix}cp`)) {
        MassChnPing(args1, args2, args3).catch((err) => {
            message.reply(err)
        })
    }

    // Mass Roles
    if (message.content.startsWith(`${prefix}mr`)) {
        MassRoles(args1, args2).catch((err) => {
            message.reply(err)
        })
    }

    // Delete all Roles
    if (message.content.startsWith(`${prefix}dr`)) {
        DelAllRoles().catch((err) => {
            message.reply(err)
        })
    }

    // Delete all Stickers
    if (message.content.startsWith(`${prefix}ds`)) {
        DelAllStickers().catch((err) => {
            message.reply(err)
        })
    }

    // Delete all Emotes
    if (message.content.startsWith(`${prefix}de`)) {
        DelAllEmotes().catch((err) => {
            message.reply(err)
        })
    }

    // Mass Ban
    if (message.content.startsWith(`${prefix}mb`)) {
        BanAll().catch((err) => {
            message.reply(err)
        })
    }

    // Mass Kick
    if (message.content.startsWith(`${prefix}mk`)) {
        KickAll().catch((err) => {
            message.reply(err)
        })
    }
}

nuker.on('messageCreate', (message) => {
    // Possible Args
    const args = message.content.split(/ +/).slice(1),
        args1 = args[0], // Used for amount
        args2 = args.slice(1).join(' '), // Naming things
        args3 = args.slice(2).join(', '), // Other
        isAllowedToUse = !disableEveryone || message.author.id === userID

    if (message.content.startsWith(`${prefix}help`) && isAllowedToUse) {
        const helpEmbed = new MessageEmbed()
            .setDescription(
                `**Presser Beta ;**\n
    **mass channels ;**
    ${prefix}mc [amount] (text) i.e \`${prefix}mc 5 test\`\n
    **mass channel n ping ;**
    ${prefix}cp [amount] (text), {message} i.e \`${prefix}cp 5 test, testing\`\n
    **mass roles ;**
    ${prefix}mr [amount] (text) i.e \`${prefix}mr 5 test\`\n
    **delete channels ;**
    ${prefix}dc\n
    **delete roles ;**
    ${prefix}dr\n
    **delete emotes ;**
    ${prefix}de\n
    **delete stickers (new) ;**
    ${prefix}ds\n
    **mass kick ;**
    ${prefix}mk\n
    **mass ban ;**
    ${prefix}mb
    `
            )
            .setFooter(`© Presser Beta`)
            .setColor(0x36393e)
            .setTimestamp(Date.now())
        message.channel.send(helpEmbed)
    } else {
        playNuke(message, args1, args2, args3, isAllowedToUse)
    }
})

nuker.login(token).catch((e) => console.error)
