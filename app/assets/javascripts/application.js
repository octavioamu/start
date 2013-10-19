//
// Main scripts
// ----------------------------------------------------------------

(function ($) {

  'use strict';

  // =Global Variables
  var SITE_URL  = window.location.href,
      $body     = $('body'),
      stopEvent = function(event) {
        (event.preventDefault) ? event.preventDefault() : event.returnValue = false;

        if(event.stopPropagation) {
          event.stopPropagation();
        }
      };

})(jQuery);



// Drowdown
// ----------------------------------------------------------------

(function ($) {
  'use strict';

})(jQuery);