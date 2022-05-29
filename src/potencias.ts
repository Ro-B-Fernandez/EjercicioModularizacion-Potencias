let base: number = Number(prompt("Ingrese un número"));
let exponente: number = Number(prompt("Ingrese el exponente"));

let calcularExponente = (base: number, exponente: number): number => {
  let numero: number = 1;
  let indice: number;
  if(exponente == 0) {
    return 1;
  } else {
    for( indice = 1; indice <= exponente; indice++) {
      numero = numero * base;
    };
    return numero;
  }
};
console.log("El resultado de " + base + " elevado a la " + exponente + " es:", calcularExponente(base, exponente));
