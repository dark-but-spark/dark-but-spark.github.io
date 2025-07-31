const toTopButton = document.getElementById('to_top');
const pageUpButton = document.getElementById('page_up');
const pageDownButton = document.getElementById('page_down');
document.addEventListener('DOMContentLoaded', function() {

  toTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
 
  pageUpButton.addEventListener('click', function() {
    window.scrollBy({ top: window.scrollY-window.innerHeight, behavior: 'smooth' });
  });
 
  pageDownButton.addEventListener('click', function() {
    window.scrollBy({ top: window.scrollY+window.innerHeight, behavior: 'smooth' });
  });
});

document.addEventListener('scroll', function() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

  if (scrollTop > 0) {
    toTopButton.style.visibility = 'visible';
  } else {
    toTopButton.style.visibility = 'hidden';
  }

  if (scrollTop + windowHeight < documentHeight) {
    pageDownButton.style.visibility= 'visible';
  } else {
    pageDownButton.style.visibility = 'hidden';
  }

  if (scrollTop > windowHeight) {
    pageUpButton.style.visibility = 'visible';
  } else {
    pageUpButton.style.visibility = 'hidden';
  }
});