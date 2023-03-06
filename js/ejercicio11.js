let nombres = [];
let edades = [];

for (let i = 0; i < 3; i++) {
  nombres[i] = prompt(`Introduce el nombre ${i + 1}`);
  edades[i] = +prompt(`Introduce la edad de ${nombres[i]}`);
}

let indiceMayor = edades.indexOf(Math.max(...edades));
document.write(`El mayor es ${nombres[indiceMayor]} con ${edades[indiceMayor]} años`);

//no pude agregarle validaciones