
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
    else {
        validation_message = "Message can not be empty!";
        is_valid = false;
    }

    if (is_valid) {
        alert("You have submitted your contact information successfully!");
    }
    else {
        alert(validation_message);
    }
}

function confirm_basic_package_selection() {
    document.getElementById("info-message-basic-package").innerHTML = "Thank you for choosing 1 basic package";
    document.getElementById("info-message-pro-package").innerHTML = "";
}

function confirm_pro_package_selection() {
    document.getElementById("info-message-basic-package").innerHTML = "";
    document.getElementById("info-message-pro-package").innerHTML = "Thank you for choosing 1 pro package";
}

let basic_counter = 0;
let pro_counter = 0;

let basic_package_base_price = 199.0;
let pro_package_base_price = 249.0;

let basic_room_caption = "room";
let pro_room_caption = "room";


if(basic_counter == 0){
    document.getElementById("basic-total-price").innerHTML = basic_package_base_price;
    document.getElementById("basic-room-info").innerHTML = "1 room";   
    basic_counter = 1; 
}

if(pro_counter == 0){
    document.getElementById("pro-total-price").innerHTML = pro_package_base_price;
    document.getElementById("pro-room-info").innerHTML = "1 room";
    pro_counter = 1;
}

document.getElementById("add-basic-package").addEventListener("click", add_basic_package);
document.getElementById("remove-basic-package").addEventListener("click", remove_basic_package);

document.getElementById("add-pro-package").addEventListener("click", add_pro_package);
document.getElementById("remove-pro-package").addEventListener("click", remove_pro_package);

function add_basic_package() { 
    console.log("Basic Counter=" + basic_counter);
    if(basic_counter > 1) {
        basic_room_caption = "rooms";
    } 

    if (basic_counter > 0) { 
        basic_counter = basic_counter + 1;         
        document.getElementById("basic-room-info").innerHTML = basic_counter + " " + basic_room_caption;
        document.getElementById("basic-total-price").innerHTML =  basic_package_base_price*basic_counter;
        
    }
}

function remove_basic_package() {  
    console.log("Basic Counter=" + basic_counter);
    if(basic_counter > 1) {
        basic_room_caption = "rooms";
    }     

    if (basic_counter > 1) { 
        basic_counter = basic_counter - 1;               
        document.getElementById("basic-room-info").innerHTML = basic_counter + " " + basic_room_caption;
        document.getElementById("basic-total-price").innerHTML = basic_package_base_price*basic_counter;        
    }
}

function add_pro_package() { 
    console.log("Pro Counter=" + pro_counter);  
    if(pro_counter > 1) {
        pro_room_caption = "rooms";
    }      
    if (pro_counter > 0) { 
        pro_counter = pro_counter + 1;
        document.getElementById("pro-room-info").innerHTML = pro_counter + " " + pro_room_caption;
        document.getElementById("pro-total-price").innerHTML = pro_package_base_price*pro_counter;        
    }
}

function remove_pro_package() {  
    console.log("Pro Counter=" + pro_counter);  
    if(pro_counter > 1) {
        pro_room_caption = "rooms";
    }         
    if (pro_counter > 1) {    
        pro_counter = pro_counter - 1;    
        document.getElementById("pro-room-info").innerHTML = pro_counter + " " + pro_room_caption;
        document.getElementById("pro-total-price").innerHTML = pro_package_base_price*pro_counter;        
    }
}


