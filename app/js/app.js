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

});