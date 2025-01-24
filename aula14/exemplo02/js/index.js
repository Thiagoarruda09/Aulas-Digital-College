let documento = document.getElementById('main')

documento.innerHTML = `
${navbar()}
<hr>
`


function alterarConteudo(pagina) {
documento.innerHTML = `
${navbar()}
<hr>
${window[pagina]()}`


}

