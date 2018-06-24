var SideNav = $(".SideNav");
var active = "active";


$(document).ready(function () {
    // initial
    $('nav').html(el_header);
    $('.SideNav').html(el_nav);
    $('footer').html(el_footer);
    $('body').after(el_popupBox);
    
    baseCtrl();

    // 真人banner滑動
    var bannerSwiper = new Swiper ('.live_banner', {
        loop: true,
        pagination: {
            el: '.live_banner_p'
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },    
       
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });
    
});


    




