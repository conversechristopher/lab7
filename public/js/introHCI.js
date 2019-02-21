'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$("button").click(clicked);
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
}

function clicked(response) {
	console.log("hey!");
	ga("send", "event", "like", "click");

}