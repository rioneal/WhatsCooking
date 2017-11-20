function saveGrocery(rID) {
	for (var i = 0; i < recipeList.length; i++) {
		if (recipeList[i].id == rID) {
			recipe = recipeList[i];
			console.log(recipe);
			jsonrecipe = JSON.stringify(recipe);
			}
        }
		//	Make call to DB endpoint here
    $.ajax({
        url: 'http://localhost:8080/saveGrocery', // The URL to add a user
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


function getGrocery(){

        $.ajax({
            url: 'http://localhost:8080/getGroceryList', // The URL to add a user
    		type: "GET", // The HTTP Method, can be GET POST PUT DELETE etc
    		data: {
    		    "Uid":sessionStorage.getItem("uid")
    		}, // Additional parameters here
    		dataType: 'json',
    		async: false,
    		success: function (data) {
    		    var groceryList=[];
    		    data.forEach(function(e){
    		        groceryList.push(JSON.parse(e));
    		    })
    		    console.log(groceryList);
    		},
    		error: function (err) {
    			console.log("No recipes in Grocery List");
    		},
    	});

}