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
