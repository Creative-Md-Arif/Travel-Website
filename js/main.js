


/*   slider start */

$('.slider_box').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<i class="fa-solid fa-chevron-left prevarr"></i>',
  nextArrow:'<i class="fa-solid fa-chevron-right nextarr"></i>',
  dots:true
});



/*   slider ends */


/*  SLIDER_2 JS START */


$('.slider_box_2').slick({
  slidesToShow:3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<i class="fa-solid fa-chevron-left prevarr"></i>',
  nextArrow:'<i class="fa-solid fa-chevron-right nextarr"></i>',
  dots:true
});



/*  SLIDER_2 JS ENDS */

/*  SLIDER_3 JS START */


$('.slider_box_3').slick({
  slidesToShow:1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<i class="fa-solid fa-chevron-left prevarr"></i>',
  nextArrow:'<i class="fa-solid fa-chevron-right nextarr"></i>',
  dots:true
});

/*  SLIDER_3 JS ENDS */



/*   dis counter up start */

$(".dis_counter_up").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          now = Number(Math.ceil(now)).toLocaleString('en');
                                $(this).text(now);
        },
      }
    );
});



var mixer = mixitup('.container_box');


/*   dis counter up ends */

