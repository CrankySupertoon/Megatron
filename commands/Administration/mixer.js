exports.run = async (client, message, args) => {
    if (!args[0])
        return message.channel.send(`Please provide the name of the channel to monitor. Example: ${process.env.prefix || client.config.prefix}mixer tohur`);

    if (args[0].toLowerCase().includes('mixer.com'))
        return message.channel.send(`please only put the name of the channel example: ${process.env.prefix || client.config.prefix}mixer tohur`);

    var stream = args[0].toLowerCase().replace(/[^0-9\_\-a-z]/g, '');

    client.mixerDB.ensure(stream, {sent: false, channels: []});

    //if(client.mixerDB.hasProp(stream, message.channel.id))
    //return message.channel.send(`This channel is already configured to recieve live alerts from that mixer channel.`);

    client.mixerDB.push(stream, message.channel.id, 'channels');
    return message.channel.send(`Channel added.`);

};

exports.info = {
    name: 'mixer',
    aliases: [],
    usage: ["mixer tohur"],
    module: "Administration",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: ['MANAGE_ROLES'],
    botPermissions: ['SEND_MESSAGES', 'MANAGE_ROLES'],
    description: "Set mixer channel alerts to post in the channel command run in to alert whenever that mixer channel goes live."
};