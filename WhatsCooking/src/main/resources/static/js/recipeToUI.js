function map(recipe) {
	var count = 0;
	$.each(recipe, function (i, field) {
		count++;
		if (count <= 5) {
			$("#recipeList").append('<div class="row dynRecipe"><div class="col-lg-12 mb-12"><div class="card h-100"><h4 class="card-header">' + field.title + ' <small style="float: right">Preparation Time: <b>' + field.readyInMinutes + ' minutes</b></small> </h4> <div class="card-body"> <img src="' + field.image + '" height="100px" width="100px" style="float: left;"><p class="card-text">' + field.missedIngredientCount + '</p><input type="button" style="float: right" class="btn btn-md btn-primary" data-toggle="modal" data-target="#modal' + field.id + '" value="View Recipe"></div></div></div> </div>');
			$("#modals").append('<div class="modal fade dynModal" id="modal' + field.id + '" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button> <h4 class="modal-title">' + field.title + '</h4></div> <div class="modal-body"><div class="row"><div class="col-lg-4"><img class="img-fluid rounded" src="' + field.image + '" style="float: left;"></div><div class="col-lg-8"><p><b>Needed Ingredients: </b>' + missedIngr(field.missedIngredients) + '</p><b>Your Ingredients: </b>' + usedIngr(field.usedIngredients) + '</p></div></div><p><b>Instructions</b>' + instr(field.analyzedInstructions) + '</p></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="" style="float: left;">Save</button><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button></div></div></div></div>');
		}
	});
}

function instr(instructions) {
	var htmlString = "<ol>";
	for (var i = 0; i < instructions.length; i++) {
		htmlString += '<li>' + instructions[i] + '</li>';
	}
	htmlString += "</ol>";
	// console.log(htmlString);
	return htmlString;
}

function usedIngr(usedIngredients) {
	if (usedIngredients.length > 0) {
		var htmlString = "<ul>";
		// console.log(usedIngredients);
		for (var i = 0; i < usedIngredients.length; i++) {
			htmlString += '<li>' + usedIngredients[i] + '</li>';
		}
		htmlString += "</ul>";
		// console.log(htmlString);
		return htmlString;
	}
	else {
		return "None &#9785;"
	}
}

function missedIngr(missedIngredients) {
	var htmlString = "<ul>";
	// console.log(missedIngredients);
	for (var i = 0; i < missedIngredients.length; i++) {
		htmlString += '<li>' + missedIngredients[i] + '</li>';
	}
	htmlString += "</ul>";
	// console.log(htmlString);
	return htmlString;
}
