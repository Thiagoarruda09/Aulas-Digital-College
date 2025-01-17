// let n1=Number(prompt('me informe a nota 1'))
// let n2=Number(prompt('me informe a nota 2'))
// let n3=Number(prompt('me informe a nota 3'))
// let n4=Number(prompt('me informe a nota 4'))

// alert(`
//     nota 01:${n1}
//     nota 02:${n2}
//     nota 03:${n3}
//     nota 04:${n4}
//     `)

// let media = (n1 + n2 + n3 + n4) / 4

// alert(media)


// let notas =[]

// notas[0]=Number(prompt('me informe a nota 01'))
// notas[1]=Number(prompt('me informe a nota 02'))
// notas[2]=Number(prompt('me informe a nota 03'))
// notas[3]=Number(prompt('me informe a nota 04'))

// alert(`
//     nota 01: ${notas[0]}
//     nota 02: ${notas[1]}
//     nota 03: ${notas[2]}
//     nota 04: ${notas[3]}`)

// media=(notas[0]+notas[1]+notas[2]+notas[3]) / 4

// alert(media)

let notas=[];
let boletim = ''
let total=0

let quantidade=Number(prompt('quantas notas serão lançadas'))

for(let i=1; i<=quantidade;i++){
    notas[i]=Number(prompt( `qual a nota ${i}`))
    boletim += `Nota 0${i}: ${notas[i]} \n`
    total +=notas[i]

}

// let boletim = ''

// for( let i=1; i<=quantidade; i++){
//     boletim += `Nota 0${i}: ${notas[i]} \n`
// }

alert(boletim)

// let total=0

// for (let i=1; i<=quantidade; i++){
//     total +=notas[i]
// }

let media= total/quantidade

alert(media)

