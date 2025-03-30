function editarProduto(id) {
    const query = new Parse.Query("Produto");
    query.get(id)
        .then((produto) => {
            
            document.getElementById("codigo").value = produto.get("codigo");
            document.getElementById("nome").value = produto.get("nome");
            document.getElementById("validade").value = produto.get("dataDeValidade").toISOString().split('T')[0];
            document.getElementById("quantidade").value = produto.get("quantidade");
            document.getElementById("loja").value = produto.get("loja"); // Preenche o dropdown com a loja

            const modal = document.getElementById("editProductModal");
            modal.style.display = "block";

            document.getElementById("editProductForm").onsubmit = function(event) {
                event.preventDefault();

                const novoCodigo = parseInt(document.getElementById("codigo").value);
                const novoNome = document.getElementById("nome").value;
                const novaValidade = new Date(document.getElementById("validade").value);
                const novaQuantidade = parseInt(document.getElementById("quantidade").value);
                const novaLoja = document.getElementById("loja").value;

                produto.set("codigo", novoCodigo);
                produto.set("nome", novoNome);
                produto.set("dataDeValidade", novaValidade);
                produto.set("quantidade", novaQuantidade);
                produto.set("loja", novaLoja);

                produto.save().then(() => {
                    console.log("Produto atualizado com sucesso.");
                    exibirProdutos();
                    modal.style.display = "none";
        
                });
                verificarValidade();
            };

            document.getElementById("closeModal").onclick = function() {
                modal.style.display = "none";
            };

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };

            document.getElementById("cancelEdit").onclick = function() {
                modal.style.display = "none";
            };
        })
        .catch((error) => {
            console.error("Erro ao atualizar o produto: ", error);
        });
}
verificarValidade();
