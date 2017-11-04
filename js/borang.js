$(document).ready(function() {
  var offset=300,
      scroll_top_duration=1000,
      toTop=$('.back-top').first();

  $(window).scroll(function() {
    if ($(this).scrollTop()>offset) {
      if (!toTop.hasClass('visible')) {
        toTop.addClass('visible');
      }
    }
    else {
      toTop.removeClass('visible');
    }
  });
  $('a[href="#"]').click(function(event) {
    return false;
  });
  toTop.click(function(event) {
    $('html, body').animate({
      scrollTop: 0});
    return false;
  });

  setTimeout(function () {
    $('#preloader').addClass('done');
  }, 1000);
  //Toggled menu on mobile screen
  $('#b-menu-toggler').click(function(event) {
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

  var options = {
  strings: ["FINDING PARTICIPANTS", "Helping people","Making money"],
  typeSpeed: 90,
  showCursor:false,
  backSpeed:50,
  loop:true
  }

  $('#typing-line').text('');
  var typed = new Typed("#typing-line", options);

  addAnimationData('.b-anim','fadeInUp','0');

  function addAnimationData(elem, elemData, elemTimeout) {
    $(elem).addClass("revealOnScroll").attr("data-animation",elemData).attr("data-timeout",elemTimeout);
  }

    var $window           = $(window),
        win_height_padded = $window.height() * 1.1,
        isTouch           = Modernizr.touch;

    if (isTouch) { $('.revealOnScroll').addClass('animated'); }

    $window.on('scroll', revealOnScroll);

    function revealOnScroll() {
      var scrolled = $window.scrollTop(),
          win_height_padded = $window.height()*1.25;

      // Showed...
      $(".revealOnScroll:not(.animated)").each(function () {
        var $this     = $(this),
            offsetTop = $this.offset().top;
        if (scrolled + win_height_padded > offsetTop) {
          if ($this.data('timeout')) {
            window.setTimeout(function(){
              $this.addClass('animated ' + $this.data('animation'));
            }, parseInt($this.data('timeout'),10));
          } else {
            $this.addClass('animated ' + $this.data('animation'));
          }
        }
      });
      // Hidden...
     $(".revealOnScroll.animated").each(function (index) {
        var $this     = $(this),
            offsetTop = $this.offset().top;
        if (scrolled + win_height_padded < offsetTop) {
          $(this).removeClass('animated fadeInUp flipInX lightSpeedIn ')
        }
      });
    }

    revealOnScroll();
});
