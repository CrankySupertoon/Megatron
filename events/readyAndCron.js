const fetch = require('node-fetch');
const Discord = require('discord.js');
const cronjob = require('node-cron');

var cron;

module.exports = (client, message) => {
    client.log.info(`Logged in as ${client.user.tag}!`);
    if (client.config.ownerlogging) {
        for (i = 0; i < client.config.ownerid.length; i++) {
            client.users.get(client.config.ownerid[i]).send(`I am now online.`);
        }
    }
    if (!cron) {
        setInterval(eventTimer, 1000 * 60, client);
        bosstimer(client, message);
    }
}

function eventTimer(client) {
    //console.log('Event Running');
    setRandomActivity(client);
    checkTwitchStreams(client);
}

function setRandomActivity(client) {
    var acts = client.config.statusList;
    if (acts.length >= 1) {
        client.user.setActivity(acts[Math.floor(Math.random() * acts.length)]);
    }
}

function checkTwitchStreams(client) {
    var chans = client.twitchDB.indexes;
    for (i = 0; i < chans.length; i++) {
        const chan = chans[i];
        const user = client.twitchDB.get(chan);
        if (!(user.channels.length > 0)) {
            client.twitchDB.delete(chan);
            return;
        }
        fetch(`https://api.twitch.tv/kraken/streams/${chan}`, {
            headers: {'Client-ID': client.config.twitchClientId},
        }).then(res => res.json()).then(json => {
            if (json.stream == null) {
                if (user.sent)
                    client.twitchDB.setProp(chan, 'sent', false);
                return;
            } else {
                if (user.sent)
                    return; // post has already been sent, don't sent again
                ch = json.stream;
                const embed = new Discord.MessageEmbed()
                        .setAuthor(ch.channel.status, null, ch.channel.url)
                        .setColor(client.config.embedcolor)
                        .setTitle(`${ch.channel.display_name}\n${ch.channel.url}`)
                        .setURL(ch.channel.url)
                        .setThumbnail(ch.channel.logo)
                        .setImage(`${ch.preview.large}?ver=${Math.floor(Math.random() * 100000)}`)
                        .addField("Streaming", ch.game, true)
                        .addField("Viewers", `**${ch.viewers}**`, true)
                        .setFooter(`${ch.channel.followers} followers${(ch.channel.partner ? " | Partnered" : "")}${(ch.channel.mature ? " | Mature Stream" : "")}`);

                for (j = 0; j < user.channels.length; j++) {
                    client.channels.get(user.channels[j]).send(`Hey @everyone, ${ch.channel.display_name} is live!`, {embed});
                }
                client.twitchDB.setProp(chan, 'sent', true);
                return;
            }
        });

    }
}

