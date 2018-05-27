const modes = ["NONE", "ALL", "OTHER"];
let currentMode = 0;

chrome.browserAction.onClicked.addListener(tab => {
    currentMode = (currentMode + 1) % 3;
    switch (currentMode) {
        case 0:
            muteTabs(false, false);
            chrome.browserAction.setBadgeText({text:""});
            break;
        case 1:
            muteTabs(true, true);
            chrome.browserAction.setBadgeText({text:"ALL"});
            break;
        case 2:
            muteTabs(true, false);
            chrome.browserAction.setBadgeText({text:"OTHR"});
            break;
    }
});

function muteTabs(muteNonSelected, muteSelected) {
    chrome.tabs.getSelected(null, tab => {
        const selectedTabId = tab.id;
        chrome.windows.getAll({populate: true},
            windowList => {
                windowList.forEach(window => {
                    window.tabs.forEach(tab => {
                        if (tab.audible) {
                            chrome.tabs.update(tab.id, {
                                muted: tab.id == selectedTabId ? muteSelected : muteNonSelected
                            });
                        }
                    });
                });
            }
        );
    });
}