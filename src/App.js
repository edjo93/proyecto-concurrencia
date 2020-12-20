import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar.js';
import MainMenu from './Components/MainMenu/MainMenu.js';
import AddAlbum from './Components/Albums/AddAlbum.js';
import Login from './Components/Login/Login.js';
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
      <div className="App" >
        <header>

          <Navbar />
        </header>
        <div><MainMenu /></div>
        {/* <AddAlbum /> */}
        {/* <Login /> */}
        <footer class="site-footer">
          <div id="footer-content">
            <p>Copyright 2017 @ Domain - All Rights Reserved </p>
          </div>
        </footer>
      </div >
    );
  }
}

export default App;
