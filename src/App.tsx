import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  Button,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import "./App.css";

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#f98f39",
    },
    secondary: {
      main: "#ecc320",
    },
    background: {
      default: "#ececec",
      paper: "#F28345",
    },
  },
};

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#e9b4fc",
    },
    background: {
      default: "#2b2929",
      paper: "#7130ca",
    },
  },
};

function App() {
  let lightTheme = createTheme(lightThemeOptions);
  let darkTheme = createTheme(darkThemeOptions);
  const [light, setLight] = useState(true);

  return (
    <>
      <ThemeProvider theme={light ? lightTheme : darkTheme}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button
            color="secondary"
            onClick={() => {
              setLight((prev) => !prev);
              console.log(light);
            }}
          >
            AAAAAAAAAAAAAAA
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </ThemeProvider>
    </>
  );
}

export default App;
