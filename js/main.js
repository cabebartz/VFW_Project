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
	// create category group element and give options
	function makeCategory() {
		//getTag is array of form tags
		var getTag = document.getElementsByTagName("form"),
			selectLi = ElId('select'),
			createSelect = document.createElement('select');
		createSelect.setAttribute("id", "groups");
		for (var i = 0; i < billCategory.length; i++){
			var makeOption = document.createElement('option'),
				optText = billCategory[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			createSelect.appendChild(makeOption);
		}
		selectLi.appendChild(createSelect);
	}
	//variable defaults
	var billCategory = ["Credit", "Rent", "Utilities", "Misc"];
	//Link and click events
	/* var displayData = ElId('displayData');
	displayData.addEventListener("click", getData);
	var clearData = ElId('clearData');
	clearData.addEventListener("click", clearData);
	var saveData = ElId('submit');
	save.addEventListener("click", storeData);
	*/
	makeCategory();
});