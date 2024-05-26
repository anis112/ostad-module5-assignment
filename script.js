
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

function confirm_basic_package_selection () {
    document.getElementById("info-message-basic-package").innerHTML="Thank you for choosing 1 basic package";
    document.getElementById("info-message-pro-package").innerHTML="";
}

function confirm_pro_package_selection() {
    document.getElementById("info-message-basic-package").innerHTML="";
    document.getElementById("info-message-pro-package").innerHTML="Thank you for choosing 1 pro package";
}

function basic_minus_button() {    
    document.getElementById("basic-room-info").innerHTML = "";   
}

function basic_plus_button() {    
    document.getElementById("basic-room-info").innerHTML = "1 room";    
}

function pro_minus_button() {    
    document.getElementById("pro-room-info").innerHTML = "";   
}

function pro_plus_button() {    
    document.getElementById("pro-room-info").innerHTML = "1 room";    
}
