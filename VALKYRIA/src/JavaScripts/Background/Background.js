let blacklist = [
    "main-frame",
    "minimized",
    "movable",
    "window",
    "header",
    "tab",
    "minimize-btn",
    "content",
    "cnt_minimize_window",
    "ui-draggable",
    "ui-draggable-handle"
]

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        let result = false;
        blacklist.forEach(item => {
            if (details.url.indexOf(item) !== -1)
                result = true;
        });
        return {
            cancel: result
        };
    }, {
        urls: ["https://*.bigpoint.net/*"]
    }, ["blocking"]
);