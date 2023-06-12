jQuery(document).ready(function ($) {

  /*sticky header*/
  $(".top-line").sticky({
    topSpacing:0
  });

  /*select*/
  $('.select-wrap select').niceSelect();

  /*select*/
  $(document).on('click', '.nice-select-1', function (e){
    $(this).toggleClass('open')
  })

  $(document).on('click', '.nice-select-1 .list .option', function (e){
    let text = $(this).text();
    $(this).closest('ul').children('li').removeClass('selected')
    $(this).addClass('selected').closest('.nice-select-1').children('.current').html(text);
  })

  $(document).on('click', '.no-select', function (e){
    e.preventDefault();
    let $this = $(this),
      text = $(this).attr('data-name');

    setTimeout(function() {
      $this.parent('li').removeClass('selected');
      $this.closest('.nice-select-1').children('.current').html(text);
    }, 100);

  });

  /*form label*/
  $('.input-wrap input, .input-wrap textarea').change(function(){
    myInput = $(this);
    tmpval = $(this).val();
    if(tmpval == '') {
      $(myInput).siblings('label').removeClass('is-active');
    } else {
      $(myInput).siblings('label').addClass('is-active');
    }
  });
  $('.input-wrap input, .input-wrap textarea').focus(function (e) {
    $(this).siblings('label').addClass('is-focus')
  });
  $('.input-wrap input, .input-wrap textarea').blur(function (e) {
    $(this).siblings('label').removeClass('is-focus')
  });

  $(document).on('click', '.nice-select .list', function (e){
    $(this).closest('.select-wrap').addClass('is-select')
  })

  /*slider*/
  var swiperAuto = new Swiper(".slider-auto", {
    slidesPerView: "auto",
    spaceBetween: 50,
    breakpoints: {
      320: {
        spaceBetween: 10,
      },
      768: {
        spaceBetween: 30,
      },
      1024: {
        spaceBetween: 50,
      },
    }
  });

  /*slider*/
  var swiperReviews = new Swiper(".slider-reviews", {
    slidesPerView: "auto",
    spaceBetween: 50,
    breakpoints: {
      320: {
        spaceBetween: 10,
      },
      768: {
        spaceBetween: 30,
      },
      1024: {
        spaceBetween: 50,
      },
    }
  });

  /*cutt text*/

  if(window.innerWidth > 991){
    $('.reviews .swiper-slide p').Cuttr({
      truncate: 'words',
      length: 52,
    });
    $('.about-services .item-1 p').Cuttr({
      truncate: 'words',
      length: 43,
    });
    $('.about-services .item-2 p').Cuttr({
      truncate: 'words',
      length: 18,
    });
  }else if(window.innerWidth > 300){
    $('.reviews .swiper-slide p').Cuttr({
      truncate: 'words',
      length: 27,
    });
    $('.about-services .item-1 p').Cuttr({
      truncate: 'words',
      length: 30,
    });
    $('.about-services .item-2 p').Cuttr({
      truncate: 'words',
      length: 30,
    });
  }






  //scroll top site
  $(document).on('click', '.top-site', function (e) {
    $('html, body').stop().animate({scrollTop:0},'slow', 'swing');
  });

  /* mob-menu*/
  $(document).on('click', '.open-menu a', function (e){
    e.preventDefault();
    $(this).toggleClass('is-open')

    if($(this).hasClass('is-open')){
      $.fancybox.open( $('#menu-responsive'), {
        touch:false,
        autoFocus:false,
        beforeShow:function (e){
          $('html').addClass('is-bg');
        },
        beforeClose: function (e){
          $('html').removeClass('is-menu');
        },
        afterClose: function (e){
          $('html').removeClass('is-bg');
        },
      });

      setTimeout(function() {
        $('html').addClass('is-menu');

      }, 100);
    }else{
      $('html').removeClass('is-menu');
      $.fancybox.close();
    }

  });

  /*services tabs hover*/
  $('.services .text ul li').hover(function (e){
    let item = $(this).index() + 1;
    console.log(item)
    $('.services figure .wrap').hide();
    $('.services figure .wrap-'+item).show();
  })

  /*popup*/

  $(document).on('click', '.info-team', function (e){
    e.preventDefault();

    $.fancybox.open( $('#info-team'), {
      touch:false,
      autoFocus:false,
      beforeShow:function (e){
        $('html').addClass('is-bg-white');
      },

      afterClose: function (e){
        $('html').removeClass('is-bg-white');
      },
    });

  });


    $(".about-services .item a").fancybox({
    touch:false,
    autoFocus:false,
    beforeShow: function (e) {
      $('html').addClass("is-blog");
    },
    afterClose: function (e) {
      $('html').removeClass("is-blog");
    }
  });

//TABS
  (function($){
    jQuery.fn.lightTabs = function(options){

      var createTabs = function(){
        tabs = this;
        i = 0;

        showPage = function(i){
          $(tabs).find(".tab-content").children("div").hide();
          $(tabs).find(".tab-content").children("div").eq(i).show();
          $(tabs).find(".tabs-menu").children("li").removeClass("is-active");
          $(tabs).find(".tabs-menu").children("li").eq(i).addClass("is-active");
        }

        showPage(0);

        $(tabs).find(".tabs-menu").children("li").each(function(index, element){
          $(element).attr("data-page", i);
          i++;
        });

        $(tabs).find(".tabs-menu").children("li").click(function(){
          showPage(parseInt($(this).attr("data-page")));
        });
      };
      return this.each(createTabs);
    };
  })(jQuery);
  $(".tabs").lightTabs();

 /* open filter*/
  $(document).on('click', '.open-filter', function (e){
    e.preventDefault();
    $(this).toggleClass('is-open');

    if($(this).hasClass('is-open')){
      $('.offer .filter-line').addClass('is-active');
    }else{
      $('.offer .filter-line').removeClass('is-active');
    }
  })

  /*slider*/
  var swiperMini = new Swiper(".slider-min", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".min-next",
      prevEl: ".min-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 6,
      },
    }
  });
  var swiperBig = new Swiper(".slider-big", {
    loop: true,
    spaceBetween: 20,
    thumbs: {
      swiper: swiperMini,
    },
    breakpoints: {
      320: {
        spaceBetween: 10,
      },
      480: {
        spaceBetween: 20,
      },

    }
  });

  /*popup*/
  $(".fancybox").fancybox({
    touch:false,
    autoFocus:false,
    beforeShow: function (e) {
      $('html').addClass("is-popup");
    },
    afterClose: function (e) {
      $('html').removeClass("is-popup");
    }
  });


  $(document).on('click', ' .slider-big .swiper-slide a', function (e){
    $.fancybox.open( $('#popup-img'), {
      touch:false,
      autoFocus:false,
      beforeShow: function (e) {
        $('html').addClass("is-img");
      },
      afterClose: function (e) {
        $('html').removeClass("is-img");
        let imgActive = swiperBig.activeIndex;
        swiperImg.slideTo(imgActive);
      }
    });
  })



  var swiperImg = new Swiper(".slider-img", {
    slidesPerView: 1,
    spaceBetween: 100,
    centeredSlides: true,
    loop:true,
    pagination: {
      el: ".pagination-img",
      type: "fraction",
    },
    navigation: {
      nextEl: ".img-next",
      prevEl: ".img-prev",
    },
    breakpoints: {
      320: {
        spaceBetween: 10,
      },
      480: {
        spaceBetween: 20,
      },
      1200: {
        spaceBetween: 50,
      },
      1500: {
        spaceBetween: 100,
      },
    }
  });

  swiperBig.on('slideChange', function () {
    let imgActive = swiperBig.activeIndex;
    swiperImg.slideTo(imgActive);
  });

  /*slider*/
  var swiperStep = new Swiper(".step-slider", {
    slidesPerView: 4,
    spaceBetween: 50,
    autoHeight: true,
    navigation: {
      nextEl: ".step-next",
      prevEl: ".step-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween:40,
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }
  });
});