function exibirProdutos() {
    
    const lista = document.getElementById("listaProdutos");
    lista.innerHTML = "";

    const query = new Parse.Query("Produto");
    query.find()
        .then((resultados) => {
            produtos = resultados;l
            const hoje = new Date();

            resultados.sort((a, b) => {
                const dataValidadeA = a.get("dataDeValidade");
                const dataValidadeB = b.get("dataDeValidade");
                return dataValidadeA - dataValidadeB;
            });

            resultados.forEach(produto => {
                const dataValidade = produto.get("dataDeValidade");
                const diasRestantes = Math.ceil((dataValidade - hoje) / (1000 * 60 * 60 * 24));
                
                // Formata a data de validade para o formato desejado
                const dataValidadeFormatada = new Date(dataValidade.getTime() + (dataValidade.getTimezoneOffset() * 60 * 1000)).toLocaleDateString("pt-BR");

                // Verifica se o produto está vencido
                const linhaClass = diasRestantes < 0 ? 'vencido' : ''; // Aplica a classe 'vencido' se o produto estiver vencido

                lista.innerHTML += `
                    <tr class="${linhaClass}">
                        <td>${produto.get("codigo")}</td>
                        <td>${produto.get("nome")}</td>
                        <td>${dataValidadeFormatada}</td> <!-- Usa a data formatada -->
                        <td>${produto.get("quantidade")}</td>
                        <td>${produto.get("loja")}</td>
                        <td class="btn-container">
                            <button onclick="editarProduto('${produto.id}')">Editar</button>
                            <button onclick="removerProduto('${produto.id}')">Excluir</button>
                        </td>
                    </tr>`;
            });
            verificarFiltro(); // Chama a função de filtro após exibir os produtos
        })
        .catch((error) => {
            console.error("Erro ao buscar produtos: ", error);
        });
}

// Chame a função exibirProdutos ao carregar a página
exibirProdutos();
verificarValidade();