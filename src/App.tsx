import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  Button,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import "./App.css";
import { useGutendexApi } from "./hooks/gutendex-api";
import { BookList } from "./components/books-list";

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
      paper: "#ffffff",
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
  const gutendex = useGutendexApi();
  useEffect(() => {
    gutendex.actions.getBooks();
  }, []);
  return (
    <>
      <ThemeProvider theme={light ? lightTheme : darkTheme}>
        {/* <button
          color="secondary"
          onClick={() => {
            setLight((prev) => !prev);
            console.log(light);
          }}
        >
          AAAAAAAAAAAAAAA
        </button> */}
        <BookList books={gutendex.states.books}></BookList>
      </ThemeProvider>
    </>
  );
}

export default App;
