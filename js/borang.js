$(document).ready(function() {
  setTimeout(function () {
    $('#preloader').addClass('done');
  }, 1000);
  //Toggled menu on mobile screen
  $('#b-menu-toggler').click(function(event) {
    console.log('c;');
    var target=$($(this).data('target'));
    if (target.hasClass('show')) {
      $(this).removeClass('opened');
      target.removeClass('show');
    }
    else {
      $(this).addClass('opened');
      target.addClass('show');
    }
  });

  //login validation
  const loginForm=$('#login-form');

  $('#login-form input').blur(function(event) {
    var value=$(this).val();
    if (value=="") {
      $(this).addClass('error');
      return false;
      event.preventDefault();
    }
    else {
      $(this).removeClass('error');
    }
  });

  var options = {
  strings: ["FINDING PARTICIPANTS", "Helping people","Making money"],
  typeSpeed: 90,
  showCursor:false,  
  backSpeed:50,
  loop:true
  }

  $('#typing-line').text('');
  var typed = new Typed("#typing-line", options);

});
