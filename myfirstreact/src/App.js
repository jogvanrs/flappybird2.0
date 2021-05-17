import logo from "./logo.svg";
import "./App.css";
import { ObjectManager } from "./GameEngine/recourceManager/ObjectManager";

function App() {
  const gag = document.createElement("div");
  gag.setAttribute("id", "bag");

  const divstyle = {
    color: "blue",
    height: 200,
    width: 200,
    top: 200,
    left: 100,
  };

  window.onload = function afterWebPageLoad() {
    ObjectManager.loadObject("test", "test1");
    console.log(ObjectManager.getObject("test"));
    console.log(ObjectManager.getPosition("test"));
    console.log(ObjectManager.getPosition("fas"));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="test1" style={divstyle}></div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
