
(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
	// Show the first three projects
	showProjects(0, 2);
	let isShowBtw = true; 
	// Add click event listener to the "Show More" button
	document.getElementById("toggleBtn").addEventListener("click", function () {
		// Toggle the visibility of projects
		toggleProjects(3, 12);
		// Toggle the button text
		isShowBtw = !isShowBtw;  
		toggleButtonText(isShowBtw);
	});
});

function showProjects(startIndex, endIndex) {
	// Get all project containers
	var projects = document.querySelectorAll(".project-container .col-4");

	// Loop through the projects and show the ones within the specified range
	for (var i = 0; i < projects.length; i++) {
		if (i >= startIndex && i <= endIndex) {
			projects[i].style.display = "block";
			projects[i].style.opacity = 1;
		} else {
			projects[i].style.display = "none";
			projects[i].style.opacity = 0;
		}
	}
}

function toggleProjects(startIndex, endIndex) {
	// Get all project containers
	var projects = document.querySelectorAll(".project-container .col-4");

	// Loop through the projects and toggle the ones within the specified range
	for (var i = 0; i < projects.length; i++) {
		if (i >= startIndex && i <= endIndex) {
			toggleVisibility(projects[i]);
		}
	}
}

function toggleVisibility(element) {
	if (element.style.display === "none" || element.style.display === "") {
		fadeIn(element);
	} else {
		hide(element);
	}
}

function hide(element) {
	element.style.display = "none";
	element.style.opacity = 0;
}

function fadeIn(element) {
	element.style.display = "block";
	element.style.opacity = 0;

	var opacity = 0;
	var interval = setInterval(function () {
		if (opacity < 1) {
			opacity += 0.1;
			element.style.opacity = opacity;
		} else {
			clearInterval(interval);
		}
	}, 50); // Adjust the interval as needed
}

function toggleButtonText(isShowBtw) {
	var btn = document.getElementById("toggleBtn");
	btn.innerText = isShowBtw ?"Show More" : "Hide";
}