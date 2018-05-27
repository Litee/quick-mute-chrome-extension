import "./images/icon-128.png";
import "./images/icon-16.png";

let stateAllTabs = false;

chrome.browserAction.onClicked.addListener(tab => {
    muteOrUnmuteAllTabs();
});

chrome.contextMenus.create({
    title: "Mute all",
    contexts: ["browser_action"],
    onclick: function () {
        muteOrUnmuteAllTabs();
    }
});

chrome.contextMenus.create({
    title: "Mute all except current",
    contexts: ["browser_action"],
    onclick: function () {
        muteOrUnmuteAllTabsExceptCurrent();
    }
});

function muteOrUnmuteAllTabs() {
    stateAllTabs = !stateAllTabs;
    chrome.browserAction.setBadgeText(
        stateAllTabs ? {
            text: "ALL"
        } : {
            text: ""
        }
    );
    chrome.windows.getAll({
            populate: true
        },
        windowList => {
            windowList.forEach(window => {
                window.tabs.forEach(tab => {
                    if (tab.audible || tab.mutedInfo.muted) {
                        chrome.tabs.update(tab.id, {
                            muted: stateAllTabs
                        });
                    }
                });
            });
        }
    );
}

function muteOrUnmuteAllTabsExceptCurrent() {
    chrome.windows.getAll({
            populate: true
        },
        windowList => {
            windowList.forEach(window => {
                window.tabs.forEach(tab => {
                    if (tab.audible) {
                        chrome.tabs.update(tab.id, {
                            muted: true
                        });
                        chrome.browserAction.setBadgeText({
                            text: "???"
                        });
                    }
                });
            });
        }
    );
    chrome.tabs.getSelected(null, tab => {
        chrome.tabs.update(tab.id, {
            muted: false
        });
    });
}