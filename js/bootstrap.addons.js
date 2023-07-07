"use strict";
(function($){

var $body = $('body');
var $window = $(window);


function windowLoadInit() {

	$(".cover-image").each(function(){
		var $element = $(this);
		var $image = $element.find("img").first();
		if (!$image.length) {
			$image = $element.parent().find("img").first();
		}
		if (!$image.length) {
			return;
		}
		var imagePath = $image.attr("src");
		$element.css("background-image", "url(" + imagePath + ")");
		var $imageParent = $image.parent();
		//if image inside link - adding this link
		if ($imageParent.is('a')) {
			$element.prepend($image.parent().clone().html(''));
		}
	});

}

$window.on('load', function(){
	windowLoadInit();
});

//end of IIFE function
})(jQuery);