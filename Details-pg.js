function validateForm() {
    // Get the values of the form fields.
    const fullName = document.getElementById("fullName").value;
    const mobileNumber = document.getElementById("mobileNumber").value;
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirmEmail").value;
    const gender = document.getElementById("gender").value;
  
    // Check if the form fields are valid.
    if (fullName === "") {
      alert("Please enter your full name.");
      return false;
    }
  
    if (mobileNumber === "") {
      alert("Please enter your mobile number.");
      return false;
    }
  
    if (email === "") {
      alert("Please enter your email address.");
      return false;
    }
  
    if (confirmEmail !== email) {
      alert("The email addresses do not match.");
      return false;
    }
  
    if (gender === "") {
      alert("Please select your gender.");
      return false;
    }
  
    // The form is valid, so return true.
    return true;
    
  }
  
  document.getElementById("submit").addEventListener("click", validateForm);
   