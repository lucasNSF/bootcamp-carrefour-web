const buttonA = <button>Histórico dos Clientes</button>;
const buttonB = <button>Cadastrar Cliente</button>;

const hasCostumer = false;

function App() {
  return (
    <div>
      <h1>Digital Innovation One - Bootcamp Carrefour Web</h1>
      <h2>Aula - Renderização Condicional</h2>

      {/* {hasCostumer && (
        <div>
          <p>Clique no botão abaixo para ver o histórico de clientes:</p>
          <br />
          {buttonA}
        </div>
      )} */}

      {hasCostumer ? (
        <div>
          <p>Clique no botão abaixo para ver o histórico de clientes:</p>
          <br />
          {buttonA}
        </div>
      ) : (
        <div>
          <p>Realize o cadastro agora mesmo!</p>
          <br />
          {buttonB}
        </div>
      )}
    </div>
  );
}

export default App;
