import "slick-carousel";

export class Plugins {
  init() {
    this.WhyourSlider();
  }

  WhyourSlider() {
    $(document).ready(function () {
      $(".why-our-slider").slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      });
    });
  }
}
