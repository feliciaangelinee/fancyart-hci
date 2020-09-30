

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


// var other = document.getElementById("other");
// var otherbox = document.getElementById("otherbox");
//     if(other.checked){
//         otherbox.style.display='block';
//     }




function validasi(form){

    if(form.uname.value ==""){
        alert("Username can't be empty");
        return false;
       
    }
    if(form.uname.tooShort){
        alert("Username must be more than 3 characters");
    }

    
    /*email*/
    if(form.email.value==""){
        alert("Email can't be empty");
        return false;
    }
    var checkemail=0;
    for (var i = 0; i < form.email.value.length; i ++){
        var ch = form.email.value.charAt(i);
        console.log("loop");
        console.log(ch)
        if(ch=="@"){
            console.log("@");
            checkemail=1; 
            
        }

    }

    if (checkemail==0){
        alert("Please fill your email correctly");
        return false;
    }


    /*password*/
    if(form.pass.value.length == 0) {
        alert("Password can't be empty");
        return false;
    }
    if(form.pass.value.length < 6){
        alert("Password should be atleasr 6 characters");
        return false;
    }
    for (var i = 0; i < form.pass.value.length; i ++){
        var ch = form.pass.value.charAt(i);
        if((ch < "A" || ch > "Z") && (ch < "a" || ch > "z") && (ch < "0" || ch > "9")){
            alert("Password can't contain any symbols");
            return false;
        }
    }



      /*gender*/
    if(form.gender.value==""){
        alert("Please fill your gender");
        return false;
    }

    if(form.country.value==""){
        alert("Please fill your nationality");
        return false;
    }

    if(form.address.value==""){
        alert("Please fill your address");
        return false;
    }

    if(form.agree.checked==false){
        alert("You have to agree to our terms and service");
        return false;
    }

    
 
    alert("You are registered!");
    return true;
}

$(document).ready(function(){
    var otherCheckbox = document.getElementById("other");
    var otherText = document.getElementById("otherValue");
    otherText.style.display = 'none';
  
    
    otherCheckbox.addEventListener('change', () => {
       
      if(otherCheckbox.checked) {
        otherText.style.display = 'block';
        otherText.value = '';
      } else {
        otherText.style.display = 'none';
      }
    });

});