// <----- NO TOCAR ------->
const { perfiles } = require("../build/js/perfiles.js")

var asistente = {
  verPerfiles: function (opcion) {
    /* TU CODIGO */
    if (opcion === "todo") return perfiles
    if (opcion === "nombre") return perfiles.map((perfil) => perfil.usuario)
    if (opcion === "codigo") return perfiles.map((perfil) => perfil.codigo)
    if (opcion === "nivel")
      return perfiles.map((perfil) => perfil.nivel_de_autorizacion)
    if (opcion == "antiguedad")
      return perfiles.map((perfil) => perfil.antiguedad)
  },

  verPerfilesPorAntiguedad: function () {
    /* TU CODIGO */
    var perfilesPorAntiguedad = [...perfiles]

    const ListaDePerfilesPorAntiguedad = perfilesPorAntiguedad.sort(
      (a, b) => b.antiguedad - a.antiguedad
    )
    return ListaDePerfilesPorAntiguedad
  },

  verAdministradores: function () {
    /* TU CODIGO */
    return perfiles.filter((perfil) => perfil.nivel_de_autorizacion === "admin")
  },

  modificarAcceso: function (usuario, codigo) {
    /* TU CODIGO */
    if (!perfiles.find((perfil) => perfil.usuario === usuario))
      return "Usuario no encontrado"
    if (codigo.length !== 4 || isNaN(Number(codigo)))
      return "codigo de acceso invalido, debe contener solo 4 numeros"
    const perfil = perfiles.find((perfil) => perfil.usuario === usuario)
    perfil.codigo = codigo
    return "codigo de acceso modificado"
  },
}

// <----- NO TOCAR ------->
module.exports = {
  asistente,
}
