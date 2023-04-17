(function () {
  function handleInputSubmit(event) {
    if (event.key === 'Enter' || event.type === 'click') {
      event.preventDefault();
      const inputElement = event.target.closest('input[type="text"], textarea');
      if (inputElement) {
        const inputValue = inputElement.value;
        window.postMessage({ type: 'INPUT_SUBMITTED', data: inputValue }, '*');
      }
    }
  }

  document.addEventListener('keydown', handleInputSubmit);
  document.addEventListener('click', handleInputSubmit);
})();
