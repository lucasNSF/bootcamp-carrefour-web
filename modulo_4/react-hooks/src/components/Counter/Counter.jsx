function Counter() {
  let quantity = 0;

  const increment = () => {
    quantity++;
    document.querySelector('#amount-ctx').innerText = quantity;
  };

  return (
    <>
      <h2 id="amount-ctx">{quantity}</h2>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default Counter;
