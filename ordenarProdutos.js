// Função para ordenar produtos
function ordenarProdutos(criterio) {
    if (!criterio) return; // Se não houver critério, não faz nada

    produtos.sort((a, b) => {
        let valorA, valorB;

        switch (criterio) {
            case 'nome':
                valorA = a.get("nome").toLowerCase();
                valorB = b.get("nome").toLowerCase();
                break;
            case 'validade':
                valorA = new Date(a.get("dataDeValidade"));
                valorB = new Date(b.get("dataDeValidade"));
                break;
            case 'quantidade':
                valorA = a.get("quantidade");
                valorB = b.get("quantidade");
                break;
            case 'loja':
                valorA = a.get("loja").toLowerCase();
                valorB = b.get("loja").toLowerCase();
                break;
            default:
                return 0; // Se o critério não for reconhecido, não faz nada
        }

        // Para a validade, queremos que o que vence primeiro apareça primeiro
        if (valorA < valorB) return -1;
        if (valorA > valorB) return 1;
        return 0;
    });

}
