const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    try {
        const user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member.ban(args.slice(1).join(' ')).then(() => {
                    message.reply(`Successfully banned ${user.tag}`);

                    var logChannelId = client.guildDB.get(message.guild.id, "logChannel");
                    if (logChannelId) {
                        if (logServer) {
                            logServer = message.guild.channels.get(logChannelId);
                            const embed = new Discord.MessageEmbed()
                                    .setTitle('User Ban')
                                    .setColor('#eeeeee')
                                    .setDescription(`Name: ${user.username}\nID: ${user.id}\nReason: ${args.slice(1).join(' ')}\nModerator: ${message.author.username}`);
                            logServer.send({embed});
                        }
                    }
                }).catch(err => {
                    message.reply('I was unable to ban the member');
                });
            } else {
                message.reply('That user isn\'t in this guild!');
            }
        } else {
            message.reply('You didn\'t mention the user to ban!');
        }
    } catch (err) {
        message.channel.send('There was an error!\n' + err + '').catch();
    }
};

exports.info = {
    name: 'ban',
    aliases: [],
    usage: ["ban @user reason"],
    module: "Administration",
    nsfw: false,
    serverOnly: true,
    ownerOnly: false,
    requires: ['BAN_MEMBERS'],
    botPermissions: ['BAN_MEMBERS'],
    description: "Bans a member for an optional reason"
};