
function password_match(){
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("re-enter_password");

    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
        var username = document.getElementById("user_name");
        var email = document.getElementById("email");
        submit(username.value, email.value, Crypto.SHA256(password.value)); //passes values to submit user to DB
    }
}

function submit(username, email, password){
	$.ajax({
		url: 'http://localhost:8080/db/add?UName=' + username, // The URL to add a user
		type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		data: {
		    "email":email, //adds email
		    "pw":password, //adds hashed password
		    "verified": 0

		}, // Additional parameters here
		dataType: 'json',
		success: function (data) {
			console.log(data);
		},
		error: function (err) {
			console.log(err);
		},
	});
}