// JavaScript Document

jQuery(function() {
    var nav = jQuery('#for_pc_nav');
	var sp = jQuery('#spaces');
    var offsetTop = nav.offset().top;

    var floatMenu = function(){
        if (jQuery(window).scrollTop() > offsetTop - 10) {
            nav.addClass('kotei_pc');
			sp.addClass('space');
        } else {
            nav.removeClass('kotei_pc');
			sp.removeClass('space');
        }
    }
    jQuery(window).scroll(floatMenu);
});

	$(function(){
   $("#mob_menu").css("display","none");
   $("#for_mob_menu").on("click", function() {
      $("#mob_menu").slideToggle(300);
      $(this).toggleClass("active");
   });
});
	$(function(){
    $("#mob_menu").on("click", function() {
		$("#mob_menu").slideToggle(200);
		$(this).toggleClass("active");
   });
});