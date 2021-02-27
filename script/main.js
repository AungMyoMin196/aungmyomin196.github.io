'use strict';

$(function() {
  console.log( "ready!" );
  AOS.init();
});

function scrollToTargetElement(elementId) {
  $('html, body').animate({
    scrollTop: $(`#${elementId}`).offset().top
  }, 500);
}
