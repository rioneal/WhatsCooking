function mapper(results) {
	console.log(results.length);
	var recipeList = [];
	for (var i = 0; i < results.length; i++) {
		var recipe = results[i];
		var recipeObject = {};
		recipeObject.id = recipe.id;
		recipeObject.title = recipe.title;
		recipeObject.image = recipe.image;
		recipeObject.readyInMinutes = recipe.readyInMinutes;
		recipeObject.servings = recipe.servings;
		recipeObject.usedIngredientCount = recipe.usedIngredientCount;
		recipeObject.missedIngredientCount = recipe.missedIngredientCount;
		recipeObject.calories = recipe.calories;
		recipeList.push(recipeObject)
	}
	map(recipeList);
}