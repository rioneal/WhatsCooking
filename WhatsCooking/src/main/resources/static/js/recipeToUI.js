function map(recipe) {
	var count = 0;
	console.log(recipe);
	$.each(recipe, function (i, field) {
		count++;
		console.log(field);
		if (count <= 5) {
			$("#recipeList").append('<div class="row dynRecipe"><div class="col-lg-12 mb-12"><div class="card h-100"><h4 class="card-header">' + field.title + ' <small style="float: right">Preparation Time: <b>' + field.readyInMinutes + ' minutes</b></small> </h4> <div class="card-body"> <img src="' + field.image + '" height="100px" width="100px" style="float: left;"><p class="card-text">  Ingredients needed: ' + field.missedIngredientCount + ' </p><p class="card-text"> Servings: ' + field.servings + '</p> <p class="card-text"> Calories per serving: ' + field.calories + '  </p><p class="card-text"> Price per serving: $' + (field.pricePerServing/100).toFixed(2) + '</p> <input type="button" style="float: right" class="btn btn-md btn-primary" data-toggle="modal" data-target="#modal'+field.id+'" onclick="modalCreate('+field.id+')" value="View Recipe"></div></div></div> </div>');
			// $("#modals").append('<div class="modal fade dynModal" id="modal' + field.id + '" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button> <h4 class="modal-title">' + field.title + '</h4></div> <div class="modal-body"><div class="row"><div class="col-lg-4"><img class="img-fluid rounded" src="' + field.image + '" HEIGHT="250" WIDTH="220" BORDER="0" style="float: left;"></div><div class="col-sm-offset-1 col-sm-6"><p><b>Needed Ingredients: </b>' + missedIngr(field.missedIngredients) + '</p><b>Your Ingredients: </b>' + usedIngr(field.usedIngredients) + '</p></div></div><p><b>Instructions</b>' + instr(field.analyzedInstructions) + '</p></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="" style="float: left;" onclick="saveRecipe(' + field.id + ')">Save</button><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button></div></div></div></div>');
		}
	});
}

