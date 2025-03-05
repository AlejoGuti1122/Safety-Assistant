function checkLongitud(longitud) {
  /* TU CODIGO */
  if (!longitud) return "debe ingresar la longitud"
  if (typeof longitud !== "string") return "La longitud recibida no es válida"
  if (longitud < 3) return "La longitud debe ser mayor o igual a 3"
  if (longitud > 10) return "La longitud debe ser menor o igual a 10"
  return longitud
}

function generarContrasena(
  longitud,
  incluirEspeciales,
  incluirNumeros,
  incluirMayusculas
) {
  /* TU CODIGO */
  var letras = "abcdefghijklmnopqrstuvwxyz"

  var numeros = "0123456789"

  var especiales = "!@#$%^&*()_+-=[]{}|;:,.<>?"

  var letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  var caracteresDisponibles = letras

  if (incluirEspeciales) {
    caracteresDisponibles = caracteresDisponibles + especiales
  }

  if (incluirNumeros) {
    caracteresDisponibles = caracteresDisponibles + numeros
  }

  if (incluirMayusculas) {
    caracteresDisponibles = caracteresDisponibles + letrasMayusculas
  }

  var contrasena = ""

  if (longitud >= 3) {
    var valorAleatorio = Math.random() * caracteresDisponibles.length

    var valorEntero = Math.floor(valorAleatorio)

    var caracter = caracteresDisponibles.charAt(valorEntero)
    contrasena = contrasena + caracter

    var valorAleatorio = Math.random() * caracteresDisponibles.length

    var valorEntero = Math.floor(valorAleatorio)

    var caracter = caracteresDisponibles.charAt(valorEntero)
    contrasena = contrasena + caracter

    var valorAleatorio = Math.random() * caracteresDisponibles.length

    var valorEntero = Math.floor(valorAleatorio)

    var caracter = caracteresDisponibles.charAt(valorEntero)
    contrasena = contrasena + caracter
  }

  if (longitud >= 4) {
    var valorAleatorio = Math.random() * caracteresDisponibles.length

    var valorEntero = Math.floor(valorAleatorio)

    var caracter = caracteresDisponibles.charAt(valorEntero)
    contrasena = contrasena + caracter
  }

  if (longitud >= 5) {
    var valorAleatorio = Math.random() * caracteresDisponibles.length

    var valorEntero = Math.floor(valorAleatorio)

    var caracter = caracteresDisponibles.charAt(valorEntero)
    contrasena = contrasena + caracter
  }

  if (longitud >= 6) {
    var valorAleatorio = Math.random() * caracteresDisponibles.length

    var valorEntero = Math.floor(valorAleatorio)

    var caracter = caracteresDisponibles.charAt(valorEntero)
    contrasena = contrasena + caracter
  }

  return contrasena
}

// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
}
