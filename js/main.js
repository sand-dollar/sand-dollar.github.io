
/**
 *
 *  Main JavaScript
 *
 *  @package gleesik_scripts
 *
 **/

 // IIFE - Immediately Invoked Function Expression
(function($, window, document) {

  // The $ is now locally scoped

  // Listen for the jQuery ready event on the document
  $(function() {

    // The DOM is ready!

    // Global Variables
    var $window = $(window);

    'use strict';

    /**
     *  Main Menu Navigation
     **/
    var $body = $('body');
    var $nav_menu = $('.navigation-bar');
    var $nav_menu_link = $('#navMenu ul li a');
    var $toggle_menu_button = $('.navTrigger');

    // Navigation Menu Link
    $nav_menu_link.on('click', function() {

      // Select Current Navigation Item
      $nav_menu_link.parent().removeClass('current-menu-item');
      $(this).parent().addClass('current-menu-item');

      // Close Mobile Menu
      $nav_menu.removeClass('active');
      $toggle_menu_button.removeClass('active');
      $body.removeClass('no-scroll');

    });

    // Toggle Mobile Menu
    $toggle_menu_button.on('click', function() {
      $nav_menu.toggleClass('active');
      $body.toggleClass('no-scroll');
      $(this).toggleClass('active');
    });

    // Remove all classes on window resize
    $window.on('resize', function() {
      $nav_menu.removeClass('active');
      $body.removeClass('no-scroll');
      $toggle_menu_button.removeClass('active');
    });

    /**
     *  Scroll Event
     **/
    $window.scroll(function() {

      // Scroll Variables
      var $scrollTop = $window.scrollTop();
      //var $windowHeight = $window.height();

      /**
       *  Go to Top Button
       **/
      var $go_top = $('.go-to-top-button');

      if ( $scrollTop > 600 ) {
        $go_top.addClass('active');
      } else {
        $go_top.removeClass('active');
      }

    });

    /**
     *  Testimonials Carousel Setup
     **/
    $("#testimonials-carousel").owlCarousel({
        navigation : false, // Show next & prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem: true,
        //navigationText:["< zpět","další >"],
        autoPlay: 10000
    });

    /**
     *  Smooth Scrolling for Links
     **/
    $('a[href*="#"]:not([href="#"])').on('click', function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
        $('html, body').animate({
           scrollTop: target.offset().top
        }, 1000);
        return false;
       }
      }
    });

    /**
     *  Zobrazeni osnovy workshopu
     **/
    $( "#show-more-1" ).click(function() {
      $( "#show-more-content-1" ).slideToggle( "slow", function() {
        // Animation complete.
      });
    });
    $( "#show-more-2" ).click(function() {
      $( "#show-more-content-2" ).slideToggle( "slow", function() {
        // Animation complete.
      });
    });
    $( "#show-more-3" ).click(function() {
      $( "#show-more-content-3" ).slideToggle( "slow", function() {
        // Animation complete.
      });
    });

  });

}(window.jQuery, window, document));
// The global jQuery object is passed as a parameter
