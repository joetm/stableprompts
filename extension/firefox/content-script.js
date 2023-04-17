document.addEventListener('DOMContentLoaded', () => {
  const inputBox = document.querySelector('#inputBox');

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

  const handleInputSubmit = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendDataToAPI(inputBox.value);
    }
  };

  if (inputBox) {
    inputBox.addEventListener('keydown', handleInputSubmit);
  }
});
