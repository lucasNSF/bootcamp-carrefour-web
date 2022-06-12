import "./Style.css";

import { MyStyledComponent } from "./styles.js";

const divStyle = {
  color: "black",
  backgroundColor: "tomato",
  fontWeight: "bold",
  padding: "50px",
  fontSize: "2.5em",
};

function App() {
  // CSS Inline
  // return <div style={divStyle}>Style Inline</div>

  // CSS Class
  // return <div className="style-class">Style in Class</div>

  // CSS in JS
  return <MyStyledComponent>CSS in JS</MyStyledComponent>;
}

export default App;
