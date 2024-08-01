export function orientation() {
  window.addEventListener('orientationchange', () => {
    console.log('Orientation changed!');
    console.log('Current orientation: ' + screen.orientation.type);
  });
}

