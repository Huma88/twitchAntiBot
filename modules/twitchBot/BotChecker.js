var TwitchBot = require("../../TwitchBot");
const fetch = require("node-fetch");
const CONFIG = require("../../bin/CONFIG");
const { TWITCH_OAUTH_TOKEN } = require("../../bin/CONFIG");

class BotChecker {
    constructor() {
        var twitchBot = new TwitchBot(CONFIG.TWITCH_USERNAME, CONFIG.TWITCH_OAUTH_TOKEN, "Huma88");
        this.bots = [];
        this.allowed = ["streamlabs", "Huma88_bot"];
        fetch("https://api.twitchinsights.net/v1/bots/all")
            .then(response => response.json())
            .then(data => this.bots = data.bots);
        twitchBot.tmiClient.connect();
        twitchBot.tmiClient.on('message', (channel, tags, message, self) => {
            var log = {
                channel: channel,
                tags: tags,
                message: message
            };
            // Ignore echoed messages.
            if (self) return;
            if (this.bots.find(bot => bot[0] === tags.username) && !this.allowed.find(bot => bot === tags.username)) {
                twitchBot.tmiClient.deletemessage(channel, tags.id);
                twitchBot.tmiClient.ban(channel, tags.username, `El usuario ${tags.username} se ha detectado como bot. Los bots no son bienvenidos aquí y mucho menos los que crean spam. Lo siento, serás baneado :( Si esto es un error, ponte en contacto con un moderador.`);
            }
        });
        twitchBot.tmiClient.on('join', (channel, username, self) => {
            var log = {
                channel: channel,
                uername: username,
            };
            // Ignore echoed messages.
            if (self) return;
            if (this.bots.find(bot => bot[0] === username) && !this.allowed.find(bot => bot === username)) {
                twitchBot.tmiClient.ban(channel, username, `El usuario ${username} se ha detectado como bot. Los bots no son bienvenidos aquí y mucho menos los que crean spam. Lo siento, serás baneado :( Si esto es un error, ponte en contacto con un moderador.`);
            }
        });
    }
}

module.exports = BotChecker;