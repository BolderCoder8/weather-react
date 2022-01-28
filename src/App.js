import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div classname="container">
        <Weather />
        <footer>
          This project was coded by Laura Mooney and is{" "}
          <a
            href="https://github.com/BolderCoder8/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
