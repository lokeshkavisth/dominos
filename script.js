"use strict";

// function for to open the sidebar
function openMenu() {
  $(".sidebar__container").addClass("active");
  $(document.body).css("maxHeight", "100vh");
}

// function for to close the sidebar
function closeMenu() {
  $(".sidebar__container").removeClass("active");
}
