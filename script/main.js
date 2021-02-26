'use strict';

document.addEventListener('DOMContentLoaded', function (event) {
  let profileTextWrapper = document.querySelector('.profile-name .letters');
  profileTextWrapper.innerHTML = profileTextWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  anime.timeline({ loop: false })
    .add({
      targets: '.profile-name .letter',
      rotateY: [-90, 0],
      duration: 2000,
      delay: (el, i) => 50 * i
    });
});

document.addEventListener('scroll', function (event) {
  let backToTopElement = document.getElementById('backToTop');
  console.log(document.body.scrollTop);
  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 300) {
    backToTopElement.style.display = 'block';
  } else {
    backToTopElement.style.display = 'none';
  }
});

function scrollToTargetElement(elementId) {
  let element = document.getElementById(elementId);
  window.scrollTo({
    top: element.getBoundingClientRect().top,
    behavior: 'smooth'
  })
}
