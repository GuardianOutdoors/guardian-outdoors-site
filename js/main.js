/* Guardian Outdoors v5 - main.js */
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  var toggle = document.querySelector('.menu-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function() {
      mobileNav.classList.toggle('open');
    });
  }

  // Year update
  document.querySelectorAll('[data-year]').forEach(function(el) {
    el.textContent = new Date().getFullYear();
  });

  // Product gallery thumbnail switching
  var thumbs = document.querySelectorAll('.product-gallery__thumb');
  var mainImg = document.getElementById('gallery-main-img');
  if (thumbs.length && mainImg) {
    thumbs.forEach(function(thumb) {
      thumb.addEventListener('click', function() {
        thumbs.forEach(function(t) { t.classList.remove('active'); });
        thumb.classList.add('active');
        mainImg.src = thumb.dataset.image;
      });
    });
  }
});
