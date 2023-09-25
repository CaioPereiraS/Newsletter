document.addEventListener("DOMContentLoaded", function () {
    
    const botao = document.getElementById("botao_validar");
    const resposta = document.getElementById("resposta");
    
    botao.addEventListener("click", function () {
      const campoEmail = document.getElementById("emailField");  
      const email = campoEmail.value;
      if (validarEmail(email)) {

        console.log("Email válido");

      } else {

        console.log("Email inválido");

      }
    });
    
    function validarEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

});
