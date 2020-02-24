$(document).ready(function(){
  $(".img1").click(function(){
    $("p1").toggle();
  });

});









function received(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("textarea").value;
  if (name == "" || email == "" || message == ""){
    document.getElementsByClassName("forms").innerHTML =
    alert ("Please enter your details and a message")
  }
   else {
     alert( name + " thank you for your message")
}