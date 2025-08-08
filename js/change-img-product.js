// Thay đổi ảnh chính khi click thumbnail
function changeMainImage(thumbnailImg) {

  const mainImage = document.querySelector('.data-imgMain img');
  
  mainImage.src = thumbnailImg.src;
  
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach(thumb => thumb.classList.remove('active'));
  
  thumbnailImg.parentElement.classList.add('active');
}
