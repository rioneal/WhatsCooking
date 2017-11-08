$(document).ready(function () {
	$(".recipeSubmit").click(function () {
		ingData = {};
		var x = $(".ingredient").serializeArray();
		$.each(x, function (i, field) {
			ingData[field.name + i] = field.value;
		});
		var ingredientList = [];
		for (key in ingData) {
			ingredientList.push(ingData[key]);
		}
		var ingredientString = ingredientList.join();
		search(ingredientString);
	});
});

function print(data) {
	console.log(data);
}
