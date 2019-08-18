const Discord = require('discord.js');
const time = require('../functions/time');

module.exports = (client, oldUser, newUser) => {
    //client.guildDB.ensure(newUser.guild.id, client.guildDBDefaults);
    //var logChannelId = client.guildDB.get(newUser.guild.id, "logChannel");

    if (process.env.ownerlogging) { // Must log to a fixed guild OR DM
        var ownerid = process.env.ownerid;
        if (oldUser.tag !== newUser.tag) { // check for username change 
            const embed = new Discord.MessageEmbed()
                .setAuthor("User Tag Changed")
                .setColor(process.env.embedcolor)
                .addField(newUser.tag, `(${newUser.id})`)
                .addField("Old: ", oldUser.tag)
                .addField("New: ", newUser.tag)
                .setFooter(time.stamp());
            client.users.get(ownerid).send({embed});
        }
    }
}