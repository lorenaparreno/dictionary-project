import logo from './logo-shecodes.png';
import './App.css';
import Dictionary from './Dictionary';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by <a href="https://github.com/lorenaparreno" target="_blank" rel="noopener noreferrer">Lorena Parreno</a> 👩🏻‍💻
            and is open-sourced on <a href="https://github.com/lorenaparreno/dictionary-project" target="_blank" rel="noopener noreferrer">Github</a> and hosted on <a href="https://github.com/lorenaparreno/dictionary-project" target="_blank" rel="noopener noreferrer">Netlify</a>.
          </small>
        </footer>
      </div>
    </div>
  );
}
