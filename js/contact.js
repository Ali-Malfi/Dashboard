const inputUser = document.querySelector(".input-username");
const inputEmail = document.querySelector(".input-email");
const inputMsg = document.querySelector(".input-message");
const btnSend = document.querySelector(".contact-send");

console.log("input user:", inputUser);
console.log("input email:", inputEmail);
console.log("input message:", inputMsg);


btnSend.addEventListener('click', function() {
    console.log("btn is geclickd");

    console.log("user: ", inputUser.value);

    if(checkIfEmpty(inputUser.value)) {
        console.log('username is leeg');
        inputUser.classList.add("border-3");
        inputUser.classList.add("border-danger");
        ;
    } else {
        inputUser.classList.remove("border-3");
        inputUser.classList.remove("border-danger");
    }

    console.log("input email: ", inputEmail.value);

    if(checkIfEmailValid(inputEmail.value)) {
        inputEmail.classList.remove("border-3");
        inputEmail.classList.remove("border-danger");
    } else {
        console.log('email is not valid');
        inputEmail.classList.add("border-3");
        inputEmail.classList.add("border-danger");
        ;
    }

    console.log("input message: ", inputMsg.value);

    
    if(checkIfEmpty(inputMsg.value)) {
        console.log('Text message is empty!');
        return;
    }

    console.log("Alle velden zijn in orde");

});

// controleert of value leeg is 
function checkIfEmpty(value) {
    if(value === "") {
        return true;
    } else {
        return false;
    }
}

function checkIfEmailValid(email) {
    // debugger;
    if(checkIfEmpty(email)) {
        return false;
    }

    if(email.includes('@')) {
        return true;
    }

    return false;
}
