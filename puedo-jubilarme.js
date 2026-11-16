const form = document.querySelector("#form-jubilacion");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const edad = Number(form.elements.edad.value);
  const genero = form.elements.genero.value;

  if ((genero === "mujer" && edad >= 60) || (genero === "hombre" && edad >= 65)) {
    resultado.textContent = "Podés jubilarte.";
  } else {
    resultado.textContent = "Todavía no podés jubilarte.";
  }
});
