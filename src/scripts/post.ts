const options = {
  rootMargin: '0px',
  threshold: 0,
};
const observer = new IntersectionObserver((changes) => {
  changes.forEach(change => {
    const img = change.target;
    const imgUrl = img.getAttribute('data-original');
    if (imgUrl && change.isIntersecting) {
      img.setAttribute('src', imgUrl || '');
      img.classList.toggle('img-loading');
      observer.unobserve(img);
    }
  });
}, options);
const imgList = document.querySelectorAll('.img-loading');
Array.from(imgList).forEach((item) => {
  observer.observe(item);
});
