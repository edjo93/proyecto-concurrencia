import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar.js';
import Albums from './Components/Albums/Albums.js';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AddAlbum from './Components/Albums/AddAlbum.js';
import Login from './Components/Login/Login.js';
import Footer from './Components/Footer/Footer.js';
import Home from './Components/Home/Home.js'
import { Nav } from 'react-bootstrap';




class App extends Component {
  componentWillMount() {
    this.loadBlockChainData()
    console.log(this.state.account);
  }

  async loadBlockChainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network = await web3.eth.net.getNetworkType();
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
  }

  constructor(props) {
    super(props);
    this.state = { account: '' }
  }

  render() {
    return (
      <Router>
        <div className="App" >
          <header>
            <Navbar path="/" />
          </header>
          <Switch>
            <Home path="/home" />
            <Albums path="/Albums" />
            <AddAlbum path="/AddAlbum" />
            <Login path="/login" />
          </Switch>
          <Footer path="/" />
        </div >
      </Router>
    );
  }
}

export default App;
