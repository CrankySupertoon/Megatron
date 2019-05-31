const Discord = require('discord.js');
const cron = require('node-cron');


module.exports = (client) => {
    
//    var ids = client.guildDB.indexes;
//    var bossChannel = client.guildDB.get(ids, "bossChannel");
//    
    // Mon-Fri Boss Spawns
    cron.schedule("30 6 * * 1-5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert 6hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cron.schedule("30 16 * * 1-5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert 16hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cron.schedule("45 19 * * 1-5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert 19hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cron.schedule("30 22 * * 1-5", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert 22hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    // Sat Boss Spawns
    cron.schedule("30 10 * * 6", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert Sat 10hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cron.schedule("30 16 * * 6", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert Sat 16hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cron.schedule("30 16 * * 6", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert Sat 16hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cron.schedule("45 21 * * 6", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert Sat 21hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cron.schedule("45 21 * * 6", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert Sat 21hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    // Sun Boss Spawns
    cron.schedule("30 10 * * 0", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert Sun 10hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cron.schedule("30 16 * * 0", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert Sun 16hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cron.schedule("30 16 * * 0", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert Sun 16hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cron.schedule("45 19 * * 0", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kzarka is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert Sun 19hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cron.schedule("45 19 * * 0", function () {
        client.channels.find(channel => channel.name === 'boss-alerts').send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
        client.log.info('Sent Boss Alert Sun 19hr');
    }, {
        scheduled: true,
        timezone: "America/Denver"
    });

    cron.schedule('*/10 * * * *', function () {
//        client.channels.find(channel => channel.name === 'boss-alerts').send('test post from timer');
        client.log.info('Crons are working');
    });
};

