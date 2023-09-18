document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Aquí puedes agregar el código para enviar los datos del formulario al servidor
    // por ejemplo, usando una solicitud AJAX
  
    // Simulación de envío exitoso
    var responseDiv = document.getElementById("response");
    responseDiv.innerHTML = "Gracias por tu mensaje, " + name + "! Te responderemos pronto.";
    responseDiv.style.color = "white";
    
    // Limpiar el formulario
    document.getElementById("contactForm").reset();
  });
  