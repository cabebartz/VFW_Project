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
	//function to store data in local storage
	function storeData(){
		var id = Math.floor(Math.random() * 1000100001);
		//store form fields in object
		//object will contain arrat with form label and input value
		var item = {};
		item.category = ["Bill Category:", ElId('select').value];
		item.billName = ["Bill Name:", ElId('billName').value];
		item.accountNum = ["Account Number:", ElId('accountNum').value];
		item.billAmount = ["Amount Due:", ElId('billAmount').value];
		item.dueDate = ["Date Due:", ElId('dueDate').value];

		//  item.billPaid = ["Is Bill Paid?", paidValue];

		item.priority = ["Priority:", ElId('priority').value];
		item.comments = ["comments:", ElId('comments').value];

		//Save into local storage and convert to string(JSON.stringify)
		localStorage.setItem(id, JSON.stringify(item));
		alert("Bill Saved");
	}
	//variable defaults
	var billCategory = ["Credit", "Rent", "Utilities", "Misc"];
	makeCategory();
	//Link and click events
	/* var displayData = ElId('displayData');
	displayData.addEventListener("click", getData);
	var clearData = ElId('clearData');
	clearData.addEventListener("click", clearData);
	*/
	var saveData = ElId('submit');
	saveData.addEventListener("click", storeData);
});