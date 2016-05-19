'use strict';
(function() {
	// global variables



	// called once on page load
	var init = function() {
		window.addEventListener('resize', function() {
			console.log('[child] resize:', window.innerWidth)
		})
	};

	// called automatically on article page resize
	window.onResize = function(width) {
		console.log('[child] renderCallback:', width)
	};

	// graphic code









	// run code
	init();
})();
