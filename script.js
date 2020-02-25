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

  $(".port1").hover(
    function() {
      $(".project1").show("");
    },
    function() {
      $(".project1").hide("");
    }
  );
  $(".port2").hover(
    function() {
      $(".project2").show("");
    },
    function() {
      $(".project2").hide("");
    }
  );
  $(".port3").hover(
    function() {
      $(".project3").show("");
    },
    function() {
      $(".project3").hide("");
    }
  );
  $(".port4").hover(
    function() {
      $(".project4").show("");
    },
    function() {
      $(".project4").hide("");
    }
  );
  $(".port5").hover(
    function() {
      $(".project5").show("");
    },
    function() {
      $(".project5").hide("");
    }
  );
  $(".port6").hover(
    function() {
      $(".project6").show("");
    },
    function() {
      $(".project6").hide("");
    }
  );
  $(".port7").hover(
    function() {
      $(".project7").show("");
    },
    function() {
      $(".project7").hide("");
    }
  );
  $(".port8").hover(
    function() {
      $(".project8").show("");
    },
    function() {
      $(".project8").hide("");
    }
  );

})

  function myFunction(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name == "" || email == "" || message == ""){
      alert ("Please enter your name, email and add a commment!")
    }
     else alert( name + " ,thanks for your message, it is well received.");
  }