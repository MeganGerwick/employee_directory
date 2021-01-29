
import React, { Component } from "react";
import Header from "./components/header";
import Search from "./components/searchBar";
import Row from "./components/userTable";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    users
  };


  render() {
    return (
      <Wrapper>
        <Header>User Directory </Header>
        <Search></Search>
        <table>
          <thead>
            <tr>
              <th scope="col">Photo</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(users => (
              <Row
                photo={users.photo}
                name={users.name}
                email={users.email}
                number={users.number}
              />
            ))}
          </tbody>
        </table>
      </Wrapper>
    )
  }
  // function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }

  export default App;
