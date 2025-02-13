
const TABLE2 = document.getElementById('table-paises')


let paises = [
    {
        id:1,
        nome:"brasil",
       
    },
    {
        id:2,
        nome:"espanha",
        
    },
    {
        id:3,
        nome:"china",
        
    }
]

paises.forEach((paises)=>{
    TABLE2.innerHTML+=`
     <tr>
                <td>${paises.id}</td>
                <td>${paises.nome}</td>
                <td>
                  <a href="" class="btn btn-outline-warning btn-sm">Editar</a>
                  <a href="" class="btn btn-outline-danger btn-sm">Excluir</a>
                </td>
              </tr>
    
    `
    
})






