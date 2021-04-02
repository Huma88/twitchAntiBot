# TwitchAntiBot
[![license](https://img.shields.io/badge/license-GPL--3.0-green)](https://github.com/Huma88/twitchAntiBot/blob/main/LICENSE)

Twitch bot which will ban all bots registered in: https://twitchinsights.net/bots To assure you that all your viewwers are actual viewers.

> Without instalations.

> Easy to use.

> No more manual checking.

## How to use

1. **Download the bot**

<pre>
<a href="https://github.com/Huma88/twitchAntiBot/releases/download/v1.0/twitchantibot-win32-x64.zip">releases twitchantibot v1.0</a>
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
twitchAntiBot-1.0/resources/app/views/javascripts/CONFIG.js
</pre>

5. **Fill the fields with your information**

Maybe you are already using a useful and harmless bot as streamlabs or nightbot. It could be detected as a bot and banned for that reason.
To avoid that, you will need to add it username in the following file. By default, there is my own bot and streamlabs as exceptions. Add as
many exceptions as you want to that list separated by a comma and the username with double quotes. All fields but the oauth token in lower case.
<pre>
var CONFIG = {
    // enviroment
    TWITCH_USERNAME: "<i><b>New account username</i></b>",
    TWITCH_OAUTH_TOKEN: "<i><b>New account oauth token</i></b>",
    TWITCH_CHANNEL: "<i><b>Your twitch channel</i></b>",
    BOTS_EXCEPTIONS: ["<i><b>New account username</i></b>","<i><b>streamlabs</i></b>","<i><b>nightbot</i></b>"]
}
</pre>

6. **Run twitchantibot.exe**
<pre>
    twitchAntiBot-1.0/twitchantibot.exe
</pre>

## What is happening and what are you watching
> Chat log: all the messages of your chat even after deletion.

> Now your new account is moderating the chat and if it detects a bot, it will ban it automatically.

> To disconnect the bot, just close the aplication.

## What can you modify and customize
Everything! The code is completly open and not even minified, so directly from the program folder you can go to twitchAntiBot-1.0/resources/app/views and modify whatever you want. Notice that you will need to know about html, js and css for that.
