function verificarValidade() {
    const hoje = new Date();
    const mensagens = [];
    const query = new Parse.Query("Produto"); // Cria uma nova consulta para a classe Produto
    query.find() // Busca todos os produtos
        .then((produtos) => {
            if (produtos.length === 0) {
                // Se não houver produtos, não exibe a mensagem padrão
                document.getElementById("validadeMensagens").innerHTML = "Nenhum produto cadastrado.";
                return; // Sai da função
            }

            produtos.forEach(produto => {
                const dataValidade = produto.get("dataDeValidade"); // Obtém a data de validade
                const diasRestantes = Math.ceil((dataValidade - hoje) / (1000 * 60 * 60 * 24));
                
                if (diasRestantes < 0) {
                    mensagens.push(`O produto ${produto.get("nome")} está vencido!`);
                } else if (diasRestantes === 0) {
                    mensagens.push(`O produto ${produto.get("nome")} vence hoje!`);
                } else if (diasRestantes <= 7) {
                    mensagens.push(`O produto ${produto.get("nome")} está prestes a vencer em ${diasRestantes} dias.`);
                }
            });

            // Exibe todas as mensagens de validade em um único lugar
            const validadeMensagensDiv = document.getElementById("validadeMensagens");
            validadeMensagensDiv.innerHTML = mensagens.length > 0 ? mensagens.join('<br>') : ''; // Não exibe mensagem padrão
        })
        .catch((error) => {
            console.error("Erro ao verificar validade dos produtos: ", error);
        });
}