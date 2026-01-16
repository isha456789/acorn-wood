export class Header{

    init() {
        this.BurgerMenu();
    }

    BurgerMenu(){
          $(document).ready(function () {
            if ($(window).width() < 992) {
 
                // Menu open
                $('.menu-icon').on('click', function (e) {
                    e.preventDefault();
                    $('.burger-menu').addClass('active');
                    $('.close-icon').removeClass('d-none').addClass('d-inline-flex');
                    $('.nav').removeClass('d-none').addClass('d-inline-block');
                    $('.header').addClass('menu-open');
                    $('body').addClass('overflow-hidden');
                    $('html').addClass('overflow-hidden');
                });
                
                // Menu close
                $('.close-icon').on('click', function (e) {
                    e.preventDefault();
                    $('.burger-menu').removeClass('active');
                    $('.close-icon').removeClass('d-inline-flex').addClass('d-none');
                    $('.nav').removeClass('d-inline-flex').addClass('d-none');
                    $('.header').removeClass('menu-open');
                    $('body').removeClass('overflow-hidden');
                    $('html').removeClass('overflow-hidden');
                });
 
            } else {
                $('.close-icon').addClass('d-none');
                $('.nav').removeClass('d-none');
                $('.header').removeClass('menu-open');
            }
        })
    }
}