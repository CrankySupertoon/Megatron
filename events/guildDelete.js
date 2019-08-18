const Discord = require('discord.js');
const time = require('../functions/time');

module.exports = (client, guild) => {
    var ownerid = process.env.ownerid;
    client.users.fetch(ownerid).then( user => {
        const embed = new Discord.MessageEmbed()
        .setColor(process.env.embedcolor)
        .setAuthor('Server Deleted/Left')
        .addField('Name', `${guild.name}`)
        .addField('ID', `${guild.id}`)
        .addField('Owner', `${guild.owner.user.tag}`)
        .addField('Members', `${guild.memberCount}`)
        .setFooter(time.stamp());
        user.send({ embed }).catch(console.error);
    });
    client.log.info(`I have been from the guild: ${guild.name}, owned by: ${guild.owner.user.tag}, with ${guild.memberCount} members.`);

    client.guildDB.delete(guild.id);
}
