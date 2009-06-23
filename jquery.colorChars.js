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
   '$' : 'green
 });
*****/

(function($) {
  $.fn.colorChars = function(map) {
    return this.each(function() {
      for ( character in map ) {
        if ( map.hasOwnProperty(character) ) {
          chars = new RegExp("(\\" + character + "+)", "g");
          span = "<span style=\"color:" + map[character] + ";\">$1</span>";
          $(this).html($(this).html().replace(chars, span));
        }
      }
    });
  };
})(jQuery);
