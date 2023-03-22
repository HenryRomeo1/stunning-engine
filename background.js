// Listen for clicks on the extension button
chrome.browserAction.onClicked.addListener(tab => {
  // Send a message to the content script to retrieve the contacts
  chrome.tabs.sendMessage(tab.id, { action: 'retrieveContacts' }, response => {
    // When the response is received, loop through each contact and open their LinkedIn page in a new tab
    response.forEach(contact => {
      const url = `https://www.linkedin.com/sales/people/${contact.hubspotId}`;
      chrome.tabs.create({ url });
    });
  });
});
