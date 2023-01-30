$(function () {

  /*start header========*/
  $(".header__btn").on("click", function () {
    $(".header__menu").toggleClass("active");
    $(".header__btn").toggleClass("active");
    $(".header__contact").toggleClass("hide");
    $("body").toggleClass("lock");
  });

  $(".header__item-child p").on("click", function () {
    $(this).toggleClass('active');
    $(this).next().toggleClass('sub-menu--active');
  });
  /*end header========*/

  $(".projects__btn").on("click", function () {
    $(".projects__btn").removeClass("active");
    $(this).addClass("active");
  });

  $(".form__choice").on("click", function () {
    $(".form__choice").removeClass("active");
    $(this).addClass("active");
  });

  $('.slider-one').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    arrows: true,
    dots: true,
    responsive: [{
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });

  /*start raiting========*/
  $(".rateYo").rateYo({
    starWidth: "15px",
    ratedFill: "#E94D6E",
    spacing: "5px",
    rating: 5,
    readOnly: true
  });
  /*end raiting========*/

  if ($(window).width() < 900) {
    $('.news__list').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      responsive: [{
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        }
      }]
    });
  }

});