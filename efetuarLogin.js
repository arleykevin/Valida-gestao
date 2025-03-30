Parse.initialize("s3s6e8oktukIxuTSkwlOENCsIoxMAZWgUqRuqJpY", "CwuI6IwiKEBiEboX6QkQy1tFFf52IjXONLUlNuNg");
Parse.serverURL = "https://parseapi.back4app.com/";

async function loginUser () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const user = await Parse.User.logIn(username, password);
        alert(`Login bem-sucedido! Bem-vindo, ${user.get("username")}!`);
        window.location.href = 'pagina_de_produtos.html'; 
    } catch (error) {
        document.getElementById("error-message").innerText = `Erro: ${error.message}`;
    }
}

document.getElementById("loginButton").addEventListener("click", async function () {
    await loginUser ();
});

document.getElementById("registerButton").addEventListener("click", function () {
    window.location.href = 'cadastro.html'; 
});