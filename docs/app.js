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
