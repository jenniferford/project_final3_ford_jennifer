$(document).ready(function() {
     $(".flexnav").flexNav();

   


		jQuery(document).ready(function($) {
			$('.my-slider').unslider({

//  Should the slider move on its own or only when
//  you interact with the nav/arrows?
//  Only accepts boolean true/false.
autoplay: true,

//  3 second delay between slides moving, pass
//  as a number in milliseconds.
delay: 3000,

//  <a href="http://www.jqueryscript.net/animation/">Animation</a> speed in millseconds
speed: 750,

//  An easing string to use. If you're using Velocity, use a
//  Velocity string otherwise you can use jQuery/jQ UI options.
easing: 'swing', // [.42, 0, .58, 1],

//  Does it support keyboard arrows?
//  Can pass either true or false -
//  or an object with the keycodes, like so:
//  {
//   prev: 37,
//   next: 39
// }
//  You can call any internal method name
//  before the keycode and it'll be called.
keys: {
  prev: 37,
  next: 39
},

//  Do you want to generate clickable navigation
//  to skip to each slide? Accepts boolean true/false or
//  a callback function per item to generate.
nav: true,

//  Should there be left/right arrows to go back/forth?
//   -> This isn't keyboard support.
//  Either set true/false, or an object with the HTML
//  elements for each arrow like below:
arrows: {
  prev: '<a class="' + self._ + '-arrow prev">←</a>',
  next: '<a class="' + self._ + '-arrow next">→</a>'
},

//  How should Unslider animate?
//  It can do one of the following types:
//  "fade": each slide fades in to each other
//  "horizontal": each slide moves from left to right
//  "vertical": each slide moves from top to bottom
animation: 'horizontal',

//  If you don't want to use a list to display your slides,
//  you can change it here. Not recommended and you'll need
//  to adjust the CSS accordingly.
selectors: {
  container: 'ul:first',
  slides: 'li'
},

//  Do you want to animate the heights of each slide as
//  it moves
animateHeight: false,

//  Active class for the nav
activeClass: self._ + '-active',

//  Have swipe support?
//  You can set this here with a boolean and always use
//  initSwipe/destroySwipe later on.
swipe: true
});
});


$.backstretch([
      "images/harryhausens_bg.jpg"
    , "images/harryhausens_bg_2.jpg"
  ], {duration: 3000, fade: 750});


});
