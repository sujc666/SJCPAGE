// __________ PERCENTAGES __________

let percentages = document.getElementsByClassName("percentage");
let bars = document.getElementsByClassName("bar");

for (let i = 0; i < percentages.length; i++) {
  bars[i].style.width = percentages[i].innerText;
}

// __________ LOADER __________

$(window).on("load", () => {
  $(".loader").hide();
});

// __________ NAVIGATION __________

// Quick Navigation

$(".nav-link").on("click", function (e) {
  var anchor = $(this);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(anchor.attr("href")).offset().top - 50,
      },
      500
    );
  e.preventDefault();
});

// Quick Navigation Arrow

$("#arrow").on("click", (e) => {
  $("html, body").stop().animate({ scrollTop: 0 }, 500);
  e.preventDefault();
});

// Navbar Hide

$(window).scroll(() => {
  if ($(this).scrollTop() > 100) {
    $("header").attr("id", "navbar-sticky");
    $(".arrow").attr("id", "arrow-show");
  } else {
    $("header").attr("id", "");
    $(".arrow").attr("id", "arrow-hide");
  }
});

// Toggle Navbar

$("#menu-btn").on("click", () => {
  $(".navlist").toggleClass("navbar-hide");
});

// __________ WOW __________

new WOW().init();

// __________ ISOTOPE __________

// Init Isotope
var $container = $(".card-container");
$container.isotope({
  itemSelector: ".card",
  transitionDuration: "0.8s",
});

// Filter
$(".filter-list li").on("click", function (e) {
  $(".filter-list li.active").removeClass("active");
  $(this).addClass("active");
  let selector = $(this).attr("data-filter");
  $container.isotope({
    filter: selector,
  });
  return false;
});

// __________ DARKMODE __________

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}