

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

$(document).ready(function(){
  
$("#right").click(function(){

    //yg dia lakuin itu pindahin activenya ke image selanjutnya
        var current = $(".active");
        var next = current.next();

        if(next.length){
            current.removeClass("active").css("z-index", -10);
            next.addClass("active").css("z-index", 10);
        }
   });

   $("#left").click(function(){
        var current = $(".active");
        var prev = current.prev();

        if(prev.length){
            current.removeClass("active").css("z-index", -10);
            prev.addClass("active").css("z-index", 10);
        }
   });
});