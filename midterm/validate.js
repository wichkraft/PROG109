function validName() {
    var errorMessage = "";
    var validname=false;
    var name = document.getElementById("name").value;
    
    if (name==="null" || name==="" || name.length > 20)
        errorMessage = "<p>Name is required and cannot be greater than 20 characters</p>";
    else
       validname = true;
      
    document.getElementById("error1").innerHTML = errorMessage;
    return validname;
}  
    
    
function validEMail() {
    var errorMessage = "";
    var validEmail = false;
    var userEmail = document.getElementById("email").value;
        
    var at = userEmail.indexOf("@");
    var dot = userEmail.lastIndexOf(".");
         
    if (userEmail==="null" || userEmail==="" || at < 1 || dot < at+2 || dot+2 >= userEmail.length) 
        errorMessage = "<p>Invalid email.</p>";
    else
        validEmail = true;
         
    document.getElementById("error2").innerHTML = errorMessage;
    return validEmail;
}


function validMessage() {
    var errorMessage = "";
    var validMsg=false;
    var message = document.getElementById("msg").value;
        
    if (message==="null" || message==="")
        errorMessage = "<p>Please enter a message.</p>";
    else
        validMsg = true;

    document.getElementById("error3").innerHTML = errorMessage;
    return validMsg;
}


function validateForm() {
    var n = validName();
    var em = validEMail();
    var m = validMessage();

    if (n && em && m) {
        return true;
    }
    return false;
}