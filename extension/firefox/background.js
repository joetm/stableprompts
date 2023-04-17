browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.action === 'getSettings') {
    const settings = await browser.storage.local.get(['APIKEY', 'key1', 'key2', 'selector', 'event']);
    sendResponse({ settings });
  }
});
