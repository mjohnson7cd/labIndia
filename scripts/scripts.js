$(function(){
    $("#togglePassword").click(function (){
        showPassword();
    });

    $("#pizza").click ( function () {
        iLoveYou();
        let pizzaCheck = $('#pizza').prop("checked");
        
        // if (pizzaCheck){
        //   $("#pizzaTalk").text("Thanks! We love you!");
        // } else {
        //   $("#pizzaTalk").text("Fine! Be that way! :( ");
        // }
    });

    function showPassword() {
        var x = document.getElementById("InputPassword1");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

      function iLoveYou() {
    
        $("#pizzaTalk").text("Thanks! We love you!");

        let pizzaCheck = $('#pizza').prop("checked");
        if (pizzaCheck){
          $("#pizzaTalk").text("Thanks! We love you!");
        } else {
          $("#pizzaTalk").text("Fine! Be that way! :( ");
        }
        // let x = document.getElementById("pizzaTalk");
        // x.innerText = "Thanks! We love you!";
      }

      $(document).on('click', "#ResetForm", function() {
		// Reset the form
		document.getElementById('signup').reset();
	});


});

  