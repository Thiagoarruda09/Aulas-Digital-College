let main = document.getElementById('main')

main.innerHTML = `
${navbar()}
<hr>
`
function alterarConteudo(pagina){
    main.innerHTML=`
    ${navbar()}
    <hr>
    ${window[pagina]()}`
}
