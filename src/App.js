import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import Header from "./components/Header";
import Create from "./components/Create";
import Todos from "./components/Todos/Todos";
import Bottom from "./components/Bottom/Bottom";

function App() {
  const [theme, setTheme] = useState("light");
  const [input, setInput] = useState("");
  const [filterValue, setFilterValue] = useState("All");

  const [todosArray, setTodosArray] = useState([]);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header theme={theme} setTheme={setTheme} themeToggler={themeToggler} />
      <Create
        todosArray={todosArray}
        setTodosArray={setTodosArray}
        input={input}
        setInput={setInput}
      />
      <Todos
        todosArray={todosArray}
        setTodosArray={setTodosArray}
        filterValue={filterValue}
      />
      <Bottom
        todosArray={todosArray}
        setTodosArray={setTodosArray}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
    </ThemeProvider>
  );
}

export default App;
