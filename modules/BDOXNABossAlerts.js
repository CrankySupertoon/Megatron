const cronjob = require('node-cron');

module.exports = (client) => {

    client.on('ready', () => { //extra message handler
        var guilds = client.guildDB.indexes;
        for (i = 0; i < guilds.length; i++) {
            const guild = guilds[i];
            const bossChannel = client.guildDB.get(guild, "bossChannel");

            // Mon, Wed and Fri Boss Spawns
            cronjob.schedule("00 6 * * 1,3,5", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 1 hour!');
                    client.log.info('Sent Boss Alert 6hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("30 6 * * 1,3,5", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 30 mins!');
                    client.log.info('Sent Boss Alert 6hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("45 6 * * 1,3,5", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 15 mins!');
                    client.log.info('Sent Boss Alert 6hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 7 * * 1,3,5", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver has arrived!!');
                    client.log.info('Sent Boss Alert 6hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 16 * * 1,3,5", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 1 hour!');
                    client.log.info('Sent Boss Alert 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("30 16 * * 1,3,5", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
                    client.log.info('Sent Boss Alert 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("45 16 * * 1,3,5", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 15 mins!');
                    client.log.info('Sent Boss Alert 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 17 * * 1,3,5", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum has arrived!!');
                    client.log.info('Sent Boss Alert 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("15 19 * * 1,3,5", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 1 hour!');
                    client.log.info('Sent Boss Alert 19hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("45 19 * * 1,3,5", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 30 mins!');
                    client.log.info('Sent Boss Alert 19hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 20 * * 1,3,5", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 15 mins!');
                    client.log.info('Sent Boss Alert 19hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("15 20 * * 1,3,5", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver has arrived!!');
                    client.log.info('Sent Boss Alert 19hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 22 * * 1,3,5", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 1 hour!');
                    client.log.info('Sent Boss Alert 22hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("30 22 * * 1,3,5", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
                    client.log.info('Sent Boss Alert 22hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("45 22 * * 1,3,5", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 15 mins!');
                    client.log.info('Sent Boss Alert 22hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 23 * * 1,3,5", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum has arrived!!');
                    client.log.info('Sent Boss Alert 22hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("05 23 * * 1,3,5", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).bulkDelete(100);
                    client.log.info('Cleaning Boss Alerts for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            // Tue and Thur Boss Spawns

            cronjob.schedule("00 6 * * 2,4", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 1 hour!');
                    client.log.info('Sent Boss Alert 6hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("30 6 * * 2,4", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
                    client.log.info('Sent Boss Alert 6hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("45 6 * * 2,4", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 15 mins!');
                    client.log.info('Sent Boss Alert 6hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 7 * * 2,4", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum has arrived!!');
                    client.log.info('Sent Boss Alert 6hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 16 * * 2,4", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 1 hour!');
                    client.log.info('Sent Boss Alert 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("30 16 * * 2,4", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 30 mins!');
                    client.log.info('Sent Boss Alert 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("45 16 * * 2,4", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 15 mins!');
                    client.log.info('Sent Boss Alert 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });


            cronjob.schedule("00 17 * * 2,4", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver has arrived!!');
                    client.log.info('Sent Boss Alert 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("15 19 * * 2,4", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 1 hour!');
                    client.log.info('Sent Boss Alert 19hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("45 19 * * 2,4", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
                    client.log.info('Sent Boss Alert 19hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 20 * * 2,4", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 15 mins!');
                    client.log.info('Sent Boss Alert 19hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("15 20 * * 2,4", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum has arrived!!');
                    client.log.info('Sent Boss Alert 19hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 22 * * 2,4", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 1 hour!');
                    client.log.info('Sent Boss Alert 22hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("30 22 * * 2,4", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 30 mins!');
                    client.log.info('Sent Boss Alert 22hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("45 22 * * 2,4", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 15 mins!');
                    client.log.info('Sent Boss Alert 22hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 23 * * 2,4", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver has arrived!!');
                    client.log.info('Sent Boss Alert 22hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("05 23 * * 2,4", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).bulkDelete(100);
                    client.log.info('Cleaning Boss Alerts for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            // Sat Boss Spawns
            cronjob.schedule("00 10 * * 6", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 1 hour!');
                    client.log.info('Sent Boss Alert Sat 10hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("30 10 * * 6", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 30 mins!');
                    client.log.info('Sent Boss Alert Sat 10hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("45 10 * * 6", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 15 mins!');
                    client.log.info('Sent Boss Alert Sat 10hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 11 * * 6", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver has arrived!!');
                    client.log.info('Sent Boss Alert Sat 10hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 13 * * 6", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 1 hour!');
                    client.log.info('Sent Boss Alert Sat 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("30 13 * * 6", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
                    client.log.info('Sent Boss Alert Sat 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("45 13 * * 6", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 15 mins!');
                    client.log.info('Sent Boss Alert Sat 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 14 * * 6", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum has arrived!!');
                    client.log.info('Sent Boss Alert Sat 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 16 * * 6", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 1 hour!');
                    client.log.info('Sent Boss Alert Sat 10hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("30 16 * * 6", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 30 mins!');
                    client.log.info('Sent Boss Alert Sat 10hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("45 16 * * 6", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 15 mins!');
                    client.log.info('Sent Boss Alert Sat 10hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 17 * * 6", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver has arrived!!');
                    client.log.info('Sent Boss Alert Sat 10hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("15 21 * * 6", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 1 hour!');
                    client.log.info('Sent Boss Alert Sat 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("45 21 * * 6", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
                    client.log.info('Sent Boss Alert Sat 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 22 * * 6", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 15 mins!');
                    client.log.info('Sent Boss Alert Sat 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("15 22 * * 6", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum has arrived!!');
                    client.log.info('Sent Boss Alert Sat 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("20 21 * * 6", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).bulkDelete(100);
                    client.log.info('Cleaning Boss Alerts for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            // Sun Boss Spawns
            cronjob.schedule("00 10 * * 0", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 1 hour!');
                    client.log.info('Sent Boss Alert Sat 10hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("30 10 * * 0", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
                    client.log.info('Sent Boss Alert Sat 10hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("45 10 * * 0", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 15 mins!');
                    client.log.info('Sent Boss Alert Sat 10hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 11 * * 0", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum has arrived!!');
                    client.log.info('Sent Boss Alert Sat 10hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 13 * * 0", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 1 hour!');
                    client.log.info('Sent Boss Alert Sat 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("30 13 * * 0", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 30 mins!');
                    client.log.info('Sent Boss Alert Sat 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("45 13 * * 0", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 15 mins!');
                    client.log.info('Sent Boss Alert Sat 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 14 * * 0", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver has arrived!!');
                    client.log.info('Sent Boss Alert Sat 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 16 * * 0", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 1 hour!');
                    client.log.info('Sent Boss Alert Sat 10hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("30 16 * * 0", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 30 mins!');
                    client.log.info('Sent Boss Alert Sat 10hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("45 16 * * 0", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum is getting ready to spawn in 15 mins!');
                    client.log.info('Sent Boss Alert Sat 10hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 17 * * 0", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kutum has arrived!!');
                    client.log.info('Sent Boss Alert Sat 10hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("15 19 * * 0", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 1 hour!');
                    client.log.info('Sent Boss Alert Sat 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("45 19 * * 0", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 30 mins!');
                    client.log.info('Sent Boss Alert Sat 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("00 20 * * 0", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver is getting ready to spawn in 15 mins!');
                    client.log.info('Sent Boss Alert Sat 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("15 20 * * 0", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).send('@everyone' + ' Kzarka and Nouver has arrived!!');
                    client.log.info('Sent Boss Alert Sat 16hr for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule("20 20 * * 0", function () {
                if (bossChannel !== "") {
                    client.channels.get(bossChannel).bulkDelete(100);
                    client.log.info('Cleaning Boss Alerts for ' + bossChannel);
                }
            }, {
                scheduled: true,
                timezone: "America/Denver"
            });

            cronjob.schedule('*/10 * * * *', function () {
                if (bossChannel !== "") {
//        client.channels.get(bossChannel).send('test post from timer');
                    client.log.info('Crons are working for ' + bossChannel);
                }
            });
        }

    });

}