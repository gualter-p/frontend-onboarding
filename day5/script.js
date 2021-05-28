var form = document.getElementById("form")

const REQUIRED = "This field is required"
const INVALID_EMAIL = "Invalid email."
const NO_ERROR = ""

var firstName = document.getElementById("fname")
var lastName = document.getElementById("lname")
var email = document.getElementById("eaddress")
var phoneNumber = document.getElementById("pnumber")
var checkBoxYes = document.getElementById("checkyes")
var checkBoxNo = document.getElementById("checkno")
var probDetailsBox = document.getElementById("detailstbox")
var probDetails = document.getElementById("probdetails")
var formSuccess = document.getElementById("success")

var invFirstName = document.getElementById("invalidfname")
var invLastName = document.getElementById("invalidlname")
var invEmail = document.getElementById("invalideaddress")
var invPhoneNumber = document.getElementById("invalidpnumber")
var invCheckBox = document.getElementById("invalidcheckbox")
var invProbDetails = document.getElementById("invalidprobdetails")

form.addEventListener("submit", e => {

    e.preventDefault()

    var success = true;

    if(firstName.value === '') {
        invFirstName.innerHTML = REQUIRED
        firstName.style.borderColor = "red"
        success = false
    } else {
        invFirstName.innerHTML = NO_ERROR
        firstName.style.borderColor = "lightblue"
    }

    if(lastName.value === '') { 
        invLastName.innerHTML = REQUIRED
        lastName.style.borderColor = "red"
        success = false
    } else {
        invLastName.innerHTML = NO_ERROR
        lastName.style.borderColor = "lightblue"
    }

    if(email.value === '')  {
        invEmail.innerHTML = REQUIRED
        email.style.borderColor = "red"
        success = false
    } else {
        invEmail.innerHTML = NO_ERROR
        email.style.borderColor = "lightblue"
        if(!isEmailValid(email.value)){
            invEmail.innerHTML = INVALID_EMAIL 
            email.style.borderColor = "red" 
        }
    }    
       
    if(phoneNumber.value === '') {
        invPhoneNumber.innerHTML = REQUIRED
        phoneNumber.style.borderColor = "red"
        success = false
    } else {
        invPhoneNumber.innerHTML = NO_ERROR
        phoneNumber.style.borderColor = "lightblue"
    }

    if(!checkBoxYes.checked && !checkBoxNo.checked){
        invCheckBox.innerHTML = REQUIRED
        success = false
    } else {
        invCheckBox.innerHTML = NO_ERROR
    } 
     
    if(probDetails.value === '') {
        invProbDetails.innerHTML = REQUIRED
        probDetails.style.borderColor = "red"
        success = false
    } else {
        invProbDetails.innerHTML = NO_ERROR
        probDetails.style.borderColor = "lightblue"
    }
    // In case we have a valid form
    if(success) {
        probDetailsBox.style.display = "none"
        formSuccess.innerHTML = "Form submitted with success."
    }
})

const clearErrors = _ => {
    document.querySelectorAll('[id^="invalid"]').forEach( el => {
        console.log(el)
        el.style.display = "none"
    })
}

const isEmailValid = email => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

const showTextBox = val => {
    var element = document.getElementById('detailstbox');
    val === "techprobs" || val === "otherprobs" ? element.style.display='block' : element.style.display='none';
}

