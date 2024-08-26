// Função de validação de login
function validateLogin() {
    // Pegando os valores dos campos
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var alertBox = document.getElementById("alert");

    // Verificando se os campos estão preenchidos
    if (usuario === "" || password === "") {
        alertBox.style.display = "block";
        alertBox.className = "alert error";  // Alerta de erro
        alertBox.textContent = "Usuário e Senha são obrigatórios!";
    } else if (usuario === "leonardo" && password === "123456") {
        // Simulação de login com sucesso
        alertBox.style.display = "block";
        alertBox.className = "alert success";  // Alerta de sucesso
        alertBox.textContent = "Login realizado com sucesso!";
        
        // Aqui você pode adicionar a lógica de redirecionamento após o login
    } else {
        // Usuário ou senha incorretos
        alertBox.style.display = "block";
        alertBox.className = "alert error";
        alertBox.textContent = "Usuário ou senha incorretos!";
    }
}