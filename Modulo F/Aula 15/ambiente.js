// let num = [5, 8, 2, 9 ,3]
// num.push(1)

// // num.length //saber o comprimento do array/vetor
//  //coloca os elementos em ordem crescente

// console.log(`Nosso vetor é o ${num}`) //mostra os conteúdo
// console.log(`Nosso vetor tem ${num.length} posições`)
// console.log(`${num[2]}`)

// for(let cont = 0; cont < num.length; cont++) {
//   console.log(`Posição ${cont} recebe ${num[cont]}`)
// }

let num = [5, 8, 2, 9 ,3]
num.sort()
for(let cont in num) {
  console.log(`Posição ${cont} recebe ${num[cont]}`)
}