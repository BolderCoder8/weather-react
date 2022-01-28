import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />

      <footer>
        This project was coded by Laura Mooney and is{" "}
        <a href="https://github.com/BolderCoder8/weather-react" target="_blank">
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
