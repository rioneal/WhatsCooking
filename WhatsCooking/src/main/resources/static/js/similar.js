function similar(recipes) {
	var id = recipes[0].id;
	$.ajax({
		url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + '/similar', // The URL to the API. You can get this in the API page of the API you intend to consume
		type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		// Additional parameters here
		dataType: 'json',
		success: function (data) {
			// console.log(data.results);
			// console.log(JSON.stringify(data.results));
			carousel(data)
		},
		error: function (err) {
			alert(err);
			console.log(err);
		},
		beforeSend: function (xhr) {
			xhr.setRequestHeader("X-Mashape-Key", "FEVql0chRwmshPvhp3dPwwUBrnIEp1YtlVOjsnTrd2lxtjFWjW"); // Enter here your Mashape key
		}
	});
}

function carousel(recipes) {

	var count = 0;
	// console.log(recipe);
	$("#carouselSaved").append('<br/><br/><h3 style="text-align: center">Recipe Recommendations Based on Your Saved Recipes</h3>')
	$.each(recipes, function (i, field) {
		count++;
		// console.log(field);
		if (count <= 3) {
			$("#carouselSaved").append('<div class="col-md-4"><div class="thumbnail"><a href="#"><img src="https://spoonacular.com/recipeImages/' + field.image + '" alt="' + field.title + '" style="width:100px;height:100px"><div class="caption"><p>'+field.title+'</p></div></a></div></div>')
		}
	});
}