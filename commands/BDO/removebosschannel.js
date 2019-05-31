exports.run = async (client, message, args) => {
    client.guildDB.ensure(message.guild.id, client.guildDBDefaults);
    client.guildDB.set(message.guild.id, "", "bossChannel");
    message.react('✅');
};

exports.info = {
    name: 'removebossalerts',
    aliases: ['removeboss', 'removebosschannel'],
    usage: ["removebossalerts"],
    module: "BDO",
    nsfw: false,
    serverOnly: true,
    ownerOnly: false,
    requires: ['MANAGE_CHANNELS'],
    botPermissions: ['SEND_MESSAGES'],
    description: "Remove new boss alerts message from the server"
};