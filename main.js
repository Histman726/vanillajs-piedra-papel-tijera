let puntosUsuario = 0
let puntosComputador = 0

let instruccionesElement = document.getElementById('instrucciones')
let contenedorPuntosUsuario = document.getElementById('puntos-usuario')
let contenedorPuntosPC = document.getElementById('puntos-computador')
let mensajeElement = document.getElementById('mensaje')
let contenedorGanaPunto = document.getElementById('gana-punto')

let eleccionUsuarioElement = document.getElementById('eleccion-usuario')
let eleccionPCElement = document.getElementById('eleccion-computadora')
let elegiArmaElement = document.getElementById('elegi-tuarma')

let btnArmas = document.querySelectorAll('.arma')
let btnReiniciar = document.getElementById('reiniciar')

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
    
    if (
        (eleccionUsuario === 'piedra' && eleccionPC === '✂️') ||
        (eleccionUsuario === 'tijera' && eleccionPC === '📋') ||
        (eleccionUsuario === 'papel' && eleccionPC === '✊')
    ){
      ganaUsuario()
    }else if (
        (eleccionPC === '✊' && eleccionUsuario === 'tijera') ||
        (eleccionPC === '✂️' && eleccionUsuario === 'papel') ||
        (eleccionPC === '📋' && eleccionUsuario === 'piedra')
    ){
      ganaPC()
    }else {
      empate()
    }
    
    mensajeElement.classList.remove('disabled')
    eleccionUsuarioElement.innerText = eleccionUsuario
    eleccionPCElement.innerText = eleccionPC
    
    if (puntosComputador === 5 || puntosUsuario === 5){
      if (puntosUsuario === 5){
        instruccionesElement.innerText = '🔥 ¡Ganaste! 🔥'
      }
      else if(puntosComputador === 5){
        instruccionesElement.innerText = '😢 ¡Perdiste! 😢'
      }
      
      elegiArmaElement.classList.add('disabled')
      btnReiniciar.classList.remove('disabled')
      btnReiniciar.addEventListener("click", e => {
        e.preventDefault()
        btnReiniciar.classList.add('disabled')
        elegiArmaElement.classList.remove('disabled')
        mensajeElement.classList.add('disabled')
        puntosUsuario = 0
        puntosComputador = 0
        
        contenedorPuntosUsuario.innerText = puntosUsuario
        contenedorPuntosUsuario.innerText = puntosComputador
        instruccionesElement.innerText = 'El primero en llegar a 5 gana'
      })
    }
  })
})

function ganaUsuario() {
  puntosUsuario++
  contenedorPuntosUsuario.innerText = puntosUsuario
  contenedorGanaPunto.innerText = '¡Ganaste un punto! 🔥'
}

function ganaPC() {
  puntosComputador++
  contenedorPuntosPC.innerText = puntosComputador
  contenedorGanaPunto.innerText = '¡La computadora ganó un punto 😢!'
}

function empate() {
  contenedorGanaPunto.innerText = '¡Empate! 😒'
}
