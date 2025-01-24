

function welcome (nome){

    alert (`Bem vindo ${nome}`)
}

function soma (n1,n2){
    let resultado = n1+n2

    alert(`resultado ${resultado}`)
}




// function inicio (){

//     document.getElementById("conteudo").innerHTML="<p>inicio </p>"

    
    
// }
// function listar (){

//     document.getElementById("conteudo").innerHTML="<p>listar </p>"

    
    
// }
// function cadastrar (){

//     document.getElementById("conteudo").innerHTML="<p>cadastrar</p>"

    
    
// }
// function configuracoes (){

//     document.getElementById("conteudo").innerHTML="<p> configurações </p>"

    
    
// }

function alterarConteudo(tag){
    document.getElementById('conteudo').innerHTML= `<h1>${tag.innerHTML}</h1>`
}
