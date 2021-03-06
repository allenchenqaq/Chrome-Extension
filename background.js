function ImageClick(info, tab){
  console.log("Clicked an image", info, tab);
  chrome.windows.create({
    "url": "https://facebook.com/sharer.php?u=" + info.srcUrl + "&display=popup",
    "type": "popup"
  })
}

function QuoteClick(info, tab){
  console.log("Clicked a quote", info, tab);
  chrome.windows.create({
    "url": "https://facebook.com/sharer.php?u=" + info.pageUrl + "&display=popup&quote=" + info.selectionText,
    "type": "popup"
  })
}

chrome.contextMenus.create({
  "title": "Share Image",
  "contexts": ["image"],
  "onclick": ImageClick
})

chrome.contextMenus.create({
  "title": "Share Quote",
  "contexts": ["selection"],
  "onclick": QuoteClick
})

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  console.log("message", message)
  sendResponse({"text": "Links received"});
})
