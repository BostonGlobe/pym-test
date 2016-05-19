'use strict';
(function() {
	// global variables

	var el = document.querySelector('.chart')

	var resizeChart = function(w) {
		el.style.width = w + 'px'
	}

	// called once on page load
	var init = function() {
		window.addEventListener('resize', function() {
			var width =  window.innerWidth
			console.log('[child] resize:', width)
			// resizeChart(width)
		})
	};

	// called automatically on article page resize
	window.onResize = function(width) {
		console.log('[child] renderCallback:', width)
		resizeChart(width)
	};

	// graphic code









	// run code
	init();
})();
