function removerProduto(id) {
    const query = new Parse.Query("Produto");
    query.get(id) // Busca o produto pelo ID
        .then((produto) => {
            return produto.destroy(); // Remove o produto do banco de dados
            verificarValidade();
        })
        
        .then(() => {
            console.log("Produto excluído com sucesso.");
            exibirProdutos(); // Atualiza a lista de produtos
            verificarValidade();
        })
        .catch((error) => {
            console.error("Erro ao excluir o produto: ", error);
        });
}
