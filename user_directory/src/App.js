
import React from "react";
import Wrapper from "./components/wrapper"
import Header from "./components/header";
import Table from "./components/userTable";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <Wrapper>
      <div className='App'>
        <Header />
        <Table />
      </div>
    </Wrapper>
  );
}

export default App;
