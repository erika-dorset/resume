jQuery(document).ready(function ($) {
   /* fade In and Out primary nav */

   $(window).on('scroll', function () {

      var h = $('header').height();
      var y = $(window).scrollTop();
      var nav = $('#nav-wrap');

      if ((y > h * .20) && (y < h) && ($(window).outerWidth() > 768)) {
         nav.fadeOut('fast');
      }
      else {
         if (y < h * .20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }

   });

   /* Make header image size of browser window */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });
   
   var offset = 80;

   $('.navbar li a').click(function(event) {
       $($(this).attr('href'))[0].scrollIntoView();
       scrollBy(5, -offset);
       console.log(offset);
   });
});



