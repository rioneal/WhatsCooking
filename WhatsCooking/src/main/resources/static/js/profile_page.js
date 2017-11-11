window.onload = function(){
    document.getElementById('username').innerHTML = "Username: " + sessionStorage.uname;
    document.getElementById('email').innerHTML = "Email: " + sessionStorage.email;

    var pref = JSON.parse(sessionStorage.getItem('preferences'));
    if(pref == null)
    {
        document.getElementById('vegan').checked = false;
        document.getElementById('veg').checked  = false;
        document.getElementById('df').checked = false;
        document.getElementById('gf').checked = false;

    }
    else{
        document.getElementById('vegan').checked = pref.vegan == 1 ? true : false;
        document.getElementById('veg').checked  = pref.vegetarian == 1 ? true : false;
        document.getElementById('df').checked = pref.dairyfree == 1 ? true : false;
        document.getElementById('gf').checked = pref.glutenfree == 1 ? true : false;
    }
}

function savePreferences(){

    var vegan = document.getElementById('vegan').checked ? 1 : 0;
    var veg = document.getElementById('veg').checked ? 1 : 0;
    var df = document.getElementById('df').checked ? 1 : 0;
    var gf = document.getElementById('gf').checked ? 1 : 0;

	$.ajax({
		url: 'http://localhost:8080/setPreferences?Uid=' + sessionStorage.uid, // The URL to add preferences
		type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		data: {
		    "Vegan": vegan,
		    "Veg": veg,
		    "gl": gf,
		    "df": df,
		    "other": ""

		}, // Additional parameters here
		dataType: 'json',
		async: false,
		success: function (data) {
			console.log(data);
		},
		error: function (err) {
			console.log(err);
		},
	});
}