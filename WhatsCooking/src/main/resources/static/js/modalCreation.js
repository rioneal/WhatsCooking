function modalCreate(id) {
	$('.dynModal').remove();
	console.log(id);
	var field;
	for (var i=0;i<recipeList.length;i++){
		if(recipeList[i].id==id) {
			field = recipeList[i]
			console.log(field)
		}
	}
	$("#modals").append('<div class="modal fade dynModal" id="modal'+field.id+'" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button> <h4 class="modal-title">' + field.title + '</h4></div> <div class="modal-body"><div class="row"><div class="col-lg-4"><img class="img-fluid rounded" src="' + field.image + '" HEIGHT="250" WIDTH="220" BORDER="0" style="float: left;"></div><div class="col-sm-offset-1 col-sm-6"><p><b>Missed Ingredients</b><p>'+missedIngr(field.missedIngredients)+'</p><b>Your Ingredients: </b>'+usedIngr(field.usedIngredients)+'</p></div></div><p><b>Instructions</b>'+instr(field.analyzedInstructions)+'</p></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="" style="float: left;" onclick="saveRecipe(' + field.id + ')">Save</button><button type="button" class="btn btn-primary" data-dismiss="" style="float: left;" onclick="saveGrocery(' + field.id + ')">Add to Grocery List</button><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button></div></div></div></div>');
}

function savedModalCreate(id) {
    $('.dynModal').remove();
    console.log(id);
    var savedList=getSavedRecipes();
	console.log(savedList);
    var field;
        for (var i = 0; i < savedList.length; i++) {
            if (savedList[i].id == id) {
                field = savedList[i]
                console.log(field)
            }
        }
        $("#savedModals").append('<div class="modal fade dynModal" id="modal'+field.id+'" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button> <h4 class="modal-title">' + field.title + '</h4></div> <div class="modal-body"><div class="row"><div class="col-lg-4"><img class="img-fluid rounded" src="' + field.image + '" HEIGHT="250" WIDTH="220" BORDER="0" style="float: left;"></div><div class="col-sm-offset-1 col-sm-6"><p><b>Ingredients: </b>' + randIngr(field.extendedIngredients) + '</p></div></div><p><b>Instructions</b>'+instr(field.analyzedInstructions)+'</p></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="" style="float: left;" onclick="saveGrocery(' + field.id + ')">Add to Grocery List</button><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button></div></div></div></div>');
}

function instr(instructions) {
	var instructionList=[];
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

function usedIngr(usedIngredients) {
	var usedIngredientList=[];
	for (var j = 0; j < usedIngredients.length; j++) {
		var uIngredient = usedIngredients[j];
		usedIngredientList.push(uIngredient.originalString)
	}
	if (usedIngredients.length > 0) {
		var htmlString = "<ul>";
		// console.log(usedIngredients);
		for (var i = 0; i < usedIngredientList.length; i++) {
			htmlString += '<li>' + usedIngredientList[i] + '</li>';
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
	var missedIngredientList=[];
	for (var l = 0; l < missedIngredients.length; l++) {
		var mIngredient = missedIngredients[l];
		missedIngredientList.push(mIngredient.originalString)
	}
	var htmlString = "<ul>";
	// console.log(missedIngredients);
	for (var i = 0; i < missedIngredientList.length; i++) {
		htmlString += '<li>' + missedIngredientList[i] + '</li>';
	}
	htmlString += "</ul>";
	// console.log(htmlString);
	return htmlString;
}