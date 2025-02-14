const TABLE3 = document.getElementById('table-produtos')
const img = document.getElementById('modal-img')



let vinhos = [
    {
        id:1,
        nome:"quinta do morgado",
        imagem:"https://www.vinhosevinhos.com/media/catalog/product/cache/f551083cd20de7ac8cf7d25adc91480d/q/u/quinta-do-morgado-tinto-suave.jpg",
        
        categoria:"vinho",
        valor:14.99,
        estoque:20,


       
    },
    {
        id:2,
        nome:"campestre",
        categoria:"vinho",
        imagem:"https://saobrazbebidas.com.br/wp-content/webp-express/webp-images/uploads/2022/04/Frame-100-1.png.webp",
        valor:14.99,
        estoque:20,


       
    },
    {
        id:3,
        nome:"sao bras",
        imagem:"https://phygital-files.mercafacil.com/catalogo/uploads/produto/vinho_sao_braz_900ml_2947ad66-ffbb-4587-9777-7ed069ad70b5.jpeg",
        
        categoria:"vinho",
        valor:14.99,
        estoque:20,


       
    },
]

function modalImg (nome, imagem){
  document.getElementById('modal-product-name').innerHTML = nome 
  document.getElementById('modal-imagem').src= imagem
}

vinhos.forEach((vinhos)=>{
    TABLE3.innerHTML+=`
     <tr>
                <td>${vinhos.id}</td>
                <td>${vinhos.nome}</td>
                <td>${vinhos.categoria}</td>
                <td><img src="${vinhos.imagem}" alt="${vinhos.nome}" onclick="modalImg('${vinhos.nome}' , '${vinhos.imagem}')" width="50" data-bs-toggle="modal" data-bs-target="#exampleModal"></td>
                <td>${vinhos.valor}</td>
                <td>${vinhos.estoque}</td>
                
                <td>
                  <a href="" class="btn btn-outline-warning btn-sm">Editar</a>
                  <a href="" class="btn btn-outline-danger btn-sm">Excluir</a>
                </td>
              </tr>
    
    `
    
})