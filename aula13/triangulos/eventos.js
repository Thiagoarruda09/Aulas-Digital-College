// ao chegar no site o suario deve informar os tres lados de um triangulo

// -lado A
// -lado B
// -lado C

// se os 3 lados forem iguais:equilatero
// se os 2 lados forem iguais:isoceles
// se os 3 lados forem diferentes:escaleno

// let ladoA=Number(prompt('qual o lado A'))

// let ladoB=Number(prompt('qual o lado b'))

// let ladoC=Number(prompt('qual o lado C'))

// if(ladoA ===ladoB && ladoB==ladoC ){
//     alert("equilatero")
// }else if(ladoA!=ladoB && ladoA !=ladoC && ladoB!=ladoC){
//     alert('escaleno')
// }else{
//     alert('isosceles')
// }

let resposta = ''

for(let i=1; i<=100;i++){
    resposta=''
   

    if(i%2 == 0){
        resposta = 'arri'
    }
    if (i%5===0){
       resposta+='egua'
    }
    document.write(`numero ${i} - ${resposta} <br>`)
    
}