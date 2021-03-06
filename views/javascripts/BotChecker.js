
class BotChecker {
    constructor() {
        var twitchBot = new TwitchBot(CONFIG.TWITCH_USERNAME, CONFIG.TWITCH_OAUTH_TOKEN, CONFIG.TWITCH_CHANNEL);
        var message_alert = null;
        if (CONFIG.MESSAGE_SOUND.NAME != null && CONFIG.MESSAGE_SOUND.NAME.length > 0) {
            message_alert = new Audio(`../assets/sound/${CONFIG.MESSAGE_SOUND.NAME}`);
            message_alert.volume = CONFIG.MESSAGE_SOUND.VOLUME;
        }
        this.bots = [];
        this.allowed = CONFIG.BOT_EXCEPTIONS;
        fetch("https://api.twitchinsights.net/v1/bots/all")
            .then(response => response.json())
            .then(data => this.bots = data.bots);
        twitchBot.tmiClient.connect().catch(console.error);
        twitchBot.tmiClient.on('message', (channel, tags, message, self) => {
            if (message_alert != null) {
                message_alert.play();
            }
            var log = {
                channel: channel,
                tags: tags,
                message: message
            };

            var line = document.createElement("div");
            line.setAttribute("class", "line")
            document.getElementById("chat").appendChild(line);
            var name = document.createElement("div");
            name.setAttribute("class", "name");
            name.setAttribute("style", `color: ${log.tags.color ? log.tags.color : randomColor()}`)
            line.appendChild(name);
            var message = document.createElement("div");
            message.setAttribute("class", "message");
            line.appendChild(message);
            name.appendChild(document.createTextNode(`${log.tags["display-name"]}: `));
            message.appendChild(document.createTextNode(`${log.message}`));

            var chat = document.getElementById('chat');
            chat.scrollTop = chat.scrollHeight;

            // Ignore echoed messages.
            if (self) return;
            if (this.bots.find(bot => bot[0] === tags.username) && !this.allowed.find(bot => bot === tags.username)) {
                twitchBot.tmiClient.deletemessage(channel, tags.id);
                twitchBot.tmiClient.ban(channel, tags.username, `El usuario ${tags.username} se ha detectado como bot. Los bots no son bienvenidos aqu?? y mucho menos los que crean spam. Lo siento, ser??s baneado :( Si esto es un error, ponte en contacto con un moderador.`);
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
                twitchBot.tmiClient.ban(channel, username, `El usuario ${username} se ha detectado como bot. Los bots no son bienvenidos aqu?? y mucho menos los que crean spam. Lo siento, ser??s baneado :( Si esto es un error, ponte en contacto con un moderador.`);
            }
        });
    }
}

function randomColor() {
    return `rgb(${Math.random() * (256 - 128) + 128}, ${Math.random() * (256 - 128) + 128}, ${Math.random() * (256 - 128) + 128})`;
}