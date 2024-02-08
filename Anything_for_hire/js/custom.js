$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('scroll-nav');
    }
    else {
        $('nav').removeClass('scroll-nav');
    }
});

// Form Validation
$(document).ready(function() {
    $("#contact-form").validate({
      submitHandler: function(form) {        
        var first = document.getElementById("firstName").value;        
        alert( "Hi"+" "+ first +" " +" Your Details Submitted Successfully");
        window.location.href = "form.html"       
        // form.submit();
      },
      rules: {
        firstName : {
          required: true
        },
        lastName: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        mobNumber: {
            required: true,
            number:true,
            minlength:10,
            maxlength:10           
        },
        message: {
            required:true,
            minlength: 5
        }
    }
});

$("#mobNumber").keypress(function(e){
  var keyCode = e.which;
  if ( (keyCode != 8 || keyCode ==32 ) && (keyCode < 48 || keyCode > 57)) { 
    return false;
  }
});

$("input, textarea").focusout(function() {  
  if($(this).val()=='') {  
      $(this).css('border', 'solid 1px red');  
  }           
      
    $("input, textarea").keydown(function() {  
      if($(this).val().length) {  
          $(this).css('border', 'solid 0.5px #ced4da');  
      }
    }); 
  
}); 

});

// slider
