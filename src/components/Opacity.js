import React from "react";
import $ from "jquery";

const Opacity = () => {
  /*Scroll to top when a button is clicked*/

  $(document).ready(function () {
    $(".social-buttons__button").click(function (event) {
      // event.preventDefault();
      $("html, body").stop(true, false).animate({ scrollTop: 0 }, 700);
      // return false;
    });
  });

  /* opacity on elements when scrolling up or down */
  $(document).ready(function () {
    $(window).scroll(function () {
      $(".buttons, .upper").css("opacity", 1 - $(window).scrollTop() / 325);
    });
  });

  $(document).ready(function () {
    $(window).scroll(function () {
      $(".carDetailSmallHeading").css(
        "opacity",
        0 + $(window).scrollTop() / 325
      );
    });
  });

  /*Scroll to bottom when a button is clicked*/

  $(function () {
    $(".learn").on("click", function (e) {
      e.preventDefault();
      $("html, body")
        .stop(true, false)
        .animate(
          { scrollTop: $($(this).attr("href")).offset().top },
          500,
          "linear"
        );
    });
  });

  return <></>;
};

export default Opacity;
