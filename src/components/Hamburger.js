import React from "react";
import $ from "jquery";

$(document).ready(function () {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    $(this).toggleClass("open");
  });
});

const Hamburger = () => {
  return (
    <div id="nav-icon3" style={{ zIndex: "1500" }}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
