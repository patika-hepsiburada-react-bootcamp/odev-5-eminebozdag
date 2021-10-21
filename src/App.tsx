import React from "react";
import "./app.css";
import Header from "./components/header/header";
import TodoPage from "./components/todo-page/todo-page";
function App() {
  return (
    <div className="App">
      <Header />
      <TodoPage />
    </div>
  );
}

export default App;
