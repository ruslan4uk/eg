import sayHello from "./lib/sayHello.js";
import "jquery";
import "owl.carousel";

sayHello();

// main tabs
$(document).on("click", "a[data-main-tab-nav]", function(e) {
  e.preventDefault();
  let nTab = $(this).data("main-tab-nav");
  let href = $(this).parent("li");
  let tab = $("[data-main-tab]");

  tab.removeClass("active");
  $(".subnavigation__item").removeClass("active");

  $("[data-main-tab-nav='" + nTab + "']")
    .parent()
    .addClass("active");
  $("[data-main-tab='" + nTab + "']").addClass("active");

  console.log(href);
});

// owl carousel
$(".js--action-slider").owlCarousel({
  loop: false,
  margin: 10,
  margin: 20,
  dots: false,
  responsive: {
    0: {
      items: 1,
      stagePadding: 50
    },
    420: {
      items: 2,
      stagePadding: 0,
      dots: true
    },
    768: {
      items: 3,
      stagePadding: 0,
      dots: true
    },
    992: {
      items: 4,
      stagePadding: 0,
      dots: true
    }
  }
});
