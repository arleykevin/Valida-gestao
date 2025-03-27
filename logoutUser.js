// Inicializa o Parse
Parse.initialize("s3s6e8oktukIxuTSkwlOENCsIoxMAZWgUqRuqJpY", "CwuI6IwiKEBiEboX6QkQy1tFFf52IjXONLUlNuNg");
Parse.serverURL = "https://parseapi.back4app.com/";
// Função de logout
        function logoutUser () {
            Parse.User.logOut().then(() => {
                alert("Você saiu com sucesso!");
                document.getElementById("logoutButton").style.display = "none"; // Esconde o botão de sair
                // Redirecionar ou atualizar a página conforme necessário
                window.location.href = 'index.html'; // Substitua pelo seu URL de login
            }).catch((error) => {
                console.error("Erro ao sair: ", error);
            });
        }

        document.getElementById("logoutButton").style.display = "block"; // Mostra o botão de sair