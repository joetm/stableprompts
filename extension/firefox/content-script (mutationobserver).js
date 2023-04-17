const sendDataToAPI = async (data) => {
  const API_URL = 'https://mydomain.com/api/endpoint';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: data }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    console.log('Data successfully sent to the API');
  } catch (error) {
    console.error(`Error sending data to API: ${error.message}`);
  }
};

const handleClickOrEnterKey = (event) => {
  if (event.target.matches('input[type="text"], textarea')) {
    if (event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter')) {
      event.preventDefault();
      sendDataToAPI(event.target.value);
    }
  }
};

const handleMutations = (mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          node.querySelectorAll('input[type="text"], textarea, button').forEach((element) => {
            element.addEventListener('keydown', handleClickOrEnterKey);
            element.addEventListener('click', handleClickOrEnterKey);
          });
        }
      });
    }
  }
};

const startObserving = () => {
  const observer = new MutationObserver(handleMutations);
  observer.observe(document.body, { childList: true, subtree: true });

  // Add event listeners for existing elements
  document.querySelectorAll('input[type="text"], textarea, button').forEach((element) => {
    element.addEventListener('keydown', handleClickOrEnterKey);
    element.addEventListener('click', handleClickOrEnterKey);
  });
};

document.addEventListener('DOMContentLoaded', startObserving);
