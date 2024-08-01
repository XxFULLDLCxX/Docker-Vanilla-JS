export function render(html, targetSelector) {
  const targetElement = document.querySelector(targetSelector);
  if (!targetElement) {
    console.error(`Element with Selector ${targetSelector} not found.`);
    return;
  }

  fetch(html)
    .then((res) => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.text();
    })
    .then((data) => {
      console.log(data);
      // Safeguard against script injection
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = data;
      const scripts = tempDiv.querySelectorAll('script');
      scripts.forEach((script) => script.remove());
      targetElement.innerHTML = tempDiv.innerHTML;
    })
    .catch((error) => {
      console.log('Error loading content:', error);
      targetElement.innerHTML = 'Sorry, the content could not be loaded.';
    });
}
