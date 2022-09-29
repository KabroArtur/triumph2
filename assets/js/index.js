document.addEventListener("DOMContentLoaded", function(){
    
    //slider main
    $('.main_slider').slick({
        dots: false,
        infinite: true,
        speed: 800,
        prevArrow:`<svg class='prev slick-prev' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        nextArrow:`<svg class='next slick-next' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        fade: true,
        cssEase: 'linear'
      });

    $('.vertical_slider').slick({
        infinite: true,
        speed: 400,
        autoplay:true,
        slidesToShow: 6,
        vertical: true,
        dots: false,
        arrows: false
      });
      
      $('#language').ddslick({
        imagePosition:"right",
        onSelected: function(selectedData){
      }   
    });

    //add amount jackpot

    const step = 1;

    function outNum(num, elem) {
      let e = document.querySelector("#jackpot");
      n = 14363;
      let interval = setInterval(() => {
        n = n + step;
        if (n == num) {
          clearInterval(interval);
        }
        e.innerHTML = '$' + n;
      }, 1000);
    }

    outNum(1000000, "#jackpot");

    //top scroll
    var btn = $('#buttonTop');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 200) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });



})
