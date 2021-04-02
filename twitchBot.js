const tmi = require('tmi.js');

class TwitchBot {
    constructor(username, token, channel) {
        this.tmiClient = new tmi.Client({
            options: { debug: true },
            connection: {
                secure: true,
                reconnect: true
            },
            identity: {
                username: username,
                password: token
            },
            channels: [channel]
        });
    }
}

module.exports = TwitchBot;