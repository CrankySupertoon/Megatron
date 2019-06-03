const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  try {
    const user = message.mentions.users.first();
    
    if (!message.guild.roles.find(r => r.name == args.slice(1).join(' '))) return message.reply('That\'s not a role!');
    if (user) {
      if (message.guild.members.get(message.author.id).highestRole.name == '@everyone') message.reply('The role you are trying to add is above your highest role\'s position!');
      else {
        if (Number(message.member.highestRole.position) >= Number(message.guild.roles.find(r => r.name == args.slice(1).join(' ')).position)) {
          if (message.member.hasPermission('MANAGE_ROLES')) {
              const member = message.guild.member(user);
              if (member) {
                if (message.guild.roles.find(r => r.name == args.slice(1).join(' '))) {
                  member.addRole(message.guild.roles.find(r => r.name == args.slice(1).join(' '))).then(() => {
                    message.reply(`Successfully added Role to ${user.tag}`);

                    var logChannelId = client.guildDB.get(message.guild.id, "logChannel");
                    if (logChannelId) {
                        if (logServer) {
                            logServer = message.guild.channels.get(logChannelId);
                            const embed = new Discord.MessageEmbed()
                                    .setTitle('Add Role')
                                    .setColor('#eeeeee')
                                    .setDescription(`Name: ${user.username}\nID: ${user.id}\nModerator: ${message.author.username}`);
                            logServer.send({embed});
                        }
                    }
                  }).catch('There was an error!');
                } else message.reply('I can\'t find that role!');
              } else message.reply('That user isn\'t in this guild!');
          } else message.reply('You don\'t have the Manage Roles permission!');
        } else message.reply('The role you are trying to add is above your highest role\'s position!');
      }
    } else message.reply('You didn\'t mention the user to add the role to!');
  } catch (err) {
    message.channel.send('There was an error!\n' + err.stack).catch();
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