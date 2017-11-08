// Data parameters declared and initialized to default values
// Will be changed at time of search if user has changed any preferences
// Will also change if user is guest or registered user
sessionStorage.setItem('loggedIn', false);
sessionStorage.setItem('uid', 1);

function search(ingredientString) {
	userSearch(ingredientString)
	// if (sessionStorage.getItem('loggedIn') == 1) {
	// 	userSearch();
	// }
	// else {
	// 	guestSearch();
	// }
}

function userSearch(ingredientString) {
	if(sessionStorage.getItem('loggedIn')==true){
		retreivePreferences(ingredientString);
	}
	else{
		parsePreferences(ingredientString,null)
	}
	// console.log(parameters);
	// parameters.includeIngredients = ingredientString;
	// complexSearch(parameters);
}

function guestSearch(ingredientString) {

}


function retreivePreferences(ingredientString) {
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
				// console.log(data);
				parsePreferences(ingredientString, data);
			},
		error: function (err) {
			alert(err);
		}
	});
}

function parsePreferences(ingredientString, data) {
	var dataParameters = {
		"limitLicense": "false",
		"addRecipeInformation": "true",
		// "cuisine": "",
		"diet": "",
		// "excludeIngredients": "",
		"fillIngredients": "true",
		"includeIngredients": "",
		"instructionsRequired": "true",
		"intolerances": "",
		"maxCalories": "5000"
	};

	var intolerances = [];
	var diet = [];
	if (data) {
		for (var key in data) {
			if (data[key] == true) {
				switch (key) {
					case "dairyfree":
						key = "dairy";
						intolerances.push(key);
						break;
					case "glutenfree":
						key = "gluten";
						intolerances.push(key);
						break;
					case "vegan":
						diet.push(key);
						break;
					case "vegetarian":
						diet.push(key);
						break;
					case "other":
						intolerances.push(key);
						break;
					default:
						break;
				}
			}
		}
		var intolString = intolerances.join();
		var dietString = diet.join();
		dataParameters.intolerances = intolString;
		dataParameters.diet = dietString;
	}
	dataParameters.includeIngredients = ingredientString;
	complexSearch(dataParameters);
}

function complexSearch(searchData) {
	$.ajax({
		url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex', // The URL to the API. You can get this in the API page of the API you intend to consume
		type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		data: searchData, // Additional parameters here
		dataType: 'json',
		success: function (data) {
			// console.log(data.results);
			// console.log(JSON.stringify(data.results));
			mapper(data.results);
		},
		error: function (err) {
			alert(err);
		},
		beforeSend: function (xhr) {
			xhr.setRequestHeader("X-Mashape-Key", "FEVql0chRwmshPvhp3dPwwUBrnIEp1YtlVOjsnTrd2lxtjFWjW"); // Enter here your Mashape key
		}
	});
}