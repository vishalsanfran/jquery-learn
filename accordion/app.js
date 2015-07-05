// Build an accordion that hides paras that are not clicked

$(function() {
	//store the headers
	var headings = $("h2");
	//store the paragraphs
	var paragraphs = $("p");
	var accordion = $("#accordion");

	// hide all except the first p
	paragraphs.not(":first").hide();
	// delegate event to h2 instead of p, 
	// any new p's inserted will also work
	// on clicking the heading..
	accordion.on("click", "h2", function() { 
		var t = $(this);
		// .. get the next elem, .. which we know is a p
		var tPara = t.next();
		if(!tPara.is(":visible")) {
			//trigger a custom event
			tPara.trigger("showParagraph");
		}
		
	});

	var animateAccordion = function(elem, duration, easing) {
		// animate to hide all p's with slideUp
		paragraphs.stop(true, true).slideUp(duration, easing);
		// animate to show 1 specific p wwith slideDown
		$(elem).stop(true, true).slideDown(duration, easing);
	};
	
	// custom event, can be 'triggered' anywhere
	accordion.on("showParagraph", "p", function() {
		animateAccordion(this, 600, "easeInBack");
	});
	
});