async function resolvePromise() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 2000);
  });

  const resolved = await myPromise
    .then((result) => console.log(result * 30 + 2))
    .catch((err) => console.log(err.message));

  return resolved;
}

resolvePromise();
