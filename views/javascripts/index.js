var antibot;

function setup() {
    document.getElementById("titulo").innerHTML = `Chat de ${CONFIG.TWITCH_CHANNEL}`;

    var antibot = new BotChecker();
}