$(document).ready(function(){
  $(".click1").click(function(){
    $(".image1").toggle();
    $(".paragraph1").toggle();
  });

  $(".click2").click(function(){
    $(".image2").toggle();
    $(".paragraph2").toggle();
  });

  $(".click3").click(function(){
    $(".image3").toggle();
    $(".paragraph3").toggle();
  });
})

  function myFunction(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name == "" || email == "" || message == ""){
      alert ("enter your name, email and a commment")
    }
     else alert( name + " ,your message is well received");
  }