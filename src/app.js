// Arrays con pronombres, adjetivos y sustantivos
window.onload = () => {
  const pronombres = ["mi", "tu", "su", "nuestro", "vuestro", "su"];
  const adjetivos = [
    "grandioso",
    "fabuloso",
    "increíble",
    "genial",
    "fantástico",
    "innovador"
  ];
  const sustantivos = [
    "sitio",
    "blog",
    "tienda",
    "proyecto",
    "academia",
    "curso"
  ];
  const extensiones = [".com", ".info", ".gov", ".aprendo"];

  // Función para generar un dominio aleatorio
  function generarDominio() {
    // Seleccionar aleatoriamente un pronombre, adjetivo y sustantivo
    const pronombreAleatorio =
      pronombres[Math.floor(Math.random() * pronombres.length)];
    const adjetivoAleatorio =
      adjetivos[Math.floor(Math.random() * adjetivos.length)];
    const sustantivoAleatorio =
      sustantivos[Math.floor(Math.random() * sustantivos.length)];

    // Seleccionar una extensión aleatoria
    const extensionAleatoria =
      extensiones[Math.floor(Math.random() * extensiones.length)];

    // Concatenar el dominio aleatorio
    const dominioAleatorio =
      pronombreAleatorio +
      "-" +
      adjetivoAleatorio +
      "-" +
      sustantivoAleatorio +
      extensionAleatoria;

    return dominioAleatorio;
  }

  // Generar 10 dominios aleatorios
  for (let i = 0; i < 10; i++) {
    generarDominioButton.addEventListener("click"), () => {};
  }
};

generarExcusaButton.addEventListener("click", () => {
  //creando el indice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * sujetos.length);
  //generando y mostrando la excusa
  const excusaGenerada = generarExcusa(indiceAleatorio);
  //creando el click para el boton
  excusaElement.textContent = excusaGenerada;
});
