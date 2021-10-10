function carregar() {
var hrdia = document.getElementById('hrdia')
var img = document.getElementById('foto')
var data = new Date()
var hora = data.getHours()
var minute = data.getMinutes()
var body = document.body

hrdia.innerText = `Agora são ${hora}:${minute}`

if (hora >= 6 && hora <= 12 ) {
  body.style.background = 'rgb(90, 167, 219)'
  img.src =  'fotomanha.png'
}
  else if (hora > 12 && hora <= 18) {
 body.style.background = '#FF6E43'
 img.src = 'fototarde.png'
}else {
  body.style.background = '#3E3E3E'
  img.src = 'fotonoite.png'
}
} 