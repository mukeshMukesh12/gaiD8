/**
 * @file
 * Code for humbergur menu.
 */

(function($, Drupal, drupalSettings) {
  Drupal.behaviors.himalaya = {
      attach: function(context, settings) {
         $('#block-gmap').click(function(){
            $(this).find('iframe').addClass('clicked')}).mouseleave(function(){
            $(this).find('iframe').removeClass('clicked')});

        //event for humbergur menu
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
        // change text of filter any to all in our listing page
        $('#block-views-block-our-work-block-3 .form-select option:first-child').text('All');
        $('.blog-read-more a').text('Read More');
        // js for main menu mobile for child**/
        if ($(window).width() < 992) {
          var allPanels = $('.menu-item--expanded .sub-menu-himalaya').hide();
          $('.menu-item--expanded > a').click(function() {
            allPanels.slideUp();
            $(this).parent().children('ul').slideDown('slow');
            return false;
          });
        } else {
          return true;
        }
        //
       
         
        // click event for previous page
        $('.back-to-page').click(function(){
          parent.history.back();
          return false;
        });

      }
    };
})(jQuery , Drupal, drupalSettings);
