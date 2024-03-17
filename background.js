chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: 'Search company "%s"',
    contexts: ["selection"],
    id: "search-company-sponsorship",
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  console.log(tab);
  console.log(info.selectionText);
  const url = "https://suica.dev/api/sponsorship/" + info.selectionText;

  fetch(url, {
    mode: "cors",
  })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
