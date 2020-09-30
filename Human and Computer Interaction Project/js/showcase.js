var modal = document.getElementById("myModal");

$(".img").on('click', function() {
  $("#myModal").slideDown( "fast", function() {
    $("#myModal").show();
  });
  $("#myModal").find("#modal-img").attr("src",$(this).find("img").attr("src"));
})


window.onclick = function(event) {
  if (event.target == modal) {
    $("#myModal").slideUp( "fast", function() {
      $("#myModal").hide();
    });
  }
}

function showbox(){
    $("#signinbox").show();
    $("#bgcontainer").show();
}

function hidebox(){
    $("#signinbox").hide();
    $("#bgcontainer").hide();
}

function login(form){
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
