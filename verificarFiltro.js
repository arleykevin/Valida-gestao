function verificarFiltro() {
    const input = document.getElementById('searchInput');
    const filterDate = document.getElementById('filterDate').value; // Obtém a data do filtro
    const filter = input.value.toLowerCase();
    const rows = document.querySelectorAll('#listaProdutos tr');
    let matchFound = false;

    rows.forEach(row => {
        const cells = row.getElementsByTagName('td');
        let found = false;

        // Verifica se o produto corresponde ao filtro de texto
        for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            if (cell.textContent.toLowerCase().indexOf(filter) > -1) {
                found = true;
                break;
            }
        }

        // Verifica se a data de validade corresponde ao filtro de data
        if (filterDate) {
            const dataValidadeText = cells[2].textContent; // A data de validade está na terceira coluna (índice 2)

            // Converte a data de validade do formato DD/MM/YYYY para YYYY-MM-DD
            const [dia, mes, ano] = dataValidadeText.split('/');
            const dataValidade = new Date(`${ano}-${mes}-${dia}`); // Cria um objeto Date no formato YYYY-MM-DD

            // Verifica se a data de validade é válida
            if (isNaN(dataValidade.getTime())) {
                console.log(`Data inválida: ${dataValidadeText}`); // Log para depuração
                found = false; // Se a data não for válida, não exibe a linha
            } else {
                console.log(`Comparando: ${dataValidade.toISOString().split('T')[0]} com ${filterDate}`); // Log para depuração
                if (dataValidade.toISOString().split('T')[0] !== filterDate) {
                    found = false; // Se a data não corresponder, não exibe a linha
                } else {
                    found = true; // Se a data corresponder, marca como encontrado
                }
            }
        }

        row.style.display = found ? '' : 'none'; // Exibe ou oculta a linha
        matchFound = matchFound || found; // Atualiza se alguma correspondência foi encontrada
    });

    // Exibe ou oculta a mensagem de "nenhum produto encontrado"
    document.getElementById('noMatch').style.display = matchFound ? 'none' : 'block';
}
// Adiciona o evento de entrada ao campo de busca e ao campo de data
document.getElementById('searchInput').addEventListener('input', verificarFiltro);
document.getElementById('filterDate').addEventListener('change', verificarFiltro);



function limparFiltros() {
    document.getElementById('searchInput').value = ''; // Limpa o campo de busca
    document.getElementById('filterDate').value = ''; // Limpa o campo de data
    location.reload(); // Recarrega a página
}

// Adiciona o evento de clique ao botão "Limpar Filtros"
document.getElementById('clearFilters').addEventListener('click', limparFiltros);