

function showbox(){
    $("#signinbox").show();
    $("#bgcontainer").show();
    
}

function hidebox(){
    $("#signinbox").hide();
    $("#bgcontainer").hide();
    
}
$(document).ready(function(){
  
    $("#signinbox").hide();
 
 
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