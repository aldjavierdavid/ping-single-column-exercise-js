// Estos correos ya se han apuntado a la notificación. Esto es para el ejercicio 2
const registeredEmails = [
  "paquita@gmail.com",
  "rosa@gmail.com",
  "faustino@gmail.com",
];

// PASO PREVIO: Añadir un listener al formulario para el event 'submit', y ejecutar el event.preventDefault()

document
  .querySelector("#formulario-registro")
  .addEventListener("submit", function (event) {

    event.preventDefault();
        
    const ocultar = document.querySelector("#mensaje")
    ocultar.classList.remove('hidden');

    const email = document.querySelector('input').value

    if (registeredEmails.includes(email)) {
      
    document.querySelector("#mensaje > p").textContent =
      "El usuario con el correo " + email + " ya existe.";
    document.querySelector("input").value = "";
    
  } else {
    
    document.querySelector("form").style.display = "none";
    document.querySelector("#mensaje > p").textContent =
      "Gracias por registrarte, te avisaremos cuando abramos! ";

  };


});
