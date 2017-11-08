console.log("random 1")

// Data parameters declared and initialized to default values
$(document).ready(function () {
	$("#searchRandom").click(function () {

		$('.dynRecipe').remove();
		$('.dynModal').remove();
		// randomRecipe();
	});
});


function randomRecipe() {
	console.log("random 10")
	var dataParameters = {
		"limitLicense": "false",
		// "number": 5,
		"tags": ""
	};

	$.ajax({
		url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random', // The URL to the API. You can get this in the API page of the API you intend to consume
		type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		data: dataParameters, // Additional parameters here
		dataType: 'json',
		success: function (data) {
			console.log(data);
			randomMap(data.recipes)
		},
		error: function (err) {
			alert("Error");
		},
		beforeSend: function (xhr) {
			xhr.setRequestHeader("X-Mashape-Key", "FEVql0chRwmshPvhp3dPwwUBrnIEp1YtlVOjsnTrd2lxtjFWjW"); // Enter here your Mashape key
		}
	});
}

function randomMap(recipe) {
	var count = 0;
	$.each(recipe, function (i, field) {
		count++;
		if (count <= 5) {
			$("#recipeList").append('<div class="row dynRecipe"><div class="col-lg-12 mb-12"><div class="card h-100"><h4 class="card-header">' + field.title + ' <small style="float: right">Preparation Time: <b>' + field.readyInMinutes + ' minutes</b></small> </h4> <div class="card-body"> <img src="' + field.image + '" height="100px" width="100px" style="float: left;"><p class="card-text">' + (field.extendedIngredients.length + 1) + '</p><input type="button" style="float: right" class="btn btn-md btn-primary" data-toggle="modal" data-target="#modal' + field.id + '" value="View Recipe"></div></div></div> </div>');
			$("#modals").append('<div class="modal fade dynModal" id="modal' + field.id + '" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button> <h4 class="modal-title">' + field.title + '</h4></div> <div class="modal-body"><div class="row"><div class="col-lg-4"><img class="img-fluid rounded" src="' + field.image + '" style="float: left;"></div><div class="col-lg-8"><p><b>Needed Ingredients: </b>' + randIngr(field.extendedIngredients) + '</p></div></div><p><b>Instructions</b>' + randInstr(field.analyzedInstructions) + '</p></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="" style="float: left;">Save</button><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button></div></div></div></div>');
		}
	});
}

function randInstr(instructions) {
	var htmlString = "<ol>";
	for (var i = 0; i < instructions.length; i++) {
		htmlString += '<li>' + instructions[i] + '</li>';
	}
	htmlString += "</ol>";
	// console.log(htmlString);
	return htmlString;
}

function randIngr(ingredients) {
	var htmlString = "<ul>";
	// console.log(missedIngredients);
	for (var i = 0; i < ingredients.length; i++) {
		htmlString += '<li>' + ingredients[i] + '</li>';
	}
	htmlString += "</ul>";
	// console.log(htmlString);
	return htmlString;
}