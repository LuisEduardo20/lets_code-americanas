//! 1º QUESTÃO
console.log("---------------- 1º Questão ----------------");

const dadosPessoas = [
  ["Flávia", "Carlos", "Luciana", "João", "Maria"],
  [1.7, 1.8, 1.64, 1.95, 1.52],
  [82, 90, 59, 95, 48],
];

//? Letra a) e b)
let mediaAlturas = 0;
let mediaPesos = 0;

for (let i = 0; i < dadosPessoas.length; i++) {
  let somaTotalAlturas = 0;
  let somaTotalPesos = 0;

  //? O segundo for é para acessar os arrays internos do array principal
  for (let j = 0; j < dadosPessoas[i].length; j++) {
    //? 'i' === 1 então ele esta no array das alturas
    if (i === 1) {
      somaTotalAlturas += dadosPessoas[i][j];
    }

    //? 'i' ===  2 então está no array de pesos
    if (i === 2) {
      somaTotalPesos += dadosPessoas[i][j];
    }
  }

  //? somaTotalAlturas > 0 então está no array de alturas
  if (somaTotalAlturas > 0) {
    mediaAlturas = somaTotalAlturas / dadosPessoas[i].length;
  }

  //? somaTotalPesos > 0 então está no array de pesos
  if (somaTotalPesos > 0) {
    mediaPesos = somaTotalPesos / dadosPessoas[i].length;
  }
}

//! Resposta letra a)
console.log("Letra a)");
console.log("Média das alturas:", mediaAlturas.toFixed(2) + "m\n");

//! Resposta letra b)
console.log("Letra b)");
console.log("Média dos pesos:", mediaPesos.toFixed(1) + "Kg\n");

//? Letra c) e d)
console.log("Letra c)");

//? Valor do maior IMC
let maiorImc = 0;
//? Index do maior IMC
let indexMaiorImc = 0;

for (let i = 0; i < dadosPessoas[0].length; i++) {
  const IMC =
    dadosPessoas[2][i] / (dadosPessoas[1][i] * dadosPessoas[1][i]);

  if (IMC > maiorImc) {
    maiorImc = IMC;
    indexMaiorImc = i;
  }

  //! Resposta letra c)
  console.log(`Nome: ${dadosPessoas[0][i]} e IMC: ${IMC.toFixed(2)}`);
}
console.log("\n");

//? Letra d)
console.log("Letra d)");
let maiorAltura = 0;

for (let i = 0; i < dadosPessoas[1].length; i++) {
  //? Verifica no array de posição 1 (que é o das alturas) se a altura é maior que o valor de 'maiorAltura'
  //? caso seja substitui o valor da variável
  if (dadosPessoas[1][i] > maiorAltura) {
    maiorAltura = dadosPessoas[1][i];
  }
}

//? Pega o index do valor no array
const indexMaiorAltura = dadosPessoas[1].indexOf(maiorAltura);
//? Pega o nome
const nomeMaiorAltura = dadosPessoas[0][indexMaiorAltura];
//! Resposta letra d)
console.log(`nome: ${nomeMaiorAltura}, Altura: ${maiorAltura}m \n`);

//? Letra e)
console.log("Letra e)");
let maiorPeso = 0;

for (let i = 0; i < dadosPessoas[2].length; i++) {
  //? Verifica no array de posição 2 (que é o dos pesos) se o peso é maior que o valor de 'maiorPeso'
  //? caso seja substitui o valor da variável
  if (dadosPessoas[2][i] > maiorPeso) {
    maiorPeso = dadosPessoas[2][i];
  }
}

//? Pega o index do valor no array
const indexMaiorPeso = dadosPessoas[2].indexOf(maiorPeso);
//? Pega o nome
const nomeMaiorPeso = dadosPessoas[0][indexMaiorAltura];
//! Resposta letra e)
console.log(`nome: ${nomeMaiorPeso}, Peso: ${maiorPeso}Kg \n`);

//? Letra f)
console.log("Letra f)");
const nomeMaiorImc = dadosPessoas[0][indexMaiorImc];

//! Resposta letra f)
console.log(`nome: ${nomeMaiorImc}, IMC: ${maiorImc.toFixed(2)} \n`);

//! 2º QUESTÃO
console.log("---------------- 2º Questão ----------------");

const lado1 = 30;
const lado2 = 30;
const lado3 = 30;

//? Se o lado1 for igual ao lado 2 e lado 2 for igual ao lado3 automaticamente o lado3 será igual ao lado1
if (lado1 === lado2 && lado2 === lado3) {
  console.log("Tipo do triângulo: equilátero");
}
//? Se nenhum dos lados forem iguais será escaleno
else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
  console.log("Tipo do triângulo: escaleno");
}
//? Se ao menos algum dos lados forem iguais então será isoceles
else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
  console.log("Tipo do triângulo: isóceles");
}
//? Caso algum dos valores estejam inválidos
else {
  console.log("Valores inválidos");
}
