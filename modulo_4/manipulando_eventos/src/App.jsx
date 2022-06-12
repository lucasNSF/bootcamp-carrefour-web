const showEvent = () => {
  alert("Thanks for click me!");
};

const myButtom = (
  <button
    style={{
      textTransform: "uppercase",
      backgroundColor: "#000",
      color: "white",
      padding: "20px",
      border: "none",
      borderRadius: "50px",
      fontWeight: "bold",
    }}
    onClick={showEvent}
  >
    Click on me!
  </button>
);

function App() {
  return (
    <div>
      <h1>Manipulando Eventos</h1>
      {myButtom}
    </div>
  );
}

export default App;
