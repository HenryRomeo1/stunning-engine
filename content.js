// Send a message to the background script to retrieve the Hubspot contacts
chrome.runtime.sendMessage({ action: 'retrieveContacts' }, response => {
  // When the response is received, create a list item for each contact and add it to the list
  const contactsList = document.getElementById('contactsList');
  contactsList.innerHTML = '';
  response.forEach(contact => {
    const li = document.createElement('li');
    li.textContent = contact.name;
    contactsList.appendChild(li);
  });
});

// Listen for clicks on the "Open LinkedIn Profiles" button and send a message to the background script to open the profiles
document.getElementById('openLinkedInBtn').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'openProfiles' });
});
