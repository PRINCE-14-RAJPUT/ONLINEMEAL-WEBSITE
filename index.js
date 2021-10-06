function clearErrors() {

    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }


}
function seterror(id, error) {
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm() {
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    var FirstCharStr1 = /^@[A-Za-z]/;
    var FirstCharStr2 = /^_[A-Za-z]/;
    var FirstCharStr3 = /^[0-9]/;
    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0) {
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }
    if (name.length === 0) {
        seterror("name", "*Pls Enter a your name");
        alert("You must enter a username.");
        return false;
    }


    if (FirstCharStr1.test(name)) {
        seterror("name", "*Please enter a valid name");
        alert("You must enter valid username");
        return false;
    }
    if (FirstCharStr2.test(name)) {
        seterror("name", "*Please enter a valid name");
        alert("You must enter valid username");
        return false;
    }
    if (FirstCharStr3.test(name)) {
        seterror("name", "*Please enter a valid name");
        alert("You must enter valid username");
        return false;
    }


    var email = document.forms['myForm']["femail"].value;
    if (email.length < 5) {
        seterror("email", "*Email length is too long");
        alert("Email should not be so small");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10) {
        seterror("phone", "*Phone number should be of 10 digits!");
        alert("You must enter 10 digit of your phone number");
        returnval = false;
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
        document.myForm.femail.focus();
        return true;
    }
    else {
        seterror("email", "*Please Enter a valid Email address");
        alert("You have entered an invalid email address!");
        document.myForm.femail.focus();
        return false;
    }
    return returnval;
}

