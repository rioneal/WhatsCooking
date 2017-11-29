
function saveRecipe(rID) {
	for (var i = 0; i < recipeList.length; i++) {
		if (recipeList[i].id == rID) {
			recipe = recipeList[i];
			console.log(recipe);
			jsonrecipe = JSON.stringify(recipe);
			}
        }
		//	Make call to DB endpoint here
    $.ajax({
        url: 'http://localhost:8080/saveRecipe', // The URL to add a user
		type: "POST", // The HTTP Method, can be GET POST PUT DELETE etc
		data: {
		    "Uid":sessionStorage.getItem("uid"),
		    "Rid":rID,
		    "Rinfo": jsonrecipe

		}, // Additional parameters here
		dataType: 'json',
		async: false,
		success: function (data) {
		    console.log(data);
		},
		error: function (err) {
			console.log("error");
		},
	});
}


window.onload = function() {

    getSaved();
    getGrocery();
}

var savedFunctionRecipes=[]
function getSaved() {

    $.ajax({
        url: 'http://localhost:8080/getSavedList', // The URL to add a user
        type: "GET", // The HTTP Method, can be GET POST PUT DELETE etc
        data: {
            "Uid": sessionStorage.getItem("uid")
        }, // Additional parameters here
        dataType: 'json',
        async: false,
        success: function (data) {
            var savedList = [];
            data.forEach(function (e) {
                savedList.push(JSON.parse(e));

            })
            console.log(savedList);
            savedFunctionRecipes=savedList
              savedMap(savedList);

        },
        error: function (err) {
            console.log("No saved recipes");
        },

    });
}

function getSavedRecipes(){
    return savedFunctionRecipes
}

