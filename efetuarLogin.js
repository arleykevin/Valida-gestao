// Inicializa o Parse
Parse.initialize("s3s6e8oktukIxuTSkwlOENCsIoxMAZWgUqRuqJpY", "CwuI6IwiKEBiEboX6QkQy1tFFf52IjXONLUlNuNg");
Parse.serverURL = "https://parseapi.back4app.com/";

// Função de login
async function loginUser () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const user = await Parse.User.logIn(username, password);
        alert(`Login bem-sucedido! Bem-vindo, ${user.get("username")}!`);
        // Redirecionar para a página principal ou outra ação após o login
        window.location.href = 'pagina_de_produtos.html'; // Substitua pelo seu URL
    } catch (error) {
        document.getElementById("error-message").innerText = `Erro: ${error.message}`;
    }
}

// Adiciona o listener de clique para chamar a função de login
document.getElementById("loginButton").addEventListener("click", async function () {
    await loginUser ();
});

document.getElementById("registerButton").addEventListener("click", function () {
    // Redirecionar para a página de cadastro
    window.location.href = 'cadastro.html'; // Substitua pelo seu URL de cadastro
});