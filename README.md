# Fujiama - sushi shop

![Preview](./preview.jpg)

[DEMO](https://t.me/t123123mk12m3k213_bot)

A simple site designed for mobile devices. And used as a web view for a telegram bot.

You can use it as a template for your bot.

# Develop

First use `yarn install` for installing dependencies.\
Then for start hot reload session use `yarn start`.\
For build use `yarn build`.\
If you want play with component use `yarn storybook`.

> [!NOTE]
> The application does not use a backend, all products discriptions are located statically in the file `src/stories/catalog/data.tsx` and product images in folder `src/stories/catalog/assets`.

# Installation

1. First, host your site. For testing purposes, I use [netlify](https://www.netlify.com/).
2. Create telegram bot.\
   This is done in a special bot - [botfather](https://t.me/BotFather).\
   Open botfather, input command `/newbot` end follow instruction.
3. Now, when we have new bot, let's set `web view`.\
   Click `/mybots` and select your bot.
   Now click `Bot Settings`.
   And next click `Menu button`.
   So, now just input title and url.
4. Congratulations, you have added a webview to your bot. 🎉
