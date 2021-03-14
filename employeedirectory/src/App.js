import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import "./App.css";

// this is in JSX
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>

  )
}

export default App;
