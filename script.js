
function validate() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let validation_message;
    let is_valid;

    if (name != "") {
        is_valid = true;       
    }
    else {
        validation_message = "Name can not be empty!";
        is_valid = false; 
    }

    if (email != "") {
        is_valid = true;
    }
    else {
        validation_message = "Email can not be empty!";
        is_valid = false; 
    }

    if (message != "") {
        is_valid = true;
    }
    else{
        validation_message = "Message can not be empty!";
        is_valid = false;
    }
    
    if(is_valid) {
        alert("You have submitted your contact information successfully!");
    }
    else {
        alert(validation_message);
    }
}
