$(function(){
	// Navigation
	$("nav > ul > li").hover(
		function(){
			$("nav").addClass("active");
			$(this).addClass("active");
		},
		function(){
			$("nav").removeClass("active");
			$(this).removeClass("active");
		}
	);
	$("nav > ul > li > a").focusin(function(){
		$("nav").addClass("active");
		$(this).parent().addClass("active");
	});
	$("nav li li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("active");
	});
	$("nav li:last-child li:last-child").focusout(function(){
		$("nav").removeClass("active");
	});

	// Slider
	$(".keyvisual").bxSlider({
		mode: "horizontal",
		captions: true,
		controls: true
	});
});