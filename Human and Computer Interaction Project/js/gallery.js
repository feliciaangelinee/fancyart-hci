var column_for_media = document.getElementById("column-for-media");
var show_for_media = document.getElementById("show-for-media");

show_for_media.innerHTML = column_for_media.innerHTML;

var modal = document.getElementById("myModal");

$(".img").on('click', function() {
  $("#myModal").slideDown( "fast", function() {
    $("#myModal").show();
  });
  $("#myModal").find("#modal-img").attr("src",$(this).find("img").attr("src"));
  $("#myModal").find("h2").text($(this).find("h3").text());
  $("#myModal").find("p").text($(this).find("input").attr("value"));
  $("#myModal").find("span").text($(this).find("p").text());
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
