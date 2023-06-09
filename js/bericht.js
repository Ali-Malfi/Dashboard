console.log("main.js loaded.");
// Array met mogelijke antwoorden
const answer = [
    "Hi","Hoe gaat het?","goed"
];
// Selecteer DOM-elementen
const messages = document.querySelector(".messages");
const messagesInput = document.querySelector(".messages-input");
const btn = document.querySelector(".send-button");

let input1 = document.querySelector('.input1');
// input1.value = "";

messages.innerHTML= "";
// Voeg een event listener toe aan de knop om een bericht te verzenden
btn.addEventListener("click",sendMessage);
// Event listener om een bericht te verzenden wanneer op Enter wordt gedrukt
messagesInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
      sendMessage();
    }
});

// Functie om een bericht te verzenden
function sendMessage() {
    console.log("sending");
    console.log("message = " + input1.value);
   
        // Voeg de verzonden boodschap toe aan de weergave
        messages.innerHTML+=createRow(input1.value,"/img/boy face img.webp", "Ali Malfi");
        // Wacht 1 seconde en geef antwoord
        setTimeout(giveAnswer,1000);
         // Scroll naar het einde van het berichtvenster
        messages.scrollTop = messages.scrollHeight;
        // Wis het invoerveld
        input1.value = "";
   
}
// Functie om een antwoord te geven
  function giveAnswer() {
    // Kies een willekeurig antwoord uit de array
     // Voeg het antwoord toe aan de weergave
    messages.innerHTML+=createRow(getRandomAnswer(),"/img/girl face  img.webp", "steve Austin");
     // Scroll naar het einde van het berichtvenster
    messages.scrollTop = messages.scrollHeight;
  }
  // Functie om een willekeurig antwoord uit de array te halen
 function getRandomAnswer() {
    
    return answer[getRandomNumber(0,answer.length -1)];
 };
 
// Functie om een willekeurig getal tussen min en max te genereren
 function getRandomNumber(min,max) {
    return Math.floor(Math.random()* (max - min +1) + min);
 }

 // Functie om een HTML-rij voor een bericht te maken
function createRow(messagesText, imgUrl,sendName) {
    const message=`
    <div class="msg-row">
    <div class="msg-text">
        <h2> ${sendName}</h2>
        <p> ${messagesText}</p>
    </div>
    <img src="${imgUrl}" class="msg-img img-runded">
</div>`;
return message;
};



// Selecteer het element voor het uitloggen
const signOut =document.querySelector(".sign-out");


// Event listener voor het uitloggen
     signOut.addEventListener("click",function(){
        // Verwijder de opgeslagen gegevens uit de lokale opslag
        // window.localStorage.removeItem('password');
        window.localStorage.clear();
        // Ga naar de inlogpagina
        window.location.href = "inlog.html";
    
     });
        
   