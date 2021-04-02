# TwitchAntiBot
[![license](https://img.shields.io/badge/license-GPL--3.0-green)](https://github.com/Huma88/twitchAntiBot/blob/main/LICENSE)

Twitch bot which will ban all bots registered in: https://twitchinsights.net/bots To assure you that all your viewwers are actual viewers.

> Without instalations.

> Easy to use.

> No more manual checking.

## How to use

1. **Download the bot**

<pre>
<a href="https://github.com/Huma88/twitchAntiBot/releases/download/v1.0/twitchantibot-win32-x64.rar">releases twitchantibot v1.0</a>
</pre>

2. **Create a new twitch account**
<pre>
<a href="https://www.twitch.tv/">Register twitch</a>
</pre>

3. **Set the new account as moderator**
<pre>
<a href="https://dashboard.twitch.tv/u/<i><b>your channel</b></i>/community/roles">https://dashboard.twitch.tv/u/<i><b>your channel</b></i>/community/roles</a>
</pre>

3. **Generate oauth token with the new account**
<pre>
<a href="https://twitchapps.com/tmi/">Oauth token generator</a>
</pre>

4. **Open bot config file**
<pre>
twitchAntiBot-1.0/views/javascripts/CONFIG.js
</pre>

5. **Fill the fields with your information**
<pre>
var CONFIG = {
    // enviroment
    TWITCH_USERNAME: "<i><b>New account username</i></b>",
    TWITCH_OAUTH_TOKEN: "<i><b>New account oauth token</i></b>",
    TWITCH_CHANNEL: "<i><b>Your twitch channel</i></b>"
}
</pre>
