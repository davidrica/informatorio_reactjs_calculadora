

function calcular() {
    try {
        var visor = document.getElementById('visor');
        if (visor.value != '') {
            visor.value = eval(visor.value);
        }


    } catch (exceptionVar) {
        visor.classList.add('error')
    }
}



function mostrar() {
    const visor = document.getElementById('visor')

    if (this.value === 'C') {
        visor.value = ''
    } else if (this.value === '=') {
        calcular()
    } else if (this.value === '-/+') {
        visor.value = (visor.value) * -1

    } else {
        visor.value += this.value;
    }

}

function agregarBotones() {
    const botones = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.',]
    const container = document.createElement('div')
    container.classList.add('keypad')
    let estilos = 'btn_numeros'

    botones.forEach((boton) => {
        const but = document.createElement('button');
        but.innerHTML = boton
        but.id = boton
        but.value = boton
        but.addEventListener('click', mostrar)
        if (boton === '0') {
            estilos = 'btn_cero'
        } else if (boton === '.') {
            estilos = 'btn_decimal'
        }
        but.classList.add(estilos)
        container.appendChild(but)
    })

    return container;
}

function agregarFunciones() {

    const botones = ['/', '*', '-', '+', '=', '-/+', 'C']
    const container = document.createElement('div')
    container.classList.add('keypad')

    botones.forEach((boton) => {
        const but = document.createElement('button');
        but.innerHTML = boton
        but.id = boton
        but.value = boton
        but.addEventListener('click', mostrar)
        but.classList.add('btn_funciones')
        container.appendChild(but)
    })

    return container;
}

function agregarEstilo() {

    const container = document.createElement('div')
    container.classList.add('keypad')

    let but = document.createElement('button');
    but.innerHTML = 'OSCURO'
    but.id = 'tema'
    container.appendChild(but)

    but = document.createElement('button');
    but.innerHTML = '+10px'
    container.appendChild(but)
    but = document.createElement('button');
    but.innerHTML = '-10px'
    container.appendChild(but)

    return container;
}
// Leer nodos
// const app = document.getElementById('#app')
const app = document.querySelector('#app')

//https://www.w3schools.com/css/css3_variables_javascript.asp
var r = document.querySelector(':root');
r.style.setProperty('--ancho', '200px');

// Crear nodos
const container = document.createElement('div')
const visor = document.createElement('input')
visor.type = 'text'
visor.id = 'visor'

/* 
const titleElement = document.createElement('h1')
const titleText = document.createTextNode('Hello world!!')
titleElement.classList.add('title')
const paragraphElement = document.createElement('p')
paragraphElement.textContent = 'Estoy aprendiendo a manipular el DOM 😝'
const paragraphElement2 = document.createElement('p')
const paragraphText2 = document.createTextNode('Usando insertBefore')
 */
// Agregar nodos
app.appendChild(container)
//agrega el input para mostrar
container.appendChild(visor)

container.classList.add("calculator")




//titleElement.appendChild(titleText)
container.appendChild(agregarBotones())
container.appendChild(agregarFunciones())
container.appendChild(agregarEstilo())

//container.appendChild(titleElement)
//container.appendChild(paragraphElement)

//paragraphElement2.appendChild(paragraphText2)
// container.appendChild(paragraphElement2)
//container.insertBefore(paragraphElement2, paragraphElement)

// container.insertAdjacentElement('afterbegin', paragraphElement2)
// container.insertAdjacentElement('afterend', paragraphElement2)
// container.insertAdjacentElement('beforebegin', paragraphElement2)
// container.insertAdjacentElement('beforeend', paragraphElement2)

// Eliminar nodos
// container.removeChild(paragraphElement)
// container.replaceChild(paragraphElement2, paragraphElement)

// Eventos
/* const button = document.createElement('button')
function onButtonClick() {
    console.log('Me hiciste click')
    // titleElement.classList.remove('title')
    titleElement.classList.toggle('title')
}
button.textContent = 'Haceme click'
button.addEventListener('click', onButtonClick)


const p = document.createElement('p')
const buttonSumar = document.createElement('button')
p.textContent = 0
buttonSumar.textContent = '+'
container.appendChild(p)
container.appendChild(buttonSumar)
function onButtonSumarClick() {
    p.textContent = Number(p.textContent) + 1
}
buttonSumar.addEventListener('click', onButtonSumarClick)


const input = document.createElement('input')
function onInput(event) {
    console.log(event)
}
container.appendChild(input);
input.addEventListener('input', onInput)
 */



const tema = document.getElementById('tema');
function cambiaTema(ev) {
    //tema input[type="checkbox"]
    if (ev.target.innerHTML === 'CLARO') {
        document.documentElement.setAttribute('tema', 'dark');
        ev.target.innerHTML = 'OSCURO'
    } else {
        document.documentElement.setAttribute('tema', 'light');
        ev.target.innerHTML = 'CLARO'
    }
}
tema.addEventListener('click', cambiaTema);