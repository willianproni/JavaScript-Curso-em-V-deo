function calcular() {
var num = document.getElementById('num')
var tabela = document.getElementById('res')

  if(num.value.length == 0) {
    alert('[ERRO]Digite um número para a operação')
  } else {
    number = Number(num.value)

    //inicio da tabuada
    tabela.innerHTML = ''
    for(var cont = 1; cont <= 10; cont++) {
      var item = document.createElement('option')
      item.text = `${number} x ${cont} = ${number*cont}`
      item.value = `select${cont}`
      tabela.appendChild(item)
    }
  }
}