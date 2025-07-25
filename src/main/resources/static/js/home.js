$('#film-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 1,
    navText: [
        "<i class='fa-solid fa-hand-point-left'></i>",
        "<i class='fa-solid fa-hand-point-right'></i>"
    ]
});

$('#movie-carousel').owlCarousel({
  loop: true,
  margin: 20,
  center: true,
  items: 3,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 4000,
});


$('#promotion-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  },
  navText: [
    "<i class='fa-solid fa-chevron-left'></i>",
    "<i class='fa-solid fa-chevron-right'></i>"
  ]
});
