exports.run = async (client, message, args) => {
    if (!args[0])
        return message.channel.send(`Please provide the name of the twitter account to monitor. Example: ${client.config.prefix}twitter tohur`);

    if (args[0].toLowerCase().includes('twitter.com'))
        return message.channel.send(`please only put the name of the twitter account: ${client.config.prefix}twitter tohur`);

    var stream = args[0].toLowerCase().replace(/[^0-9\_\-a-z]/g, '');

    client.twitterDB.ensure(stream, {sent: false, channels: []});

    //if(client.twitterDB.hasProp(stream, message.channel.id))
    //return message.channel.send(`This channel is already configured to recieve live alerts from that twitter account.`);

    client.twitterDB.push(stream, message.channel.id, 'channels');
    return message.channel.send(`Twitter account added.`);

};

exports.info = {
    name: 'twitter',
    aliases: [],
    usage: ["twitter tohur"],
    module: "Administration",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: ['MANAGE_ROLES'],
    botPermissions: ['SEND_MESSAGES', 'MANAGE_ROLES'],
    description: "Set Twitter  alerts to post in the channel command run in to alert whenever that twitter account post updates."
};