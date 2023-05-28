function validFirstName() {
    var errorMessage = "";
    var validFirstname=false;
    var firstname = document.getElementById("firstname").value;
    
    if (firstname==="null" || firstname==="" || firstname.length > 20)
        errorMessage = "<p>First Name is required and cannot be greater than 20 characters</p>";
    else
       validFirstname = true;
      
    document.getElementById("error1").innerHTML = errorMessage;
    return validFirstname;
}  
    

function validLastName() {
    var errorMessage = "";
    var validLastname=false;
    var lastname = document.getElementById("lastname").value;

    if (lastname==="null" || lastname==="" || lastname.length > 20)
        errorMessage = "<p>Last Name is required and cannot exceed 20 characters.</p>";
    else
        validLastname = true;
        
    document.getElementById("error2").innerHTML = errorMessage;
    return validLastname;
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
         
    document.getElementById("error3").innerHTML = errorMessage;
    return validEmail;
}
    
      
function validPhone() {
    var errorMessage = "";
    var validphone = false;
    var phone = document.getElementById("phone").value;
        
    if (isNaN(phone) || phone.length > 15 || phone===null || phone==="")
        errorMessage = "<p>Invalid phone number.</p>";
    else
        validphone = true;
        
    document.getElementById("error11").innerHTML = errorMessage;
    return validphone;
}


function validUser() {
    var errorMessage = "";
    var validUserName=false;
    var user = document.getElementById("user").value;  
        
    if (user==="null" || user==="" || user.length > 12)
        errorMessage = "<p>Username is required and cannot exceed 12 characters.</p>";
    else
        validUserName = true;
        
    document.getElementById("error4").innerHTML = errorMessage;
    return validUserName;
}


function validPassword() {
    var errorMessage = "";
    var validPass=false;
    var password = document.getElementById("password").value;
            
    if (password==="null" || password==="" || password.length > 7)
        errorMessage = "<p>Password is required and cannot exceed 7 characters.</p>";
    else
        validPass = true;

    document.getElementById("error5").innerHTML = errorMessage;
    return validPass;
}


function validAddress() {
    var errorMessage = "";
    var validAdr=false;
    var address = document.getElementById("address").value;
        
    if (address==="null" || address==="")
        errorMessage = "<p>Address field is required.</p>";
    else
        validAdr = true;

    document.getElementById("error6").innerHTML = errorMessage;
    return validAdr;
}


function validCountry() {
    var errorMessage = "";
    var validcountry=false;
    var country = document.getElementById("country").value;
        
    if (country==="000")
        errorMessage = "<p>Country field is required.</p>";
    else
        validcountry = true;
        
    document.getElementById("error7").innerHTML = errorMessage;
    return validcountry;
}


function validState() {
    var errorMessage = "";
    var validstate=false;
    var state = document.getElementById("state").value;   
        
    if (state==="00")
        errorMessage = "<p>State field is required.</p>";
    else
        validstate = true;
        
    document.getElementById("error8").innerHTML = errorMessage;
    return validstate;
}


function validCity() {
    var errorMessage = "";
    var validcity=false;
    var city = document.getElementById("city").value;
        
    if (city==="null" || city==="")
        errorMessage = "<p>City field is required.</p>";
    else
        validcity = true;
        
    document.getElementById("error9").innerHTML = errorMessage;
    return validcity;
}


function validZipCode() {  
    var errorMessage = "";
    var validzip=true;
    var zipcode = document.getElementById("zipcode").value;
    var country = document.getElementById("country").value;

    if (country === "010" && (zipcode==="null" || zipcode==="" || zipcode.length > 5)) {
        errorMessage = "<p>Zip Code field is required and cannot exceed 5 characters.</p>";
        validzip = false;
    }
        
    document.getElementById("error10").innerHTML = errorMessage;
    return validzip;
}


function validateForm() {
    var fn = validFirstName();
    var ln = validLastName();
    var em = validEMail();
    var ph = validPhone();
    var un = validUser();
    var pw = validPassword();
    var ad = validAddress();
    var c = validCountry();
    var s = validState();
    var ct = validCity();
    var zc = validZipCode();

    if (fn && ln && em && ph && un && pw && ad && c && s && ct && zc) {
        return true;
    }

    return false;
}