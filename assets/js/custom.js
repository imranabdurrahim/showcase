// elements showing after full loading 

$(window).load(function(){
	$("#pageload").fadeOut(500);
	$(".navbar-default").css({opacity : "1"});
	$(".container-fluid").css({opacity : "1"});
});

// toggle dropdown 
$('#toggle-dropdown').dropdown();

// carousel effect
$('.carousel').carousel({
  pause : "hover",
  interval : 3000
});


function changeOnScroll() {
    if ($(window).width() > 767) {
        var window_position = $(window).scrollTop();
        var leadClass = $("#lead").position().top;
        if (leadClass < window_position){
            $("#custom-nav").css({"background-color" : "#e7e7e7", "border-bottom" : "1px inset #000", "border-top" : "3px solid #F0AD4E"});
            $(".navbar-default .navbar-nav > li > a").mouseenter(function(){
                $(this).css({color : "#000"});
            });
            $(".navbar-default .navbar-nav > li > a").mouseleave(function(){
                $(this).css({color : "#777"});
            });
        }else {
            $("#custom-nav").css({"background-color" : "transparent","border-bottom" : "0", "border-top" : "0"});
            $(".navbar-default .navbar-nav > li > a").mouseenter(function(){
                $(this).css({color : "#fff"});
            });
            $(".navbar-default .navbar-nav > li > a").mouseleave(function(){
                $(this).css({color : "#777"});
            });
        }
    }

    if ($(window).width() < 767) {$("#custom-nav").css({"background-color" : "#fff", "border-bottom" : "1px inset #000", "border-top" : "3px solid #F0AD4E"});}
} // function changeOnScroll
        
$(document).ready(function(){
	
	// smooth scrolling
	$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
	  var positioning = target.offset().top + -50;
        $('html,body').animate({
          scrollTop: positioning
        }, 1000);
        return false;
      }
    }
  }); // smoth scrolling
  
    /* show div on scroll */
    $("#portfolio .container").css("opacity", "0");
    $("#client .container").css("opacity", "0");
    $("#contact .container").css("opacity", "0");
    $(window).scroll(function(){
        var portfolio = $("#portfolio > .container").position().top - 500;
        var contact = $("#contact > .container").position().top - 500;
        var client = $("#client > .container").position().top - 500;
        var window_position = $(this).scrollTop();
        if (window_position > portfolio){$("#portfolio > .container").fadeTo(500,1);}
        if (window_position > contact){$("#contact > .container").fadeTo(500,1);}
        if (window_position > client){$("#client > .container").fadeTo(500,1);}
        
        /* nav bar */
        
        changeOnScroll();
        $(this).resize(function() {
            changeOnScroll();
        });
        
    }); // window scroll function
    
    
}); //documnet ready