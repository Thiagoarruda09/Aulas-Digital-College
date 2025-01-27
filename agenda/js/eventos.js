function enviar() {
    event.preventDefault()

  let input_name = document.getElementById("Nome");
  let input_tel = document.getElementById("Telefone");
  let erro_nome = document.getElementById("erro_nome");
  let erro_tel = document.getElementById("erro_tel");

  if (input_name.value == "") {
    input_name.style.border = "1px solid red";
    erro_nome.style.display = "block";
    erro_nome.style.transition= "2s"
  } else {
    input_name.style.border = "1px solid green";
    erro_nome.style.display = "none";
  }

  if(input_tel.value == ""){
    input_tel.style.border ="1px solid red";
    erro_tel.style.display ="block";
    erro_tel.style.transition="2s"
  }else{
    input_tel.style.border ="1px solid green";
    erro_tel.style.display ="none";
  }
}
