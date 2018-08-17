//API request to worldbank for world population, will retrieve the most up to date data
var request = new XMLHttpRequest();
//GET
request.open('GET', `https://api.worldbank.org/v2/countries/wld/indicators/SP.POP.TOTL?format=json`, true);
request.onload = function () {
  // Begin accessing JSON data
  var data = JSON.parse(this.response);
  // Check for errors
  if (request.status >= 200 && request.status < 400) {
    //Grab the population
    population = data[1][0].value;
  } else {
    //Show error if console.error
    console.error(request.message);
  }
}
request.send();

let population;
function printPopulation(population) {
  const message = `${population/68}`;
  return message;
}

document.addEventListener("DOMContentLoaded", function(event) {

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

  //Number counter aimation when in view
  $('#numberCounter').one('inview', function(event, isInView) {
    if (isInView) {

      $({
        someValue: 0
      }).animate({
        someValue: printPopulation(population)
      }, {
        duration: 2500,
        easing: 'swing', // can be anything
        step: function() { // called on every step
          // Update the element's text with rounded-up value:
          $('.number').text(commaSeparateNumber(Math.round(this.someValue)));
        },
        complete: function() {
          $('.number').text(commaSeparateNumber(Math.round(this.someValue)));
        }
      });

      function commaSeparateNumber(val) {
        while (/(\d+)(\d{3})/.test(val.toString())) {
          val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
        return val;
      }
    }
  });

  //bounce powerballs in when in view
  $('.generator').on('inview', function(event, isInView) {
    if (isInView) {

      for (let i = 0; i < ('.pball').length; i++) {
        // $('.pball').addClass('inline-block');
        $('.pball').addClass('inline-block animated bounceInLeft delay-2s')
        $('.win-button-animation').addClass('inline-block animated zoomInUp delay-3s')

      }
    }
  });
});
