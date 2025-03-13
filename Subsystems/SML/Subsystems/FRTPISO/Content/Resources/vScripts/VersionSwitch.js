"use strict";

var setVersionHrefs = function() {

		// Get all elements with a specific class
		var elementsVTT = document.getElementsByClassName('versionSwitchVTT');
		var elementsCANoe = document.getElementsByClassName('versionSwitchCANoe');

		var url = window.location.href;

		let urlVTT, urlCANoe;
		urlVTT = urlCANoe = url;
		
	// Iterate over the elements
		for (var i = 0; i < elementsVTT.length; i++) {
			var element = elementsVTT[i];

    // Do something with each element
			urlVTT = url.replace("/8.0/", "/7.3/");
			element.href = urlVTT;	
		}

	// Iterate over the elements
		for (var i = 0; i < elementsCANoe.length; i++) {
			var element = elementsCANoe[i];

    // Do something with each element
			urlCANoe = url.replace("/17.3/", "/17.2/");
			element.href = urlCANoe;				
		
		}
	}

window.addEventListener("load", (event) => {
	
	setVersionHrefs();

});