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

const handleMessageEvent = (event) => {
  if (event.data.type === 'INPUT_SUBMITTED') {
    sendDataToAPI(event.data.data);
  }
};

window.addEventListener('message', handleMessageEvent);
