function map(recipe) {
	var count = 0;
	$.each(recipe, function (i, field) {
		count++;
		if (count <= 5) {
			$("#recipeList").append('<div class="row"><div class="col-lg-8 mb-12"><div class="card h-100"><h4 class="card-header">' + field.title + ' <small style="float: right">Preparation Time: <b>' + field.readyInMinutes + ' minutes</b></small> </h4> <div class="card-body"> <img src="' + field.image + '" height="100px" width="100px" style="float: left;"><p class="card-text">' + field.missedIngredientCount + '</p><input type="button" style="float: right" class="btn btn-md btn-primary" value="View Recipe" onclick=""></div></div></div> </div>');
			$("#recipeList").append('<br>');
		}
	});
}
