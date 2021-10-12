function calcular() {
var number = document.getElementById('valor')
var tabuada = document.getElementById('seltab')

  if(number.value.length == 0) {
    alert('[Erro]Digite algum número para a operação')
  }else {
  var numero = Number(number.value)
  tabuada.innerHTML = ''
  for(var tab = 1; tab <= 10; tab++){
    let item = document.createElement('option')
    item.text = `${numero} x ${tab} = ${numero*tab}`
    item.value = `tab${c}`
    tabuada.appendChild(item)
  }
}
}