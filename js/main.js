$(window).on("load", function() {
  $(".load-wrapper").fadeOut("slow");
});
$(document).ready(() => {
  $(".navbar-toggler").click(() => {
    $(".navbar-toggler").toggleClass("menu-open");
    $(".navbar-nav").toggleClass("show-menu");
    $("#main").toggleClass("transform-main");
    $(".footer").toggleClass("transform-main");
  });
  $("#main, .footer").click(() => {
    if ($(".navbar-toggler").hasClass("menu-open")) {
      $(".navbar-toggler").removeClass("menu-open");
      $(".navbar-nav").removeClass("show-menu");
      $(".footer").removeClass("transform-main");
      $("#main").removeClass("transform-main");
    }
  });

  let prevScrollpos = window.pageYOffset;
  if ($(window).width() < 768) {
    $(window).scroll(() => {
      let currentScrollPos = window.pageYOffset;
      let value = $(window).scrollTop();
      if (prevScrollpos < currentScrollPos && value > 400) {
        $(".logo").css("max-width", "50px");
        $(".navbar").css("transform", "translateY(-100%)");
        $(".navbar").css("background", "#101d2c");
      } else if (value === 0) {
        $(".logo").css("max-width", "120px");
        $(".navbar").css({ transform: "translateY(0)", background: "none" });
      } else {
        $(".navbar").css("transform", "translateY(0)");
        $(".navbar-nav").removeClass("show-menu");
        $(".navbar-toggler").removeClass("menu-open");
        $(".footer").removeClass("transform-main");
        $("#main").removeClass("transform-main");
      }
      prevScrollpos = currentScrollPos;
    });
  }
  /* Scroll to */
  $("a[href*='#']:not([href='#])").click(e => {
    const $this = $(e.currentTarget);
    let target = $this.attr("href");
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top
        },
        1200,
        "swing"
      );
    event.preventDefault();
  });
  //Back Top
  $(window).scroll(() => {
    if ($(window).scrollTop() > 400) {
      $(".backtop").fadeIn(200);
    } else {
      $(".backtop").fadeOut(200);
    }
  });
  $(".backtop").click(() => {
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: 0
        },
        1200,
        "swing"
      );
    event.preventDefault();
  });

  /*Animation*/
  AOS.init();
});
