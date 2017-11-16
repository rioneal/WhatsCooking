function password_match(){
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("re-enter_password");

    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
        document.getElementById('warning').hidden = false;
    } else {
        confirm_password.setCustomValidity('');
        var username = document.getElementById("user_name");
        var email = document.getElementById("email");
        var pw = SHA256_hash(password.value);
        submit(username.value, email.value, pw); //passes values to submit user to DB
    }
}

function submit(username, email, password){
	$.ajax({
		url: 'http://localhost:8080/addUser?UName=' + username, // The URL to add a user
		type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		data: {
		    "email":email, //adds email
		    "pw":password, //adds hashed password
		    "verified": 0

		}, // Additional parameters here
		dataType: 'json',
		async: false,
		success: function (data) {
			window.sessionStorage.setItem('uid', data.uid);
			window.sessionStorage.setItem('uname', data.uname);
			window.sessionStorage.setItem('email', data.email);
			window.sessionStorage.removeItem('preferences');
			window.location.href = "/profile";
		},
		error: function (err) {
			console.log("error");
		},
	});
}