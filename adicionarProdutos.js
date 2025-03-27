function adicionarProduto() {
    const codigo = parseInt(document.getElementById("produtoCodigo").value);
    const nome = document.getElementById("produtoNome").value;
    const validade = new Date(document.getElementById("produtoValidade").value);
    const quantidade = parseInt(document.getElementById("produtoQuantidade").value);
    const loja = document.getElementById("produtoLoja").value;
    
    if (codigo && nome && validade && quantidade && loja) {
        const Produto = Parse.Object.extend("Produto");
        const produto = new Produto();

        produto.set("codigo", codigo);
        produto.set("nome", nome);
        produto.set("dataDeValidade", new Date(validade));
        produto.set("quantidade", quantidade);
        produto.set("loja", loja);

        produto.save()
            .then((produto) => {
                console.log("Produto salvo com sucesso: ", produto);
                exibirProdutos(); // Atualiza a lista de produtos
                // Limpa os campos
                document.getElementById("produtoCodigo").value = "";
                document.getElementById("produtoNome").value = "";
                document.getElementById("produtoValidade").value = "";
                document.getElementById("produtoQuantidade").value = "";
                document.getElementById("produtoLoja").value = ""; // Limpa a seleção da loja
            })
            .catch((error) => {
                console.error("Erro ao salvar o produto: ", error);
            });
    }
}