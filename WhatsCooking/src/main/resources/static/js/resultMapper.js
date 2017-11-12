// $.getJSON("results.json", function (json) {
// 	console.log(json); // this will show the info it in firebug console
// 	mapper(json)
// });

function mapper(results) {
	var recipeList = [];
	for (var i = 0; i < results.length; i++) {
		// console.log(results[i]);
		recipe = results[i];
		var recipeObject = {};
		var instructionList = [];
		var usedIngredientList = [];
		var missedIngredientList = [];
		recipeObject.id = recipe.id;
		recipeObject.title = recipe.title;
		recipeObject.image = recipe.image;
		recipeObject.readyInMinutes = recipe.readyInMinutes;
		recipeObject.servings = recipe.servings;
		recipeObject.usedIngredientCount = recipe.usedIngredientCount;
		recipeObject.missedIngredientCount = recipe.missedIngredientCount;
		recipeObject.calories = recipe.calories;


		for (var k = 0; k < recipe.analyzedInstructions[0].steps.length; k++) {
			// console.log(recipe.analyzedInstructions[0]);
			var instruction = recipe.analyzedInstructions[0].steps[k];
			// console.log(instruction.step);
			instructionList.push(instruction.step);
		}
		for (var j = 0; j < recipe.usedIngredients.length; j++) {
			var uIngredient = recipe.usedIngredients[j];
			usedIngredientList.push(uIngredient.originalString)
		}
		for (var l = 0; l < recipe.missedIngredients.length; l++) {
			var mIngredient = recipe.missedIngredients[l];
			missedIngredientList.push(mIngredient.originalString)
		}
		recipeObject.analyzedInstructions = instructionList;
		recipeObject.usedIngredients = usedIngredientList;
		recipeObject.missedIngredients = missedIngredientList;
		recipeList.push(recipeObject)
	}
	// console.log(recipeList);
	map(recipeList);
}