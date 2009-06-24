/*****
 jquery.colorChars.js -- Andrew Buntine (info@andrewbuntine.com)

 Version: 0.1
 Requires: JQuery 1.2+
 Released under the MIT license.

 A very simple JQuery plugin to color blocks of characters in a set of elements. It accepts
 a hash-map object like so:

   $('div pre').colorChars({
     '#' : '#ccc55e',
     '@' : '#999aaa',
     '$' : 'green',
     'L' : '#333333'
   });
*****/

(function($) {
  $.fn.colorChars = function(map) {
    return this.each(function() {
      for ( key in map ) {
        if ( map.hasOwnProperty(key) ) {
          chars = new RegExp("(" + extractChar(key) + "+)", "g");
          span = "<span style=\"color:" + map[key] + ";\">$1</span>";
          $(this).html($(this).html().replace(chars, span));
        }
      }
    });
  };

  // Private function to extract the first character and escape it.
  function extractChar(text) {
    character = text.charAt(0);
    return (/\w/.test(character)) ? character : "\\" + character;
  }
})(jQuery);
