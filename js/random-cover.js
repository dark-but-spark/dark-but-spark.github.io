// Client-side random cover picker
(function() {
  'use strict';

  // Get all cover images from the data attribute
  const coverElements = document.querySelectorAll('[data-random-cover]');

  if (coverElements.length === 0) return;

  // Get the covers list from the first element
  const coversData = coverElements[0].getAttribute('data-covers-list');
  if (!coversData) return;

  const covers = JSON.parse(coversData);
  if (!covers || covers.length === 0) return;

  // Randomly assign covers to each element
  coverElements.forEach(function(element) {
    const randomIndex = Math.floor(Math.random() * covers.length);
    const randomCover = covers[randomIndex];

    // Update the src or data-src attribute
    if (element.hasAttribute('data-src')) {
      element.setAttribute('data-src', randomCover);
    } else {
      element.src = randomCover;
    }
  });
})();
