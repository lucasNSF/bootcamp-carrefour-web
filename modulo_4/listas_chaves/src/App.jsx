const listCostumers = [
  { id: 1, name: "Lucas" },
  { id: 2, name: "Pedro" },
  { id: 3, name: "Maria" },
  { id: 4, name: "Ana" },
];

const showCostumers = (costumer, index) => {
  return (
    <div key={`costumer-${costumer.id}`}>
      <h2>Client {index + 1}</h2>
      <p>Name: {costumer.name}</p>
      <p>ID: {costumer.id}</p>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Listas e Chaves</h1>
      <br />
      {listCostumers.map(showCostumers)}
    </div>
  );
}

export default App;
