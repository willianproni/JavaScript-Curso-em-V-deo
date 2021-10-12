let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function adicionar() {
  numero = Number(num.value) 
  if(num.value.length == 0) {
  alert('insira um valor')
} else if (numero < 1 || numero > 100) {
  alert('insira um numero entre 1 e 100')
} else {
  
}
}