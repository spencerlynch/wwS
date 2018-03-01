jQuery(document).ready(function($) {
   
   'use strict';
   
   //REV SLIDER
   jQuery('.tp-banner').show().revolution(
	{
		dottedOverlay:"none",
		delay:9000,
		startwidth:1170,
		startheight:700,
		hideThumbs:200,
		
		thumbWidth:100,
		thumbHeight:50,
		thumbAmount:5,
		
		navigationType:"none",
		navigationArrows:"solo",
		navigationStyle:"preview1",
		
		touchenabled:"on",
		onHoverStop:"on",
		
		swipe_velocity: 0.7,
		swipe_min_touches: 1,
		swipe_max_touches: 1,
		drag_block_vertical: false,
								
								
		keyboardNavigation:"on",
		
		navigationHAlign:"center",
		navigationVAlign:"bottom",
		navigationHOffset:0,
		navigationVOffset:20,

		soloArrowLeftHalign:"left",
		soloArrowLeftValign:"center",
		soloArrowLeftHOffset:20,
		soloArrowLeftVOffset:0,

		soloArrowRightHalign:"right",
		soloArrowRightValign:"center",
		soloArrowRightHOffset:20,
		soloArrowRightVOffset:0,
				
		shadow:0,
		fullWidth:"off",
		fullScreen:"on",

		spinner:"spinner0",
		
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,

		shuffle:"off",
		
								
		forceFullWidth:"off",						
		fullScreenAlignForce:"off",						
		minFullScreenHeight:"400",						
								
		hideThumbsOnMobile:"off",
		hideNavDelayOnMobile:1500,						
		hideBulletsOnMobile:"off",
		hideArrowsOnMobile:"off",
		hideThumbsUnderResolution:0,
		
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		startWithSlide:0,
		fullScreenOffsetContainer: ".header"	
	});
   
	
	

	
   
  
    //SMOOTH SCROLL EFFECT
    $('[data-toggle="elementscroll"]').on("click", function(){
    	
    	'use strict';
    	
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    		var target = $(this.hash);
    		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    		if (target.length) {
    			$('html,body').animate({ scrollTop: target.offset().top }, 1000);
    			return false;
    		}
    	}
    	
    });  
	  
	
	//MAGNIFIC POPUP LOAD CONTENT VIA AJAX
	$('.html-popup').magnificPopup({type: 'ajax'});
 	
	//MAGNIFIC POPUP IMAGE
	$('.image-popup').magnificPopup({
		type:'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		
	});
    
    //LOAD MORE
    $('#list-project li:lt(4)').show();
    
    $('#loadmore').on("click", function () {
    	$('#list-project li:lt(8)').fadeIn();
    	$('#list-project li:lt(8)').show();
    });
    
    //FAQ TOGGLE 
    $('.faqs dd').hide();
    $('.faqs dt').on({
        click : function(){ $(this).next().slideToggle('normal'); },
        mouseenter : function(){ $(this).addClass('hover'); },
        mouseleave : function(){ $(this).removeClass('hover'); }
    });
	  
	//OWLCAROUSEL TESTIMONIAL CAROUSEL
	var owl = $("#testimonial-carousel");
 
	  owl.owlCarousel({
		  navigation : false, // Show next and prev buttons
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  singleItem:true,
		  transitionStyle : "fade"
	  });

	//FIX HOVER EFFECT ON IOS DEVICES
	document.addEventListener("touchstart", function(){}, true);

});


$(window).load(function(){
		
    
	$("#nav-primary").sticky({ topSpacing: 0, });
	
    //PRELOADER
    $('#preload').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	
	
	//CUSTOM TOOLBAR
	 $("#content").mCustomScrollbar({
        theme: "dark-3",
		live: "on",
      });

});

