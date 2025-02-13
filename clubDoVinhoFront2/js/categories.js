const TABLE = document.getElementById('table-categories')





let dados = [
    {
        id: 1,
        nome: 'espumante',
        descricao: 'desc do espumante'
    },
    {
        id: 2,
        nome: 'branco',
        descricao: 'vinho de uvas brancas'
    },
    {
        id: 3,
        nome: 'verde',
        descricao: 'vinho de uvas verdes'
    }
]

dados.forEach(addLinhaNaTabela)


function addLinhaNaTabela(categoria) {
    TABLE.innerHTML += `

<tr>
                        <td>${categoria.id}</td>
                        <td>${categoria.nome}</td>
                        <td>${categoria.descricao}</td>
                        <td>
                            <a href="#" class="btn btn-outline-warning btn-sm">
                                Editar
                            </a>
                            <a href="#" class="btn btn-outline-danger btn-sm">
                                Excluir
                            </a>
                        </td>
                    </tr>
`

}
