function fatorial(n){
  if (n == 1) {
    return 1;
  } else {
     return n * fatorial(n-1)
  }
}
console.log(fatorial(5))

// function fatorial(n){
//   let fat = 1
//   for(let cont = n; cont > 1; cont--){
//     fat *= cont
//   }
//   return fat
// }

// console.log(fatorial(4))



// let v = function(x) {
//   return x*2
// }

// console.log(v(4))

//soma

// function soma(n1=0, n2=0){
//   if(n1 == undefined || n2 == undefined){
//     console.log('digite os números para a operação')
//   } else {
//     return n1 + n2
//   }
// }

// console.log(soma(2))

//par impar

// function parimp(n){
//   if(n%2 == 0){
//     return 'par!'
//   } else{
//     return 'Impar!'
//   }
// }

// var number = parimp(4)

// console.log(`${number}`)