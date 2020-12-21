// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import getWeb3 from "./getWeb3";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar.js';
import MainMenu from './Components/MainMenu/MainMenu.js';
// import AddAlbum from './Components/Albums/AddAlbum.js';
// import Login from './Components/Login/Login.js';
// import { Nav } from 'react-bootstrap';
import AlbumContract from "./contracts/Album.json";



// eslint-disable-next-line 
class App extends Component {
  state = {web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 mainInstance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract mainInstance.
      const networkId = 5777;
      const deployedNetwork = AlbumContract.networks[networkId];
      const mainInstance = new web3.eth.Contract(
        AlbumContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      mainInstance.address = "0x29CeB2984d28aEeA4467C278D990627878f52733"
      console.log(mainInstance);
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: mainInstance }, this.initiate);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  initiate = async () => {
    const { accounts, contract, web3 } = this.state;
    console.log("account: ", accounts[0]);
    console.log("methods", contract.methods);
    // await contract.methods.setData("War", "Demon Hunter", "https://upload.wikimedia.org/wikipedia/en/c/cb/DemonHunter_War.jpg").send({ from: accounts[0] });
    let response  = await contract.methods.album().call();
    let newInstance = new web3.eth.Contract(AlbumContract.abi)
    await newInstance.contract.methods.setData("Peace", "Demon Hunter", "https://target.scene7.com/is/image/Target/GUEST_8eb42664-16dc-4f03-9e71-dadadbf1abe4?wid=488&hei=488&fmt=pjpeg")
    let response2 = await newInstance.contract.album().call();
    console.log("contract: ", response);
    console.log("contract2: ", response2);
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
