// $.getJSON("results.json", function (json) {
// 	console.log(json); // this will show the info it in firebug console
// 	mapper(json)
// });
var recipeList = [];

function mapper(results) {
	for (var i = 0; i < results.length; i++) {
        var extendedIngredients=[];
        // console.log(results[i]);
		// recipeList.push(recipe.id);
		// var recipeObject = {};
		// var instructionList = [];
		// var usedIngredientList = [];
		// var missedIngredientList = [];
		// recipeObject.id = recipe.id;
		// recipeObject.title = recipe.title;
		// recipeObject.image = recipe.image;
		// recipeObject.readyInMinutes = recipe.readyInMinutes;
		// recipeObject.servings = recipe.servings;
		// recipeObject.usedIngredientCount = recipe.usedIngredientCount;
		// recipeObject.missedIngredientCount = recipe.missedIngredientCount;
		// recipeObject.calories = recipe.calories;
		//
		//
		// for (var k = 0; k < recipe.analyzedInstructions[0].steps.length; k++) {
		// 	// console.log(recipe.analyzedInstructions[0]);
		// 	var instruction = recipe.analyzedInstructions[0].steps[k];
		// 	// console.log(instruction.step);
		// 	recipe.push(instruction.step);
		// }
		console.log(results[i])
		for (var j = 0; j < results[i].usedIngredients.length; j++) {
			var uIngredient = results[i].usedIngredients[j];
			extendedIngredients.push(uIngredient)
			// results[i].extendedIngredients.push(uIngredient)
		}
		for (var l = 0; l < results[i].missedIngredients.length; l++) {
			var mIngredient = results[i].missedIngredients[l];
			extendedIngredients.push(mIngredient)
		}
        results[i].extendedIngredients = extendedIngredients;
        // recipeObject.analyzedInstructions = instructionList;
		// recipeObject.usedIngredients = usedIngredientList;
		// recipeObject.missedIngredients = missedIngredientList;
		// recipeList.push(recipeObject)
	}
    recipeList = results;
    console.log(recipeList);
    sessionStorage.setItem('recipeList',JSON.stringify(recipeList));
	map(results);
}


