import "slick-carousel";

export class Plugins {
  init() {
    this.WhyourSlider();
    this.TestimonialSlider();
  }

  WhyourSlider() {
    $(document).ready(function () {
      $(".why-our-slider").slick({
        arrows: true,
        dots: false,
        infinite: false,
        autoplay: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        prevArrow: $(".why-our-section .prev-arrow"),
        nextArrow: $(".why-our-section .next-arrow"),
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    });
  }

  TestimonialSlider() {
    $(document).ready(function () {
      $(".testimonial-slider").slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    });
  }
}
