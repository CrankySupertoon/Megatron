exports.run = async (client, message, args) => {
    client.guildDB.ensure(message.guild.id, client.guildDBDefaults);
    client.guildDB.set(message.guild.id, message.channel.id, "bossChannel");
    message.react('✅');
};

exports.info = {
    name: 'bossalerts',
    aliases: ['bosschannel', 'boss'],
    usage: ["bossalerts"],
    module: "Utility",
    nsfw: false,
    serverOnly: true,
    ownerOnly: false,
    requires: ['MANAGE_CHANNELS'],
    botPermissions: ['SEND_MESSAGES'],
    description: "run this command in a channel you want server boss alerts to be sent in."
};