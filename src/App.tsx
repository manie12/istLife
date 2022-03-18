import React from "react";
import "./App.css";
import Filter from "./Pages/Filter/Filter";
import Header from "./Pages/Header/Header";
import Form from "./Pages/FormSubmit/Form";
import Content from "./Pages/Content/Content";


function App() {
  
  return (
    <div className="App">
      <Header />
      <Filter />
      <Content/>
      <Form />
    </div>
  );
}

export default App;
