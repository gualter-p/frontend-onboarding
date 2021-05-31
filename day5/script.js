const REQUIRED = "This field is required"
const INVALID_EMAIL = "Invalid email."
const NO_CONTENT = ""
const FORM_SUCCESS = "Form submitted with success."
const RED_BORDER = "red"
const BLUE_BORDER = "lightblue"

var form = document.getElementById("form")

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

    var success = validateForm()

    if(success) {
        formSuccess.innerHTML = FORM_SUCCESS;
        form.reset();
    }
})

const validateForm = _ => {

    var success = true;

    if(firstName.value === '') {
        invFirstName.innerHTML = REQUIRED
        firstName.style.borderColor = RED_BORDER
        success = false
    } else {
        invFirstName.innerHTML = NO_CONTENT
        firstName.style.borderColor = BLUE_BORDER
    }

    if(lastName.value === '') { 
        invLastName.innerHTML = REQUIRED
        lastName.style.borderColor = RED_BORDER
        success = false
    } else {
        invLastName.innerHTML = NO_CONTENT
        lastName.style.borderColor = BLUE_BORDER
    }
  
    if(email.value === '')  {
        invEmail.innerHTML = REQUIRED
        email.style.borderColor = RED_BORDER
        success = false
    } else {
        invEmail.innerHTML = NO_CONTENT
        email.style.borderColor = BLUE_BORDER
        if(!isEmailValid(email.value)){
            invEmail.innerHTML = INVALID_EMAIL 
            email.style.borderColor = RED_BORDER
        }
    }  
 
    if(phoneNumber.value === '') {
        invPhoneNumber.innerHTML = REQUIRED
        phoneNumber.style.borderColor = RED_BORDER
        success = false
    } else {
        invPhoneNumber.innerHTML = NO_CONTENT
        phoneNumber.style.borderColor = BLUE_BORDER
    }
 
    if(!checkBoxYes.checked && !checkBoxNo.checked){
        invCheckBox.innerHTML = REQUIRED
        success = false
    } else {
        invCheckBox.innerHTML = NO_CONTENT
    } 
 
    if(probDetails.value === '') {
        invProbDetails.innerHTML = REQUIRED
        probDetails.style.borderColor = RED_BORDER
        success = false
    } else {
        invProbDetails.innerHTML = NO_CONTENT
        probDetails.style.borderColor = BLUE_BORDER
    }

    return success
}

const isEmailValid = email => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

const showTextBox = val => {
    var element = document.getElementById('detailstbox');
    val === "techprobs" || val === "otherprobs" ? element.style.display='block' : element.style.display='none';
}

