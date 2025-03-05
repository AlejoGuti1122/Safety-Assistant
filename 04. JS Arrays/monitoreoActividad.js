// <------- Arreglo de actividades sospechozas -----> modificar el valor de ser necesario
var actividadesSospechozas = []

function agregarActividad(descripcion, nivelRiesgo) {
  /* TU CODIGO */
  if (descripcion === "" || nivelRiesgo === "")
    return "Descripcion o nivel de riego no valido"

  if (
    nivelRiesgo !== "bajo" &&
    nivelRiesgo !== "medio" &&
    nivelRiesgo !== "alto"
  )
    return "Nivel de riesgo no valido, el nivel debe ser: bajo, medio o alto"

  actividadesSospechozas.push(
    "Descripcion: " + descripcion + " Riesgo - " + nivelRiesgo
  )
  return (
    "Actividad: " +
    descripcion +
    " con Nivel de riesgo " +
    nivelRiesgo +
    " fue agregada"
  )
}

function eliminarActividad(indice) {
  /* TU CODIGO */
  if (typeof indice !== "number")
    return "El indice no es valido, debe ser un numero"

  if (indice < 0 || indice >= actividadesSospechozas.length)
    return "El indice no es valido, se encuentra fuera del rango"

  actividadesSospechozas.splice(indice, 1)
  return "Actividad eliminada con exito"
}

function filtrarActividadesPorRiesgo(nivelRiesgo) {
  /* TU CODIGO */
  if (nivelRiesgo === "") return "Nivel de riesgo no valido"

  if (
    nivelRiesgo !== "bajo" &&
    nivelRiesgo !== "medio" &&
    nivelRiesgo !== "alto"
  ) {
    return "Nivel de riesgo no valido, el nivel debe ser: bajo, medio o alto"
  }

  var filtrado = actividadesSospechozas.filter((actividad) =>
    actividad.includes("Riesgo - " + nivelRiesgo)
  )

  if (filtrado.length === 0)
    return "No hay actividades con este nivel de riesgo"

  return filtrado
}

function generarReporteDeActividades() {
  /* TU CODIGO */
  const actividades = actividadesSospechozas.map(
    (actividad, index) => "Id:" + index + " " + actividad
  )

  if (actividades.length === 0) return "No hay actividades para mostar"
  return actividades
}

// <------- NO TOCAR -------->
module.exports = {
  agregarActividad,
  eliminarActividad,
  filtrarActividadesPorRiesgo,
  generarReporteDeActividades,
}
