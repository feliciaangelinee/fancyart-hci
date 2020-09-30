function showbox(){
    $("#signinbox").show();
    $("#bgcontainer").show();
    
}

function hidebox(){
    $("#signinbox").hide();
    $("#bgcontainer").hide();
    
}



function login(form){

    console.log("logincheck");
    if(form.username.value ==""){
        alert("Username can't be empty");
        return false;
       
    }
    if(form.password.value.length == 0) {
        alert("Password can't be empty");
        return false;
    }
    hidebox();
    return true;
}

