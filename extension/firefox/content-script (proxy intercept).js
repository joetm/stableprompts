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

const createInputProxy = (input) => {
  const inputHandler = {
    set: function (target, prop, value) {
      if (prop === 'value') {
        sendDataToAPI(value);
      }
      return Reflect.set(target, prop, value);
    },
  };

  const inputProxy = new Proxy(input, inputHandler);
  input.value = inputProxy.value;
};

const handleMutations = (mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          node.querySelectorAll('input[type="text"], textarea').forEach(createInputProxy);
        }
      });
    }
  }
};

const startObserving = () => {
  const observer = new MutationObserver(handleMutations);
  observer.observe(document.body, { childList: true, subtree: true });

  // Create proxies for existing input elements
  document.querySelectorAll('input[type="text"], textarea').forEach(createInputProxy);
};

document.addEventListener('DOMContentLoaded', startObserving);
