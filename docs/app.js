const pballnums = document.querySelectorAll('.pballnums');
const winButton = document.getElementById('winbutton');
const generator = document.querySelector('.generator');

winButton.addEventListener('click', function() {
  for (let i = 0; i < pballnums.length; i++) {
    pballnums[i].innerHTML = Math.ceil(Math.random() * 69);
    pballnums[i].style.fontSize = '2.5em';
  }
});

generator.lastElementChild.style.color = 'white';

$('a.smooth-scroll').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top + 20
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});