function bosstimer(client, message) {
//    var ids = client.guildDB.indexes;
//    const Guildid = ids[i];
//    var bossChannel = client.guildDB.get(values, "bossChannel");

    var bossChannel = client.guildDB.get("bossChannel");
// if (bossChannel !== "") {
    // Mon, Wed and Fri Boss Spawns
    cronjob.schedule("00 6 * * 1,3,5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 1 hour!');
        client.log.info('Sent Boss Alert 6hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("30 6 * * 1,3,5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert 6hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("45 6 * * 1,3,5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 15 mins!');
        client.log.info('Sent Boss Alert 6hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("00 7 * * 1,3,5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka has arrived!!');
        client.log.info('Sent Boss Alert 6hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("00 16 * * 1,3,5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 1 hour!');
        client.log.info('Sent Boss Alert 16hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("30 16 * * 1,3,5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert 16hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("45 16 * * 1,3,5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 15 mins!');
        client.log.info('Sent Boss Alert 16hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("00 17 * * 1,3,5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum has arrived!!');
        client.log.info('Sent Boss Alert 16hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("15 19 * * 1,3,5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 1 hour!');
        client.log.info('Sent Boss Alert 19hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("45 19 * * 1,3,5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert 19hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("00 20 * * 1,3,5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 15 mins!');
        client.log.info('Sent Boss Alert 19hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("15 20 * * 1,3,5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka has arrived!!');
        client.log.info('Sent Boss Alert 19hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("00 22 * * 1,3,5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 1 hour!');
        client.log.info('Sent Boss Alert 22hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("30 22 * * 1,3,5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert 22hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("45 22 * * 1,3,5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 15 mins!');
        client.log.info('Sent Boss Alert 22hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("00 23 * * 1,3,5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum has arrived!!');
        client.log.info('Sent Boss Alert 22hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("05 23 * * 1,3,5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').bulkDelete(100);
        client.log.info('Cleaning Boss Alerts');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    // Tue and Thur Boss Spawns

    cronjob.schedule("00 6 * * 2,4", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 1 hour!');
        client.log.info('Sent Boss Alert 6hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("30 6 * * 2,4", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert 6hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("45 6 * * 2,4", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 15 mins!');
        client.log.info('Sent Boss Alert 6hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("00 7 * * 2,4", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum has arrived!!');
        client.log.info('Sent Boss Alert 6hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("00 16 * * 2,4", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 1 hour!');
        client.log.info('Sent Boss Alert 16hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("30 16 * * 2,4", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert 16hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("45 16 * * 2,4", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 15 mins!');
        client.log.info('Sent Boss Alert 16hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });


    cronjob.schedule("00 17 * * 2,4", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka has arrived!!');
        client.log.info('Sent Boss Alert 16hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("15 19 * * 2,4", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 1 hour!');
        client.log.info('Sent Boss Alert 19hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("45 19 * * 2,4", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert 19hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("00 20 * * 2,4", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 15 mins!');
        client.log.info('Sent Boss Alert 19hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("15 20 * * 2,4", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum has arrived!!');
        client.log.info('Sent Boss Alert 19hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("00 22 * * 2,4", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 1 hour!');
        client.log.info('Sent Boss Alert 22hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("30 22 * * 2,4", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert 22hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("45 22 * * 2,4", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 15 mins!');
        client.log.info('Sent Boss Alert 22hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("00 23 * * 2,4", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka has arrived!!');
        client.log.info('Sent Boss Alert 22hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("05 23 * * 2,4", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').bulkDelete(100);
        client.log.info('Cleaning Boss Alerts');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    // Sat Boss Spawns
    cronjob.schedule("00 10 * * 6", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 1 hour!');
        client.log.info('Sent Boss Alert Sat 10hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("30 10 * * 6", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert Sat 10hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("45 10 * * 6", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 15 mins!');
        client.log.info('Sent Boss Alert Sat 10hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("00 11 * * 6", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka has arrived!!');
        client.log.info('Sent Boss Alert Sat 10hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("00 16 * * 6", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka and Kutum is getting ready to spawn in 1 hour!');
        client.log.info('Sent Boss Alert Sat 16hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("30 16 * * 6", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka and Kutum is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert Sat 16hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("45 16 * * 6", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka and Kutum is getting ready to spawn in 15 mins!');
        client.log.info('Sent Boss Alert Sat 16hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("00 17 * * 6", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka and Kutum has arrived!!');
        client.log.info('Sent Boss Alert Sat 16hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("15 21 * * 6", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka and Kutum is getting ready to spawn in 1 hour!');
        client.log.info('Sent Boss Alert Sat 21hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("45 21 * * 6", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka and Kutum is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert Sat 21hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("00 22 * * 6", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka and Kutum is getting ready to spawn in 15 mins!');
        client.log.info('Sent Boss Alert Sat 21hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("15 22 * * 6", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka and Kutum has arrived!!');
        client.log.info('Sent Boss Alert Sat 21hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("20 22 * * 6", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').bulkDelete(100);
        client.log.info('Cleaning Boss Alerts');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    // Sun Boss Spawns
    cronjob.schedule("30 10 * * 0", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert Sun 10hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("30 16 * * 0", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka and Kutum is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert Sun 16hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("45 19 * * 0", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka and Kutum is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert Sun 19hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule("20 20 * * 0", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').bulkDelete(100);
        client.log.info('Cleaning Boss Alerts');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cronjob.schedule('*/10 * * * *', function () {
//        client.channels.find(channel => channel.name === 'boss-alerts').send('test post from timer');
        client.log.info('Crons are working');
    });
}