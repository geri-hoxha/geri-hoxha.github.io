$(document).ready(function() {
  $(".js-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;"
    }
  );

  $(".js-plan-scroll").click(function() {
    $("html,body").animate({ scrollTop: $(".js-plan").offset().top }, 1000);
  });
  $(".js-features-scroll").click(function() {
    $("html,body").animate({ scrollTop: $(".js-features").offset().top }, 1000);
  });

  //KOD I KOPJUAR

  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");

        if (target.length) {
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr("tabindex", "-1");
                $target.focus();
              }
            }
          );
        }
      }
    });

  //animations
  $(".js-wp-1").waypoint(
    function(direction) {
      $(".js-wp-1").addClass("animated fadeIn");
    },
    {
      offset: "70%"
    }
  );
  $(".js-wp-2").waypoint(
    function(direction) {
      $(".js-wp-2").addClass("animated fadeIn");
    },
    {
      offset: "70%"
    }
  );
  $(".js-wp-3").waypoint(
    function(direction) {
      $(".js-wp-3").addClass("animated fadeInUp");
    },
    {
      offset: "70%"
    }
  );
  $(".js-wp-4").waypoint(
    function(direction) {
      $(".js-wp-4").addClass("animated pulse");
    },
    {
      offset: "70%"
    }
  );

  /*mobile icon*/
  $(".js-mobile-icon").click(function() {
    var nav = $(".main-nav");
    var icon = $(".js-mobile-icon i");
    nav.slideToggle(200);
    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });
});
