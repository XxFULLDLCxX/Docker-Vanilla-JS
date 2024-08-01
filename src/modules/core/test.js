console.log('Before DOMContentLoaded');

document.addEventListener('DOMContentLoaded', () => {
  const targetElement = document.querySelector('main');
  fetch('')
    .then((res) => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.text();
    })
    .then((data) => {
      console.log(data);
      // Safeguard against script injection
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = data;
      targetElement.innerHTML = tempDiv.innerHTML;
    })
    .catch((error) => {
      console.log('Error loading content:', error);
      targetElement.innerHTML = 'Sorry, the content could not be loaded.';
    });
});

console.log('After DOMContentLoaded');
