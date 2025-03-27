
function exportarParaCSV() {


    const csvContent = produtos.map(produto => 
        `${produto.get("codigo")},${produto.get("nome")},${produto.get("dataDeValidade").toLocaleDateString("pt-BR")},${produto.get("quantidade")},${produto.get("loja")}`
    ).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'produtos.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

document.getElementById('exportarCSV').addEventListener('click', exportarParaCSV);