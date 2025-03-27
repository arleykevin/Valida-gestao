function editarProduto(id) {
    const query = new Parse.Query("Produto");
    query.get(id) // Busca o produto pelo ID
        .then((produto) => {
            // Preenche o modal com os dados do produto
            document.getElementById("codigo").value = produto.get("codigo");
            document.getElementById("nome").value = produto.get("nome");
            document.getElementById("validade").value = produto.get("dataDeValidade").toISOString().split('T')[0];
            document.getElementById("quantidade").value = produto.get("quantidade");
            document.getElementById("loja").value = produto.get("loja"); // Preenche o dropdown com a loja

            // Exibe o modal
            const modal = document.getElementById("editProductModal");
            modal.style.display = "block";

            // Adiciona o evento de submit ao formulário
            document.getElementById("editProductForm").onsubmit = function(event) {
                event.preventDefault(); // Impede o envio do formulário

                // Obtém os novos dados do formulário
                const novoCodigo = parseInt(document.getElementById("codigo").value);
                const novoNome = document.getElementById("nome").value;
                const novaValidade = new Date(document.getElementById("validade").value);
                const novaQuantidade = parseInt(document.getElementById("quantidade").value);
                const novaLoja = document.getElementById("loja").value;

                // Atualiza os campos do produto
                produto.set("codigo", novoCodigo);
                produto.set("nome", novoNome);
                produto.set("dataDeValidade", novaValidade);
                produto.set("quantidade", novaQuantidade);
                produto.set("loja", novaLoja);

                // Salva as alterações no banco de dados
                produto.save().then(() => {
                    console.log("Produto atualizado com sucesso.");
                    exibirProdutos(); // Atualiza a lista de produtos
                    modal.style.display = "none"; // Fecha o modal após salvar
                });
            };

            // Fecha o modal quando o usuário clica no "x"
            document.getElementById("closeModal").onclick = function() {
                modal.style.display = "none";
            };

            // Fecha o modal se o usuário clicar fora do modal
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };

            // Fecha o modal quando o botão "Cancelar" é clicado
            document.getElementById("cancelEdit").onclick = function() {
                modal.style.display = "none";
            };
        })
        .catch((error) => {
            console.error("Erro ao atualizar o produto: ", error);
        });
}
verificarValidade();