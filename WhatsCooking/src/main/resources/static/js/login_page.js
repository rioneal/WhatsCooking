function verifyUser() {

	var username = document.getElementById("username");
	var password = document.getElementById("inputPassword");

	$.ajax({
		url: 'http://localhost:8080/findUser?UName=' + username.value,
		type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		data: {
			"pw": Crypto.SHA256(password.value)
		},
		dataType: "text",
		async: false,
		success: function (data) {
			if (data > 0) {
				alert("Welcome " + username.value + "!");
				sessionStorage.setItem('uid', data);
				sessionStorage.setItem('loggedIn', true);
			}
			else if (data == -2) {
				username.setCustomValidity("User Not Found");
			} else {
				username.setCustomValidity("Password or Username is Incorrect");
			}
		},
		error: function (err) {
			console.log(err);
		},
	});
}