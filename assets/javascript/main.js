//
// Main scripts
// ----------------------------------------------------------------

/* SUMMARY
    =Global Variables

============================================================================= */

// # Global Variables
// -----------------------------------------------
var SITE_URL  = window.location.href;
    $body     = $('body'),
    stopEvent = function(event) {
        (event.preventDefault) ? event.preventDefault() : event.returnValue = false;

        if(event.stopPropagation) {
            event.stopPropagation();
        }
    };

$(document).ready(function (){

});