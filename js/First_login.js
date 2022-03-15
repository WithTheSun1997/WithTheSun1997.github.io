$('#login-button').click(function () {
    $('#login-button').fadeOut("slow", function () {
      $(".body-form").fadeIn();
      TweenMax.from(".body-form", .4, {
        scale: 0,
        ease: Sine.easeInOut
      });
      TweenMax.to(".body-form", .4, {
        scale: 1,
        ease: Sine.easeInOut
      });
    });
  });
  
  $("#close-btn").click(function () {
    TweenMax.from(".body-form", .4, {
      scale: 1,
      ease: Sine.easeInOut
    });
    TweenMax.to(".body-form", .4, {
      left: "0px",
      scale: 0,
      ease: Sine.easeInOut
    });
    $(".body-form, #forgotten-container").fadeOut(800, function () {
      $("#login-button").fadeIn(800);
    });
  });
  
  /* Forgotten Password */
  $('#forgotten').click(function () {
    $(".body-form").fadeOut(function () {
      $("#forgotten-container").fadeIn();
    });
  });