import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Bratislava" />
      </div>
      <footer>
        Coded by{" "}
        <a
          href="https://www.erikakubickova.com/"
          target="_blank"
          rel="noreferrer"
          title="Erika Kubíčková | Portfolio"
        >
          Erika Cuby
        </a>{" "}
        and it is open-sourced on{" "}
        <a
          href="https://github.com/ErikaCuby/react-weather-app"
          target="_blank"
          rel="noreferrer"
          title="Erika Kubíčková | GitHub"
        >
          GitHub
        </a>
        .
      </footer>
    </div>
  );
}
