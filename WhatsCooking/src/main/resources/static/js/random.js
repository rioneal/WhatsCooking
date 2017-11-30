// console.log("random 1")

// Data parameters declared and initialized to default values
$(document).ready(function () {
	$("#searchRandom").click(function () {
		$('.dynRecipe').remove();
		$('.dynModal').remove();
		randomRecipe();
	});
});


function randomRecipe() {
	// console.log("random 10")
	var dataParameters = {
		"limitLicense": "false",
		"number": 1,
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

// map(recipe);

function randomMap(recipe) {
	recipeList = recipe;
	var count = 0;
	$.each(recipe, function (i, field) {
		count++;
		if (count <= 5) {
			// $("#recipeList").append('<div class="row dynRecipe"><div class="col-lg-12 mb-12"><div class="card h-100"><h4 class="card-header">' + field.title + ' <small style="float: right">Preparation Time: <b>' + field.readyInMinutes + ' minutes</b></small> </h4> <div class="card-body"> <img src="' + field.image + '" height="100px" width="100px" style="float: left;"><p class="card-text">  Ingredients needed: ' + field.missedIngredientCount + ' </p><p class="card-text"> Servings: ' + field.servings + '</p> <p class="card-text"> Calories per serving: ' + field.calories + '  </p> <input type="button" style="float: right" class="btn btn-md btn-primary" data-toggle="modal" data-target="#modal'+field.id+'" onclick="modalCreate('+field.id+')" value="View Recipe"></div></div></div> </div>');
			$("#recipeList").append('<div class="row dynRecipe"><div class="col-lg-12 mb-12"><div class="card h-100"><h4 class="card-header">' + field.title + ' <small style="float: right">Preparation Time: <b>' + field.readyInMinutes + ' minutes</b></small> </h4> <div class="card-body"> <img src="' + field.image + '" height="100px" width="100px" style="float: left;"><p class="card-text">  Ingredients needed: ' + (field.extendedIngredients.length + 1) + '</p><p class="card-text"> Servings:' + field.servings + '</p><p class="card-text">Price per serving: $' + (field.pricePerServing / 100).toFixed(2) + '</p><input type="button" style="float: right" class="btn btn-md btn-primary" data-toggle="modal" data-target="#modal' + field.id + '" value="View Recipe"></div></div></div> </div>');
			$("#modals").append('<div class="modal fade dynModal" id="modal' + field.id + '" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button> <h4 class="modal-title">' + field.title + '</h4></div> <div class="modal-body"><div class="row"><div class="col-lg-4"><img class="img-fluid rounded" src="' + field.image + '" HEIGHT="250" WIDTH="220" BORDER="0" style="float: left;"></div><div class="col-sm-offset-1 col-sm-6"><p><b>Ingredients: </b>' + randIngr(field.extendedIngredients) + '</p></div></div><p><b>Instructions</b>' + randInstr(field.analyzedInstructions) + '</p></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="" style="float: left;" onclick="saveRecipe(' + field.id + ')">Save</button><button type="button" class="btn btn-primary" data-dismiss="" style="float: left;" onclick="saveGrocery(' + field.id + ')">Add to Grocery List</button><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button></div></div></div></div>');
			// $("#modals").append('<div class="modal fade dynModal" id="modal'+field.id+'" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button> <h4 class="modal-title">' + field.title + '</h4></div> <div class="modal-body"><div class="row"><div class="col-lg-4"><img class="img-fluid rounded" src="' + field.image + '" HEIGHT="250" WIDTH="220" BORDER="0" style="float: left;"></div><div class="col-sm-offset-1 col-sm-6"><p><b>Missed Ingredients</b><p>'+missedIngr(field.missedIngredients)+'</p><b>Your Ingredients: </b>'+usedIngr(field.usedIngredients)+'</p></div></div><p><b>Instructions</b>'+instr(field.analyzedInstructions)+'</p></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="" style="float: left;" onclick="saveRecipe(' + field.id + ')">Save</button><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button></div></div></div></div>');
		}
	});
}

function randInstr(instructions) {
	var instructionList = [];
	for (var k = 0; k < instructions[0].steps.length; k++) {
		// console.log(recipe.analyzedInstructions[0]);
		var instruction = instructions[0].steps[k];
		// console.log(instruction.step);
		instructionList.push(instruction.step);
	}
	var htmlString = "<ol>";
	for (var i = 0; i < instructionList.length; i++) {
		htmlString += '<li>' + instructionList[i] + '</li>';
	}
	htmlString += "</ol>";
	// console.log(htmlString);
	return htmlString;
}

function randIngr(ingredients) {
	var htmlString = "<ul>";
	// console.log(missedIngredients);
	for (var i = 0; i < ingredients.length; i++) {
		htmlString += '<li>' + ingredients[i].originalString + '</li>';
	}
	htmlString += "</ul>";
	// console.log(htmlString);
	return htmlString;

}

