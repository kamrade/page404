console.log('#app.js');
$(document).ready(function () {

  function second_passed() {
    $('.clock').removeClass('is-off');
  }
  // setTimeout(second_passed, 2000)

  $('.switcher').on('click', function(e) {
    e.preventDefault();
    $('.screen').toggleClass('glitch');
  });



    $('.time').html("404");
    $('.time').attr('data-time', "404");

});
