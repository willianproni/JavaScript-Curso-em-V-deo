function verificar() {
  var n = document.querySelector('input#nome')
  var nome = String(n.value)
  var res = document.getElementById('res')
  var nasc = document.getElementById('nasc')
  var nascimento = Number(nasc.value)
  var data = new Date()
  var ano = data.getFullYear()
  console.log(ano)
  console.log(nascimento)

  if(nome == '' ) {
    alert("[ERRO] Preencha todos os campos")
} else if (nasc.value.length == 0 || nascimento > ano){
    alert("Confira o ano digitado")
} else {
    var sexo = document.getElementsByName('chsexo')
    var idade = ano - nascimento
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var genero = ''
    var voto = ''
    console.log(idade)
    console.log(sexo)
      if (sexo[0].checked)
        genero = 'Masculino'
        if (idade < 16) {
          voto = 'não pode'
          // img.setAttribute('src', 'adultofem.png')
        } else if (idade >= 16 && idade < 18){
          voto = 'Opcional'
        } else if (idade >= 18 && idade < 68)
          voto = 'Obrigatório'
          else {
            voto = 'Não precisa'
          }

      res.innerHTML = `Nome: ${nome} <br>
                       Idade: ${idade} <br>
                       genero: ${genero} <br>
                       voto: <strong>${voto}</strong> ` 
                      //  img.style.width = '30px'
                      //  res.appendChild(img)
                       

    }
  }
 