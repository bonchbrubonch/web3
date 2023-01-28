$(function () {

  $(".header__btn").on("click", function () {
    $(".header__menu").toggleClass("active");
    $(".header__btn").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(".header__item-child p").on("click", function () {
    $(this).toggleClass('active');
    $(this).next().toggleClass('sub-menu--active');
  });

  $('.slider-one').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    arrows: true,
    dots: true,
    // responsive: [{
    //     breakpoint: 1100,
    //     settings: {
    //       autoplay: false,
    //     }
    //   },
    //   {
    //     breakpoint: 700,
    //     settings: {
    //       arrows: false,
    //     }
    //   }
    // ]
  });

  $(".rateYo").rateYo({
    starWidth: "15px",
    ratedFill: "#E94D6E",
    spacing: "5px",
    rating: 5,
    readOnly: true
  });

});