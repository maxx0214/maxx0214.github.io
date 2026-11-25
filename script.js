// Keep existing project bookmarks usable after moving projects off the home page.
const legacyProjectLinks = {
  '#turini': 'projects.html#turini',
  '#penalty': 'projects.html#penalty',
  '#sleep': 'projects.html#mesa',
  '#work': 'projects.html',
  '#reading': 'projects.html#reading'
};

if (document.body.dataset.page === 'profile') {
  const destination = legacyProjectLinks[window.location.hash];
  if (destination) window.location.replace(destination);
}

// Load each embedded player when its disclosure is opened, and stop it on close.
document.querySelectorAll('.video-details').forEach(details => {
  const player = details.querySelector('iframe');
  details.addEventListener('toggle', () => {
    if (details.open) {
      player.src = player.dataset.videoSrc;
    } else {
      player.removeAttribute('src');
    }
  });
});
