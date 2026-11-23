
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {

    mensagem.textContent =
        "Obrigado pelo interesse! Entre em contato com a empresa para enviar seu currículo.";

    botao.textContent = "INTERESSE REGISTRADO!";

});