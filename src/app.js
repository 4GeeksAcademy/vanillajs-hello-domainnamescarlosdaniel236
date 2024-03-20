/* eslint-disable no-console */
window.onload = () => {
  // Arrays con pronombres, adjetivos y sustantivos
  let pronombres = ["mi", "tu", "su", "nuestro", "vuestro", "su"];
  let adjetivos = [
    "grandioso",
    "fabuloso",
    "increíble",
    "genial",
    "fantástico",
    "innovador"
  ];
  let sustantivos = [
    "sitio",
    "blog",
    "tienda",
    "proyecto",
    "academia",
    "curso"
  ];
  let extensiones = [".com", ".info", ".gob", ".aprendo"];
  // Función para generar un dominio aleatorio
  function generarDominio() {
    // Variable para almacenar el dominio generado
    let dominioAleatorio = "";
    // Bucle anidado para combinar pronombres, adjetivos, sustantivos y extensiones
    for (let i = 0; i < pronombres.length; i++) {
      for (let j = 0; j < adjetivos.length; j++) {
        for (let k = 0; k < sustantivos.length; k++) {
          for (let l = 0; l < extensiones.length; l++) {
            dominioAleatorio =
              pronombres[i] +
              "-" +
              adjetivos[j] +
              "-" +
              sustantivos[k] +
              extensiones[l];
            console.log("Dominio generado:", dominioAleatorio);
          }
        }
      }
    }
  }
  generarDominio();
};
