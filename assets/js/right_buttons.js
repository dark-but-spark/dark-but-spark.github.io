document.addEventListener('DOMContentLoaded', function() {
  const toTopButton = document.getElementById('to_top');
  const pageUpButton = document.getElementById('page_up');
  const pageDownButton = document.getElementById('page_down');
 
  toTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
 
  pageUpButton.addEventListener('click', function() {
    window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
  });
 
  pageDownButton.addEventListener('click', function() {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  });
});