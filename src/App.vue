<template>
  <!-- ##### Header Area Start ##### -->
  <div class="header-area fadeInDown" data-wow-delay="0.2s">
    <div class="classy-nav-container breakpoint-off">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a href="#" class="navbar-brand nav-custom-style">
            <img src="./assets/img/core-img/logo.png" alt="logo" style="display: inline" />
            MyDataCoin
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse text-uppercase" id="navbarSupportedContent">
            <Navbar></Navbar>
                <div class="topmenu"  @click="toggleMenu">
                  <!-- <img class="lang_logo" src="./assets/img/lang.png" alt="lang.png"> -->
                  <LanguageSwitcher />
                </div>  
          </div>
        </nav>
      </div>
    </div>
  </div>
  <!-- ##### Header Area End ##### -->

  <main>
    <router-view />
  </main>

  <div class="footer-content-area">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-3 col-md-6">
            <div class="footer-copywrite-info">
              <!-- Copywrite -->
              <div class="copywrite_text fadeInUp" data-wow-delay="0.2s">
                <div class="footer-logo">
                  <a href="#">
                    <img src="./assets/img/core-img/logo2.png" alt="logo" />
                  </a>
                </div>
                <p>
                  {{ $t("footer_mdc_decs") }}
                </p>
              </div>
              <!-- Social Icon -->
              <div class="footer-social-info fadeInUp" data-wow-delay="0.4s">
                <div class="footer-social-info fadeInUp" data-wow-delay="0.4s">
                <a href="https://t.me/+5N_uSvH5Pkc3YTJk"><i class="fa fa-telegram" aria-hidden="true"></i></a>
                <a href="https://twitter.com/MyDataCoin"> <i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="https://github.com/MyDataCoin"><i class="fa fa-github" aria-hidden="true"></i></a>
                <!-- <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a> -->
                <a href="https://www.linkedin.com/company/mydatacoin/?viewAsMember=true"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
              </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-3 col-md-6">
            <div class="contact_info_area d-sm-flex justify-content-between">
              <!-- Content Info -->
              <div
                class="contact_info mt-x text-center fadeInUp"
                data-wow-delay="0.3s" >
                <h5>{{ $t("footer_privacy_tos_title") }}</h5>
                <a>
                  <router-link to="/terms">
                    <p>{{ $t("footer_privacy_tos_TOS") }}</p>
                  </router-link>
                </a>
                <a href="https://gdpr-info.eu/">
                  <p>{{ $t("footer_privacy_tos_GDPR") }}</p>
                </a>
                <a>
                  <router-link to="/privacy">
                    <p>{{ $t("footer_privacy_tos_PP") }}</p>
                  </router-link>
                </a>

                <a href="./menu/Whitepaper.pdf" target="_blank">
                  <p>{{ $t("footer_privacy_tos_WP") }}</p>
                </a>
                <a href="./menu/deck.pdf" target="_blank">
                  <p>{{ $t("footer_privacy_tos_PD") }}</p>
                </a>
              </div>
            </div>
          </div>

          <!-- <div class="col-12 col-lg-2 col-md-6 ">
                        <div class="contact_info_area d-sm-flex justify-content-between">
                            <div class="contact_info mt-s text-center fadeInUp" data-wow-delay="0.2s">
                                <h5>NAVIGATE</h5>
                                <a href=""><p>Advertisers</p></a>
                                <a href=""><p>Developers</p></a>
                                <a href=""><p>Resources</p></a>
                                <a href=""><p>Company</p></a>
                                <a href=""><p>Connect</p></a>
                            </div>
                        </div>
                    </div> -->

          <div class="col-12 col-lg-6 col-md-6">
            <div class="contact_info_area d-sm-flex justify-content-between">
              <!-- Content Info -->
              <div
                class="contact_info mt-s text-center fadeInUp"
                data-wow-delay="0.4s"
              >
                <h5>{{ $t("footer_contactus_title") }}</h5>
                <p>{{ $t("footer_contactus_1") }}</p>
                <p>
                  {{ $t("footer_contactus_3") }}
                </p>
                <p>
                  {{ $t("footer_contactus_4") }}
                </p>
                <br/>
              <div class="row">
                <div class="col-12 col-lg-6 col-md-6">
                  <a href="https://www.producthunt.com/posts/mydatacoin?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-mydatacoin" target="_blank">
                    <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=372164&theme=neutral" alt="MyDataCoin - Your&#0032;data&#0044;&#0032;your&#0032;digital&#0032;asset | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
              </div>
                <div class="col-12 col-lg-6 col-md-6">
                <a href="https://www.f6s.com/mydatacoin?follow=1" target="_blank" title="Follow MyDataCoin on F6S">
                  <img src="./assets/img/F6S.svg" alt="Follow MyDataCoin on F6S" /></a>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.nav-custom-style {
  color: #565656;
  display: inline-block;
  margin-right: 30px;
  font-size: 26px;
  font-weight: 500;
}
</style>

<script>
import Navbar from "./components/Navbar.vue"
import LanguageSwitcher from './components/LanguageSwitcher.vue';
export default {
  components:{
      Navbar,
      LanguageSwitcher
  },
};

(function ($) {
    'use strict';

    var $window = $(window);

    // :: Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // :: Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('.header-area').addClass('sticky');
        } else {
            $('.header-area').removeClass('sticky');
        }
    });


    // :: Carousel Active Code
    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.welcome_slides');

        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: true,
            navText: ["<i class='ti-angle-left'</i>", "<i class='ti-angle-right'</i>"],
            dots: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        })
        welcomeSlider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });
        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });
        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });
        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $(".client_slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 700,
            dots: true
        });

        var dot = $('.client_slides .owl-dot');
        dot.each(function () {
            var index = $(this).index() + 1;
            if (index < 10) {
                $(this).html('0').append(index);
            } else {
                $(this).html(index);
            }
        });
    }

    // :: Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('#videobtn').magnificPopup({
            type: 'iframe'
        });
        $('.gallery_img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade',
            preloader: true
        });
    }

    // :: Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.dream-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.dream-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    // :: Gallery Menu Style Active Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // :: ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: 'Scroll Top'
        });
    }

    // :: onePageNav Active Code
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 1500,
            easing: 'easeOutQuad'
        });
    }

    // :: CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: Wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    // :: Jarallax Active JS
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // :: PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: Accordian Active Code
    (function () {
        var dd = $('dd');
        dd.filter(':nth-child(n+3)').hide();
        $('dl').on('click', 'dt', function () {
            $(this).next().slideDown(500).siblings('dd').slideUp(500);
        })
    })();

    // :: Nav Active Code
    if ($.fn.classyNav) {
        $('#dreamNav').classyNav({
            theme: "dark"
        });
    }

    // :: niceScroll Active Code
    if ($.fn.niceScroll) {
        $(".timelineBody").niceScroll();
    }

    $('.simple_timer').syotimer({
        year: 2020,
        month: 11,
        day: 9,
        hour: 20,
        minute: 30
    })

});
</script>
