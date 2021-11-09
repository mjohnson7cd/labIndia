$(function(){
    $("#togglePassword").click(function (){
        showPassword();
    });

    $("#pizzaCheckbox").click ( function () {
        thankYouMessage();
        let pizzaCheck = $('#pizzaCheckbox').prop("checked");
        
    });


    isEmail(documemnt.getElementById('InputEmail'));

    validatePhone(document.getElementById('phoneNumInput'));

    function showPassword() {
        var x = document.getElementById("InputPassword");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

      function thankYouMessage() {
    
        $("#pizzaOutput").text("Thanks! We love you!");

        let pizzaCheck = $('#pizzaCheckbox').prop("checked");
        pizzaCheck ? $("#pizzaOutput").text("Thanks! We love you!") : $("#pizzaOutput").text("Fine! Be that way! :( ");
      }

      function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
      }

      function validatePhone(txtPhone) {
        var a = document.getElementById(txtPhone).value;
        var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
        if (filter.test(a)) {
            return true;
        }
        else {
            return false;
        }
    }

      $(document).on('click', "#ResetForm", function() {
		// Reset the form
		document.getElementById('signup').reset();
	});


});