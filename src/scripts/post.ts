const options = {
  rootMargin: '0px',
  threshold: 0,
};
const observer = new IntersectionObserver((changes) => {
  changes.forEach(async change => {
    const img = change.target as HTMLImageElement;
    const imgUrl = img.getAttribute('data-original');
    if (imgUrl && change.isIntersecting) {
      await loadImage(imgUrl, img);
      img.classList.toggle('img-loading');
      observer.unobserve(img);
    }
  });
}, options);

async function loadImage (url:string, elem:HTMLImageElement) {
  return new Promise((resolve, reject) => {
    elem.onload = () => resolve(elem);
    elem.onerror = reject;
    elem.src = url;
  });
}
const imgList = document.querySelectorAll('.img-loading');
Array.from(imgList).forEach((item) => {
  observer.observe(item);
});
