chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        "title": 'Search company "%s"',
        "contexts": ["selection"],
        "id": "search-company-sponsorship"
    })
})

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    console.log(info.selectionText)
})