function verifyUser() {

	var username = document.getElementById("username");
	var password = document.getElementById("inputPassword");

	$.ajax({
		url: 'http://localhost:8080/findUser?UName=' + username.value,
		type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		data: {
			"pw": Crypto.SHA256(password.value)
		},
		dataType: 'json',
		async: false,
		success: function (data) {
			if (data.uid > 0 && data.uname == username.value) {
				alert("Welcome " + data.uname + "!");
				window.sessionStorage.setItem('uid', data.uid);
				window.sessionStorage.setItem('uname', data.uname);
				window.sessionStorage.setItem('email', data.email)
				window.sessionStorage.setItem('loggedIn', true);
                setPreferences(data.uid);
                window.location.href = "/profile";
			} else {
				document.getElementById('warning').hidden = false;
			}
		},
		error: function (err) {
		    console.log(err);
		    document.getElementById('warning').hidden = false;
		},
	});
}
function setPreferences(uid){

	$.ajax({
		url: 'http://localhost:8080/getPreferences?Uid=' + uid,
		type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		data: {

		},
		dataType: 'json',
		async: false,
		success: function (data) {
			if (data != null) {
				window.sessionStorage.setItem('preferences', JSON.stringify(data));
			} else {
				console.log("no preferences found");
				window.sessionStorage.setItem('preferences', null);
			}
		},
		error: function (err) {
		    console.log("Preferences not found");
		    window.sessionStorage.setItem('preferences', null);
		},
	});

}