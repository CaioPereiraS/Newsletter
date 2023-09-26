document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("botao_validar");
  const resposta = document.getElementById("resposta");

  botao.addEventListener("click", function () {
    const campoEmail = document.getElementById("emailField");
    const critica = document.getElementById("critica");
    const email = campoEmail.value;
    if (validarEmail(email)) {
      
      console.log("Email válido");
      critica.classList.add("texto_critica_desligado");
      critica.classList.remove("texto_critica");
      campoEmail.classList.remove("email_invalido");
      mostrarPopup();

    } else {
      campoEmail.classList.add("email_invalido");
      critica.classList.add("texto_critica");
      critica.classList.remove("texto_critica_desligado");
    }
  });

  const botaoFechar = document.getElementById("fechar_popup");
  botaoFechar.addEventListener("click", function () {
    fecharPopup();
  });

  function validarEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function mostrarPopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("popup_ligado");
    popup.classList.remove("popup_desligado");

    const main = document.getElementById("main");
    main.classList.add("main_desligado");
    main.classList.remove("main_ligado");

    var email_popup = document.getElementById("email_popup");
    email_popup.textContent = document.getElementById("emailField").value;
  }
  function fecharPopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("popup_desligado");
    popup.classList.remove("popup_ligado");

    const main = document.getElementById("main");
    main.classList.add("main_ligado");
    main.classList.remove("main_desligado");
  }
});
