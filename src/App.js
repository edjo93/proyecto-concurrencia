import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import getWeb3 from "./getWeb3";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar.js';
import MainMenu from './Components/MainMenu/MainMenu.js';
import AddAlbum from './Components/Albums/AddAlbum.js';
import Login from './Components/Login/Login.js';
import { Nav } from 'react-bootstrap';




class App extends Component {
  state = {web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 mainInstance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract mainInstance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = AlbumContract.networks[networkId];
      const mainInstance = new web3.eth.Contract(
        AlbumContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      console.log(mainInstance);
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: mainInstance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };


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
