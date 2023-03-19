// É o componente principal
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'; // Importando um componente
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {// JSX
  const num = 2;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {num + num}
        </a>
      </header>
      <HelloWorld />
      <HelloWorld></HelloWorld>
      <SayMyName name = "Matheus"/>
      <Pessoa nome = "Matheus" idade = "23" foto = "https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
