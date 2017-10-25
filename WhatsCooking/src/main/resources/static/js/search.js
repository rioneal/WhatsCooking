
function search(searchString) {
	$.ajax({
		url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients', // The URL to the API. You can get this in the API page of the API you intend to consume
		type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		data: {
			"ingredients": searchString,
			"fillIngredients": true,
			"number": 1
		}, // Additional parameters here
		dataType: 'json',
		success: function (data) {
			console.log(data);
		},
		error: function (err) {
			alert(err);
		},
		beforeSend: function (xhr) {
			xhr.setRequestHeader("X-Mashape-Key", "FEVql0chRwmshPvhp3dPwwUBrnIEp1YtlVOjsnTrd2lxtjFWjW"); // Enter here your Mashape key
		}
	});
}