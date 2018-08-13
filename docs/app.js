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




$('#custom-bikes .row').one('inview', function(){
    console.log('inview' + $(this).data('class'));
    $$('#numberCounter').css('background', 'orange');
})

$('.body #contact').one('inview', function(){
    console.log('inview' + $(this).data('class'));
    $('#numberCounter').style.backgroundColor = "pink";
})




$('#numberCounter').one('inview', function(event, isInView) {
  if (isInView) {

      $('#numberCounter').css('background', 'orange');
      } else {
        $('#numberCounter').style.backgroundColor = "pink";
      }
    });


    // Animate the element's value from x to y:
      $({someValue: 0}).animate({someValue: 450000}, {
          duration: 2500,
          easing:'swing', // can be anything
          step: function() { // called on every step
              // Update the element's text with rounded-up value:
              $('.number').text(commaSeparateNumber(Math.round(this.someValue)));
          },
          complete:function(){
              $('.number').text(commaSeparateNumber(Math.round(this.someValue)));
          }
      });

     function commaSeparateNumber(val){
        while (/(\d+)(\d{3})/.test(val.toString())){
          val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
        return val;
      }
