$(document).ready(function(){
	/*wow animate*/
	new WOW().init();
	
	
	/*toggle button show*/
	$(".toggle-btn").click(function(){
		if ($(".toggle-btn__item").hasClass("toggle-btn__item_active")){
			$(".toggle-btn__item").removeClass("toggle-btn__item_active");
			$(".header-menu .nav").slideUp();
		} else {
			$(".toggle-btn__item").addClass("toggle-btn__item_active");
			$(".header-menu .nav").slideDown();
		}
	});
	
	/*slow scroll links*/
	
	$("[data-scroll]").click(function(){
		
		var blockid = $(this).data("scroll"),
			topScrollBlock = $(blockid).offset().top;
		
		$("html, body").animate({
			scrollTop: topScrollBlock
		},300);

	}); 
	
	
	
	
	/*active menu on scroll*/
	
	var scrollWin = $(window).scrollTop(),
		headerH = $(".header").innerHeight();
	
	checkScroll(scrollWin);
	
	$(window).on("scroll", function(){
		scrollWin = $(this).scrollTop();
		checkScroll(scrollWin);
		
		var section = $("[data-scroll]");
		
		section.each(function(i, el){
			var id = $(el).data("scroll"),
				topId = $(id).offset().top - 10,
				blockH = topId +$(id).height();
			
			
			if(scrollWin > topId && scrollWin < blockH){
				$(".nav__link").removeClass("nav__link_active");
				$('[data-scroll="'+id+'"]').addClass("nav__link_active");
			} 
				
			
		});
		
	//	var $sections = $("[data-scroll]");
	//	
	//$sections.each(function(i,el){
	//	var id = $(el).data("scroll");
   //    var top  = $(id).offset().top;
   //    var bottom = top + $(el).height();
   //    var scroll = $(window).scrollTop();
   //	if( scroll > top && scroll < bottom){
   //        $(".nav__link").removeClass("nav__link_active");
	//		$('[data-scroll="'+id+'"]').addClass('nav__link_active');

   //    }
   //})
		
		
	});
	
	
	
	function checkScroll(scrollWin){
		if(scrollWin >= headerH - 50){
			$(".header-menu").addClass("header-menu_active");
		} else{
			$(".header-menu").removeClass("header-menu_active");
		}
	}
	
	
	
		
	$(".header .next-block__circle").click(function(){
		var heightNext = $(".header").innerHeight();
		$("html, body").animate({
			scrollTop: heightNext,
		}, 1000)
	});

	
	
	
});

//header-menu_active