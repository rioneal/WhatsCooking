function loggedIn(){
    if(window.sessionStorage.uid == null){
        location.href = "/";
    }
    else{
        location.href = "/profile";
    }
}