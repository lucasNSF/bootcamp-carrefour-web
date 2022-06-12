const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promisse resolvida!");
  }, 2000);
});

myPromise
  .then((result) => result + "\nPassando pelo then!")
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));

console.log("Síncrono!");
