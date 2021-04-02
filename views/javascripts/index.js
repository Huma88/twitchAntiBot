var antibot;

function setup() {
    document.getElementById("titulo").innerHTML = CONFIG.TWITCH_CHANNEL;

    var antibot = new BotChecker();
}