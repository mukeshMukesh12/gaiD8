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
        // change text of filter any to all in our listing page
        $('#block-views-block-our-work-block-3 .form-select option:first-child').text('All');
        $('.blog-read-more a').text('Read More');
      }
    };
})(jQuery);
