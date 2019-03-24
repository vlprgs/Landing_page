document.addEventListener("DOMContentLoaded", function() {

    var btn = document.getElementsByClassName("btn")[0];
    var cookie = document.getElementsByClassName("cookies")[0];
      btn.onclick = function(){
      cookie.style.visibility = "hidden";
    };
    var formbtn = document.getElementsByClassName("contact_btn")[0];
    var formVisibility = document.getElementById("form1");
    formbtn.onclick = function(){
      formVisibility.style.visibility = "visible";
      console.log("ok");
    };

//modified code from https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
//thanks for being able to learn how to make scroll in vanilla js
    function scrollIt(destination, duration = 200, easing = 'linear', callback) {
      const easings = {
        linear(t) {
          return t;
        },
        easeInQuad(t) {
          return t * t;
        },
        easeOutQuad(t) {
          return t * (2 - t);
        },
        easeInOutQuad(t) {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic(t) {
          return t * t * t;
        },
        easeOutCubic(t) {
          return --t * t * t + 1;
        },
        easeInOutCubic(t) {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart(t) {
          return t * t * t * t;
        },
        easeOutQuart(t) {
          return 1 - --t * t * t * t;
        },
        easeInOutQuart(t) {
          return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
        },
        easeInQuint(t) {
          return t * t * t * t * t;
        },
        easeOutQuint(t) {
          return 1 + --t * t * t * t * t;
        },
        easeInOutQuint(t) {
          return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
        } };

        const start = window.pageYOffset;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
        const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
        const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
        const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

        if ('requestAnimationFrame' in window === false) {
          window.scroll(0, destinationOffsetToScroll);
          if (callback) {
            callback();
          }
          return;
        }

        function scroll() {
          const now = 'now' in window.performance ? performance.now() : new Date().getTime();
          const time = Math.min(1, (now - startTime) / duration);
          const timeFunction = easings[easing](time);
          window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

          if (window.pageYOffset === destinationOffsetToScroll) {
            if (callback) {
              callback();
            }
            return;
          }
          requestAnimationFrame(scroll);
        }
  scroll();
}
    document.getElementsByTagName('p')[0].addEventListener('click', () => {
      scrollIt(
      document.querySelector('.section_2nd'),
      300,
      'easeOutQuad',
      );
    });
    document.getElementsByTagName('p')[1].addEventListener('click', () => {
      scrollIt(
      document.querySelector('.section_3rd'),
      300,
      'easeOutQuad',
      );
    });
    document.getElementsByTagName('p')[2].addEventListener('click', () => {
      scrollIt(
      document.querySelector('.section_4th'),
      300,
      'easeOutQuad',
      );
    });
    document.getElementsByTagName('p')[3].addEventListener('click', () => {
      scrollIt(
      document.querySelector('.section_5th'),
      300,
      'easeOutQuad',
      );
    });
});
  //jQuery
  $(document).ready(function () {

   $('div.background_1st').mousewheel(function(turn, delta){
      if ( delta == -1 ){
            $('html, body').stop().animate({
            scrollTop: $('section.section_2nd').offset().top}, 1000);
     } else {
       return false
     }
    });

    $('section.section_2nd').mousewheel(function(turn, delta){
        if ( delta == -1 ){
            $('html, body').stop().animate({
            scrollTop: $('section.section_3rd').offset().top}, 1000);
            $('.skill_text').css({
              "visibility" : "hidden",
              "z-index" : "-5",
            });
            $('div.header').css({
              "width" : "11vw",
              "transition" : "0.5s"
            });
      } else if ( delta == 1 ) {
            $('html, body').stop().animate({
            scrollTop: $('div.background_1st').offset().top}, 1000);
            $('div.header').css({
              "height" : "7%",
              "width" : "100%",
              "background-color" : "black",
              "transition" : "0.5s"
            });
            $('.navigation').css({
              "visibility" : "hidden",
              "z-index" : "-5",
            });
            $('.skill_text').css({
              "visibility" : "hidden",
              "z-index" : "-5",
            });
      } else {return false}
     });

     $('section.section_3rd').mousewheel(function(turn, delta){
         if ( delta == -1 ){
              $('html, body').stop().animate({
              scrollTop: $('section.section_4th').offset().top}, 1000);
              $('.skill_text').css({
                "visibility" : "hidden",
                "z-index" : "-5",
              });
       } else if ( delta == 1 ) {
         $('html, body').stop().animate({
           scrollTop: $('section.section_2nd').offset().top}, 1000);
           $('.skill_text').css({
             "visibility" : "hidden",
             "z-index" : "-5",
           });
       } else {return false}
      });

      $('section.section_4th').mousewheel(function(turn, delta){
          if ( delta == 1 ){
                $('html, body').stop().animate({
                scrollTop: $('section.section_3rd').offset().top}, 1000);
        } else if ( delta == -1 ){
          $('html, body').stop().animate({
          scrollTop: $('section.map_adress').offset().top}, 1000);
        } else {return false}
       });
       $('section.map_adress').mousewheel(function(turn, delta){
           if ( delta == 1 ){
                 $('html, body').stop().animate({
                 scrollTop: $('section.section_4th').offset().top}, 1000);
         } else if ( delta == -1 ){
           $('html, body').stop().animate({
           scrollTop: $('section.section_5th').offset().top}, 1000);
         } else {return false}
        });
       $('section.section_5th').mousewheel(function(turn, delta){
         if ( delta == 1 ){
               $('html, body').stop().animate({
               scrollTop: $('section.map_adress').offset().top}, 1000);
       } else if ( delta == -1 ){
         $('html, body').stop().animate({
         scrollTop: $('footer').offset().top}, 1000);
       } else {return false}
     });
   });
