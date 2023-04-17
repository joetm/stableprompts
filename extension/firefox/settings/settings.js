document.addEventListener('DOMContentLoaded', async () => {
  const settingsForm = document.getElementById('settings-form');
  // Load saved values from storage
  const savedSettings = await browser.storage.local.get(['APIKEY', 'key1', 'key2']);
  document.getElementById('APIKEY').value = savedSettings.APIKEY || '';
  document.getElementById('key1').value = savedSettings.key1 || '';
  document.getElementById('key2').value = savedSettings.key2 || '';
  document.getElementById('selector').value = savedSettings.selector || '';
  document.getElementById('event').value = savedSettings.event || '';

  settingsForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const APIKEY = document.getElementById('APIKEY').value;
    const key1 = document.getElementById('key1').value;
    const selector = document.getElementById('selector').value;
    const event = document.getElementById('event').value;
    // Save values to storage
    await browser.storage.local.set({ APIKEY, key1, key2, selector, event });
    alert('Settings saved successfully!');
  });
});
