exports.run = async (client, message, args) => {
    if (!args[0])
        return message.channel.send(`Please provide the name of the twitter account to remove. Example: ${process.env.prefix || client.config.prefix}remtwitter tohur`);

    if (args[0].toLowerCase().includes('mixer.com'))
        return message.channel.send(`please only put the name of the twitter account example: ${process.env.prefix || client.config.prefix}remtwitter tohur`);

    var stream = args[0].toLowerCase().replace(/[^0-9\_\-a-z]/g, '');

    client.twitterDB.ensure(stream, {last: "", channels: []});

    client.twitterDB.remove(stream, message.channel.id, 'channels');
    return message.channel.send(`Twitter account removed.`);

};

exports.info = {
    name: 'remtwitter',
    aliases: [],
    usage: ["remtwitter tohur"],
    module: "Administration",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: ['MANAGE_ROLES'],
    botPermissions: ['SEND_MESSAGES', 'MANAGE_ROLES'],
    description: "Removed mixer channel from alerting in channel."
};