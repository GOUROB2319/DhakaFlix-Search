chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "searchText",
        title: "Search on Website",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "searchText") {
        const query = encodeURIComponent(info.selectionText);
        const searchUrl = `http://172.16.50.4/search?q=${query}`; // Replace with actual website
        chrome.tabs.create({ url: searchUrl });
    }
});
