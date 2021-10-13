let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

  function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
      return true
    } else {
      return false
    }
  }

  function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
      return true 
    } else {
      return false
    }
  }

function adicionar() {
  let num = document.querySelector('input#fnum')
  let lista = document.querySelector('select#flista')
  let res = document.querySelector('div#res')
  if(isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor adicionado ${num.value}`
    lista.appendChild(item)
    res.innerHTML = ''
  } else {
    alert('Valor inválido ou já encontrado na lista')
  }
  num.value = ''
  num.focus()
}

function finalizar() {
  let res = document.querySelector('div#res')
  if(valores.lenght == 0) {
    alert('Adicione valores antes de finalizar')
  } else {
    let all = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let cont in valores) {
      soma += valores[cont]
      if(valores[cont] > maior)
      maior = valores[cont]
      if(valores[cont] < menor)
      menor = valores[cont]
    }
    media = soma / all
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${all} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor é ${maior}`
    res.innerHTML += `<p>O menor valor é ${menor}`
    res.innerHTML += `<p>A soma de todos os valor é ${soma}`
    res.innerHTML += `<p>A média entre os valores é ${media}`
  }
}