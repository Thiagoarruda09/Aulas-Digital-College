function alterarConteudo(pagina){
document.getElementById('main').innerHTML=`
${navbar()}
<hr>
${window[pagina]()}`


}

document.getElementById('main').innerHTML=`
${navbar()}
<hr>
`