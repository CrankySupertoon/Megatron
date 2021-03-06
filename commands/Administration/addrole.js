const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    //!addrole @andrew Dog Person
    if (!message.member.hasPermission("MANAGE_MEMBERS"))
        return message.reply("Sorry pal, you can't do that.");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember)
        return message.reply("Couldn't find that user, yo.");
    let role = args.join(" ").slice(22);
    if (!role)
        return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(role => role.name === role);
    if (!gRole)
        return message.reply("Couldn't find that role.");

    if (rMember.roles.has(gRole.id))
        return message.reply("They already have that role.");
    await(rMember.addRole(gRole.id));

    try {
        await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
    } catch (e) {
        message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
    }
};

exports.info = {
    name: 'addrole',
    aliases: [],
    usage: ["addrole @user @RoleName"],
    module: "Administration",
    nsfw: false,
    serverOnly: true,
    ownerOnly: false,
    requires: ['MANAGE_ROLES'],
    botPermissions: ['SEND_MESSAGES', 'MANAGE_ROLES'],
    description: "Gives the specified role to the mentioned user"
};