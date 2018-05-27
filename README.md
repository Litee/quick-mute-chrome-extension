# Quick Mute Chrome extension

# Features

* Click extension icon to mute all tabs
* Mute all tabs except current via icon context menu

# How to install

I have not published this extension into Chrome Web Store, so you will need to:

1. Clone extension to your machine
1. Look at `src/background.js`. It is always a good idea to check that code does not do anything suspicious ;)
1. Run `npm install` and `npm run build`
1. Open chrome://extensions tab in browser
1. Activate developer mode (required for next step)
1. Install extension as unpacked. Point to `build` folder.

## Disclaimers

* I've borrow some code from [Mute Tab Shortcuts](https://github.com/danhp/mute-tab-chrome) extension. Thank you, Daniel.
* Icon made by [Freepik](https://www.freepik.com/) from [Flaticon](https://www.flaticon.com/) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/)