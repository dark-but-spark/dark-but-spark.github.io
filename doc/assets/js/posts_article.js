const post_article = document.querySelector('.post-article');
const img= post_article.querySelectorAll('img');


function img_size(){
img.forEach((image) => {
    image.style.width = post_article.clientHeight*1.5+ 'px';
    image.style.height = post_article.clientHeight + 'px';
});
};
img_size();
window.addEventListener('resize', img_size);