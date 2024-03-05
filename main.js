let puntosUsuario = 0
let puntosComputador = 0

let instruccionesElement = document.getElementById('instrucciones')
let contenedorPuntosUsuario = document.getElementById('puntos-usuario')
let contenedorPuntosPC = document.getElementById('puntos-computador')
let mensajeElement = document.getElementById('mensaje')
let contenedorGanaPunto = document.getElementById('gana-punto')

let eleccionUsuario = document.getElementById('eleccion-usuario')
let eleccionPC = document.getElementById('eleccion-computadora')
let elegiArma = document.getElementById('elegi-tuarma')

let btnArmas = document.querySelectorAll('.arma')

btnArmas.forEach(btn => {
  btn.addEventListener('click', e=>{
    e.preventDefault()
    let eleccionPC = Math.floor(Math.random() * 3)
    let eleccionUsuario = e.currentTarget.id
    
    if (eleccionPC === 0) eleccionPC = '✊'
    else if (eleccionPC === 1) eleccionPC = '📋'
    else if (eleccionPC === 2) eleccionPC = '✂️'
    
    console.log(eleccionPC)
    console.log(eleccionUsuario)
  })
})
