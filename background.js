chrome.webNavigation.onHistoryStateUpdated.addListener(
  (tab) => {

    let url = new URL(tab.url)
    console.log(url.pathname)

    if (url.pathname == '/') {

      chrome.scripting.executeScript(
        {
          target: {tabId: tab.tabId},
          files: ["scripts/home.js"]
        }
      )

    } else if (url.pathname == '/watch') {

      chrome.scripting.executeScript(
        {
          target: {tabId: tab.tabId},
          files: ["scripts/watch.js"]
        }
      )

    } else if (url.pathname.substring(0, 7) == '/shorts') {

      chrome.scripting.executeScript(
        {
          target: {tabId: tab.tabId},
          files: ["scripts/shorts.js"]
        }
      )

    }
  },

  {
    url: [
      {urlPrefix: 'https://www.youtube.com/'}
    ]
  }
)

