const verificarPalindromo = (string) => {
  if (!string) throw "String inválida!";
  return string === string.split('').reverse().join('');
}

try {
  console.log(verificarPalindromo(""));
} catch (e) {
  console.log(e);
}
