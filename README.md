# Quick Mute Chrome extension

# Features

* Click extension icon to mute all tabs
* Mute all tabs except current via icon context menu

# How to install

I have not published this extension into Chrome Web Store, so your will need to install extension locally:

1. Clone extension to your machine - e.g. `git clone https://github.com/Litee/quick-mute-chrome-extension.git`
1. Look at source code `src/background.js`. It is always a good idea to check that code does not do anything suspicious ;)
1. Run `npm install` and `npm run build` in root folder
1. Open chrome://extensions tab in your Chrome browser
1. Activate developer mode (required for next step)
1. Install extension as unpacked. Point to `build` folder.

Ping me if you liked this extension and I may consider publishing it to the wide audience

## Disclaimers

* I've borrow some code from [Mute Tab Shortcuts](https://github.com/danhp/mute-tab-chrome) extension. Thank you, Daniel.
* Icon made by [Freepik](https://www.freepik.com/) from [Flaticon](https://www.flaticon.com/) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/)