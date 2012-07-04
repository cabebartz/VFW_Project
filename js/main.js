// VFW 1207
// Cabe Bartz
// Project 2

//DOM Listener
window.addEventListener("DOMContentLoaded", function(){
	
	//getElementByID
	function ElId(x){
		var anElement = document.getElementById(x);
		return anElement;
	}

	//variable defaults
	var billCategory = ["Credit", "Rent", "Utilities", "Misc"];

	//Link and click events
	var displayData = ElId('displayData');
	displayData.addEventListener("click", getData);
	var clearData = ElId('clearData');
	clearData.addEventListener("click", clearData);
	var saveData = ElId('submit');
	save.addEventListener("click", storeData);

});