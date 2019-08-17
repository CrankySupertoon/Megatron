const fetch = require('node-fetch');
const superagent = require('superagent');
const Discord = require('discord.js');
const cronjob = require('node-cron');

var cron;

module.exports = (client) => {
    client.log.info(`Logged in as ${client.user.tag}!`);
    if (client.config.ownerlogging) {
        for (i = 0; i < client.config.ownerid.length; i++) {
            client.users.get(client.config.ownerid[i]).send(`I am now online.`);
        }
    }
    if (!cron) {
        setInterval(eventTimer, 1000 * 60, client);
    }
}

function eventTimer(client) {
    //console.log('Event Running');
    setRandomActivity(client);
    checkTwitchStreams(client);
    checkMixerStreams(client);
}

function setRandomActivity(client) {
    var acts = client.config.statusList;
    if (acts.length >= 1) {
        client.user.setActivity(acts[Math.floor(Math.random() * acts.length)]);
    }
}

function discordBotlist(client) {
    if (client.config.DBLCOM_BOT_ID !== "" && client.config.DBLCOM_TOKEN !== "") {
        superagent.post(`https://discordbotlist.com/api/bots/${client.config.DBLCOM_BOT_ID}/stats`)
            .set("Authorization", `Bot ${client.config.DBLCOM_TOKEN}`)
            .send({
                shard_id: 0,
                guilds: client.guilds.size,
                users: client.users.size,
                voice_connections: client.voiceConnections.size
            })
            .then(() => client.log.info('discordbotlist.com updated'))
    }
}

function twitterFeeds(client) {
    ////
    // Twitter configuration
    const Twit = require('twit')
    const twitter = new Twit({
        consumer_key: config.twitter['consumer_key'],
        consumer_secret: config.twitter['consumer_secret'],
        access_token: config.twitter['token_key'],
        access_token_secret: config.twitter['token_secret']
    })
    ////
    var twitterHandles = client.twitterDB.indexes;
    for (i = 0; i < chans.length; i++) {
        const twitterHandle = twitterHandles[i];
        const user = client.twitterDB.get(twitterHandle);
        if (!(user.channels.length > 0)) {
            client.twitterDB.delete(twitterHandle);
            return;
        }
        ////
        // Stream configuration
        for (j = 0; j < user.channels.length; j++) {
            let stream = twitter.stream('user', {id: twitterHandle})
            stream.on('tweet', (tweet) => {
                if (tweet.hasOwnProperty('retweeted_status')) return;
                logger.debug(`Received tweet: ${tweet}`)
                client.channels
                    .get(user.channels[j])
                    .send({
                        embed: {
                            author: {
                                name: tweet.user.name,
                                icon_url: tweet.user.profile_image_url_https,
                                url: `https://twitter.com/statuses/${tweet.id_str}`
                            },
                            description: tweet.text
                        }
                    })
            })
        }
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
                    client.channels.get(user.channels[j]).send(`Hey @everyone, ${ch.channel.display_name} is live on twitch!`, {embed});
                }
                client.twitchDB.setProp(chan, 'sent', true);
                return;
            }
        });

    }
}

function checkMixerStreams(client) {
    var chans = client.mixerDB.indexes;
    for (i = 0; i < chans.length; i++) {
        const chan = chans[i];
        const user = client.mixerDB.get(chan);
        if (!(user.channels.length > 0)) {
            client.mixerDB.delete(chan);
            return;
        }
        fetch(`https://mixer.com/api/v1/channels/${chan}`, {
            headers: {'Client-ID': client.config.mixerClientId},
        }).then(res => res.json()).then(json => {
            if (json.online == false) {
                if (user.sent)
                    client.mixerDB.setProp(chan, 'sent', false);
                return;
            } else {
                if (user.sent)
                    return; // post has already been sent, don't sent again
                ch = json;
                Url = `https://mixer.com/${chan}`;
                const embed = new Discord.MessageEmbed()
                    .setAuthor(ch.name, null, Url)
                    .setColor(client.config.embedcolor)
                    .setTitle(`${ch.user.username}\n${Url}`)
                    .setURL(Url)
                    .setThumbnail(ch.user.avatarUrl)
                    .setImage(ch.type.coverUrl)
                    .addField("Streaming", ch.type.name, true)
                    .addField("Viewers", `**${ch.viewersCurrent}**`, true)
                    .addField("Total Views", `**${ch.viewersTotal}**`, true)
                    .addField("Followers", `**${ch.numFollowers}**`, true)
                    .setFooter(`Tohur_Bot`);

                for (j = 0; j < user.channels.length; j++) {
                    client.channels.get(user.channels[j]).send(`Hey @everyone, ${ch.user.username} is live on mixer!`, {embed});
                }
                client.mixerDB.setProp(chan, 'sent', true);
                return;
            }
        });

    }
}
