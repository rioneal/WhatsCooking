$(document).ready(function () {
	$(".recipeSubmit").click(function () {
		ingData = {};
		var x = $(".ingredient").serializeArray();
		$.each(x, function (i, field) {
			ingData[field.name + i] = field.value;
		});
		print(ingData);
		var y = $("form").serializeArray();
		$.each(y, function (i, field) {
			console.log(field.name + ":" + field.value);
		});
	});
});

function print(data) {
	console.log(data);
}
