exports.run = async (client, message, args) => {
    if (!args[0])
        return message.channel.send(`Please provide the name of the channel to remove. Example: ${process.env.prefix || client.config.prefix}mixer tohur`);

    if (args[0].toLowerCase().includes('mixer.com'))
        return message.channel.send(`please only put the name of the channel example: ${process.env.prefix || client.config.prefix}mixer tohur`);

    var stream = args[0].toLowerCase().replace(/[^0-9\_\-a-z]/g, '');

    client.mixerDB.ensure(stream, {sent: false, channels: []});

    client.mixerDB.remove(stream, message.channel.id, 'channels');
    return message.channel.send(`Channel removed.`);

};

exports.info = {
    name: 'remmixer',
    aliases: [],
    usage: ["remmixer tohur"],
    module: "Administration",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: ['MANAGE_ROLES'],
    botPermissions: ['SEND_MESSAGES', 'MANAGE_ROLES'],
    description: "Removed mixer channel from alerting in channel."
};