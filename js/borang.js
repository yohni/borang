$(document).ready(function() {

  //times icon when menu toggled
  $('.navbar-collapse').on('show.bs.collapse', function () {
    $('.navbar-toggler-icon').addClass('toggler-close');
  })

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
});
