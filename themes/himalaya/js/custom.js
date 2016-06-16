/**
 * @file
 * Code for humbergur menu.
 */

(function($) {
  Drupal.behaviors.himalaya = {
      attach: function(context, settings) {
        $(".meanmenu-reveal").click(function() {
          var X = $(this).attr('id');
            if (X == 1) {
              $(".submenu").hide();
              $(this).attr('id', '0');
              $(this).removeClass('mean-close');
            }
            else {
              $(".submenu").show();
              $(this).attr('id', '1');
              $(this).addClass('mean-close');
            }
        });
        $(".submenu").mouseup(function() {
          return false
        });
        $(".meanmenu-reveal").mouseup(function() {
          return false
        });
        $(document).mouseup(function() {
          $(".submenu").hide();
          $(".meanmenu-reveal").attr('id', '');
          $('.meanmenu-reveal').removeClass('mean-close');
        });
        /*var offset = 250;
        var duration = 300;
        $(window).scroll(function() {
          if (jQuery(this).scrollTop() > offset) { 
            $(‘.back-to-top’).fadeIn(duration);
          } else {
            $(‘.back-to-top’).fadeOut(duration);
          }
        });
        $('.back-to-top').click(function(event) {
          event.preventDefault();
          $('html, body').animate({scrollTop: 0}, duration);
          return false;
        });*/
        
 
        var offset = 250;
         
        var duration = 300;
         
        jQuery(window).scroll(function() {
         
        if (jQuery(this).scrollTop() > offset) {
         
        jQuery(‘'.back-to-top').fadeIn(duration);
         
        } else {
         
        jQuery('.back-to-top’').fadeOut(duration);
         
        }
         
        });
         
                 
        jQuery('.back-to-top').click(function(event) {
         
        event.preventDefault();
         
        jQuery('html, body').animate({scrollTop: 0}, duration);
         
        return false;
         
        });
         
       
        // js for to wrap div in one 
        jQuery("#footer #block-ourwork h2").click(function(){
           jQuery('#footer #block-ourwork .menu').toggle('slow');
        });
        jQuery("#footer #block-resources h2").click(function(){
           jQuery('#footer #block-resources .menu').toggle('slow');
        });
        jQuery("#footer #block-aboutus h2").click(function(){
           jQuery('#footer #block-aboutus .menu').toggle('slow');
        });
      }
    };
})(jQuery);
