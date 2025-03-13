function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

const openTab = function(tabClassName) {

	//Variables
	const tabcontent = [...document.getElementsByClassName("tabcontent")];
	const tablinks =  [...document.getElementsByClassName("tablinks")];
	const tabsToBeShown = [...document.getElementsByClassName(tabClassName)];

	// Hide all tab contents
	tabcontent.forEach((tabcontent) => {
		tabcontent.style.display = "none";
	});

  	// Set all Tabs to inactive
	tablinks.forEach((tab) => {
		tab.classList.remove("active");
	});

  	// Activate and show tabs and tab content to be shown	
	tabsToBeShown.forEach((t) => {
		if(t.classList.contains("tabcontent")) {
		t.style.display = "block";
		} else {
		t.className += " active";
		}  
	})
}
