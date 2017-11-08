// Data parameters declared and initialized to default values
// Will be changed at time of search if user has changed any preferences
// Will also change if user is guest or registered user
sessionStorage.setItem('uid', 1);


function userSearch() {

}

function guestSearch() {

}


function retreivePreferences() {
	uid = sessionStorage.getItem('uid');
	$.ajax({
		url: 'http://localhost:8080/getPreferences', // The URL to add a user
		type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		data: {
			"Uid": uid
		}, // Additional parameters here
		dataType: 'json',
		// async: false,
		success:
			function (data) {
				console.log(data);
				// parsePreferences(data);
			},
		error: function (err) {
			console.log(err);
		}
	});
}

function parsePreferences(data) {
	// CONSIDER CHANGING DB COLUMNS TO INTOLERANCES AND DIET
	var dataParameters = {
		"limitLicense": "false",
		"addRecipeInformation": "true",
		"cuisine": "",
		"diet": "",
		"excludeIngredients": "",
		"fillIngredients": "true",
		"includeIngredients": "beef,carrots,potatoes",
		"instructionsRequired": "true",
		"intolerances": "",
		"maxCalories": "-1"
	};
	for (key in data) {
		switch (key) {
			case "dairyFree":
				key = "dairy";
				break;
			case "glutenFree":
				key = "gluten";
				break;
		}
	}
}

function complexSearch(searchData) {
	$.ajax({
		url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex', // The URL to the API. You can get this in the API page of the API you intend to consume
		type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		data: searchData, // Additional parameters here
		dataType: 'json',
		success: function (data) {
			console.log(data);
		},
		error: function (err) {
			alert(err);
		},
		beforeSend: function (xhr) {
			xhr.setRequestHeader("X-Mashape-Key", "FEVql0chRwmshPvhp3dPwwUBrnIEp1YtlVOjsnTrd2lxtjFWjW"); // Enter here your Mashape key
		}
	});
}