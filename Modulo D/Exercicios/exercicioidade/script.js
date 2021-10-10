function verificar() { //Funcão verificar ao clicar no botão
  var data = new Date() // Chama a data atual
  var ano = data.getFullYear() //Váriavel ano inteiro (com 4 digitos) Ex --> 2000
  var anonasc = document.getElementById('anonasc') //Váriavel que recebe o valor da input 'Ano de nascimento'
  var fano = Number(anonasc.value) //Converte o valor da Váriavel anonasc para Number
  var res = document.querySelector('div#resul') //recebe o valor do ID --> resul
  
  if (anonasc.value.length == 0 || Number(anonasc.value) > ano){ //Condição para calcular se o ano é valido (menor que 0 ou maior que o atual)
    alert('[erro] Verifique os dados e tente novamente!') //Alerta da condição true
  } else { //Se a condição for False -->
      var sexo = document.getElementsByName('radsexo') //Recebe o valor do name da input radio 'radsexo'
      var idade = ano - fano //Calcula a idade --> ano digitado - ano atual = idade
      console.log('idade calculada', idade) //Console log para verificar se a conta deu certo
      var genero = '' //Váriavel que vai receber gênero no formato String
      var img = document.createElement('img') //Cria um element imagem("img")
      img.setAttribute('id', 'foto') //Cria o atributo id='foto'
        if (sexo[0].checked) { //Condição para se 0 (Masculino) for selecionado no input radio
          genero = 'Homem' // Váriavel gênero recebe String='Homem'
          if (idade >= 0  && idade < 10) { //Condição de idade --> criança
            img.setAttribute('src', 'criancamasc.png') //O elemento img recebe a imagem 
          } else if (idade < 21) { //Condição de idade --> Jovem
            img.setAttribute('src', 'jovemmasc.png')
          } else if (idade < 50) { //Condição de idade --> Adulto
            img.setAttribute('src', 'adultomasc.png')
          } else { //Condição de idade --> Idoso
            img.setAttribute('src', 'idosomasc.png')
          }
      } else if (sexo[1].checked) {
          genero = 'Mulher'
          if (idade >= 0  && idade < 10) { //Condição de idade --> criança
            img.setAttribute('src', 'criancafem.png') //O elemento img recebe a imagem 
          } else if (idade < 21) { //Condição de idade --> Jovem
            img.setAttribute('src', 'jovemfem.png')
          } else if (idade < 50) { //Condição de idade --> Adulto
            img.setAttribute('src', 'adultofem.png')
          } else { //Condição de idade --> Idoso
            img.setAttribute('src', 'idosofem.png')
          }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos` //Exibe o resultado do gênero selecionado e a idade
        res.style.textAlign = 'center' //Centraliza o texto
        img.style.width = '250px' //Define um tamanho fixo para a imagem
        res.appendChild(img) //Exibe a imagem
    }
} 



