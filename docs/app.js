const apiJSON = {
   "date": "2018-08-14",
   "id": "United%20States"
}

let populationToday;

var request = new XMLHttpRequest();

request.open('GET', `http://api.population.io:80/1.0/population/World/${apiJSON.date}/`, true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    populationToday = printPopulation(data);
  } else {
    console.log('error');
  }
}

request.send();

function printPopulation(population) {
  let totalPop = population.total_population.population;
   const message = `${totalPop}`;
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
        someValue: populationToday
      }).animate({
        // someValue: printPopulation(data)
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
    } else {

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
    } else {

    }
  });




});
