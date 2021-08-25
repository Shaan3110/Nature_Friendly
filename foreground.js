chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        amount: 0
    });
});