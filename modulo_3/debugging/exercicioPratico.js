/** VALIDAÇÃO DE ERROS POR TIPO
 * O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda
 * ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.
 *
 * Validações necessárias:
 * - Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError.
 * - Se o array não for do tipo Object, lance um TypeError.
 * - Se o número não for do tipo Number, lance um erro do tipo TypeError.
 * - Se o tamanho do array for diferente do número enviado como parâmetro,
 * lance um erro do tipo RangeError.
 *
 * Utilize a declaração "try ... catch" filtrando cada tipo de erro com o
 * operador "instanceof".
 */

// Criando Erros
const ReferenceError = new Error(
  "Reference Error: Os parâmetros não foram enviados."
);
const TypeError = new Error(
  "Type Error: Parâmetro não é do tipo especificado."
);
const RangeError = new Error(
  "Range Error: Tamanho do array não é igual ao 2º parâmetro."
);

const sizeOfArray = (arr, size) => {
  validateParams(arr, size);
  return "Tamanho igual!";
};

const validateParams = (arr, size) => {
  if (arr === undefined || size === undefined) {
    throw ReferenceError;
  } else if (typeof arr !== "object" || typeof size !== "number") {
    throw TypeError;
  } else if (arr.length !== size) {
    throw RangeError;
  }
};

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

try {
  console.log(sizeOfArray(myArray, { size: 8 }));
} catch (e) {
  if (e instanceof RangeError) {
    console.log(e.message);
  } else {
    console.log(e);
  }
}
