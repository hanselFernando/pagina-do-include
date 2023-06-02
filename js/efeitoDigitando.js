const texto = document.querySelector('.titulo-principal').getAttribute('data-value')
const tituloElemento = document.querySelector('.titulo-principal')
const atraso = 100

var contadorDeLetras = 0

function digitarTexto() {
    if (contadorDeLetras < texto.length) {
        tituloElemento.textContent += texto.charAt(contadorDeLetras)
        contadorDeLetras++

        setTimeout(digitarTexto, atraso)
    }
}

digitarTexto()