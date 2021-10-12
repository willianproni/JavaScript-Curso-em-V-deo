
function contar() {
var ini = document.getElementById('start')
var inicio = Number(ini.value)
var end = document.getElementById('end')
var fim = Number(end.value)
var step = document.getElementById('steps')
var passo = Number(step.value)
var res = document.getElementById('res')
console.log(inicio)
console.log(fim)
console.log(passo)

if (ini.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
  alert("[ERRO]Preencha todos os campos")
} else if (passo == 0) {
  alert("Passo inválido! ")
  
} else if (fim > inicio) {
  
  do {
    res.innerHTML += `${inicio} \u{27A1}`
    inicio = inicio + passo
  }while (inicio <= fim) 

  res.innerHTML +=  `\u{1F3C1}`
  } else {
    res.innerHTML = 'contando: '
    for(var cont = inicio; cont >= fim; cont = cont - passo) {
      res.innerHTML += `${cont} \u{27A1}`
    }
    res.innerHTML +=  `\u{1F3C1}`

// for(var cont = inicio; cont <= fim; cont = cont + passo)
//   res.innerText = `${cont}`
    
  }
}
