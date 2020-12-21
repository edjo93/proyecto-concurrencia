// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import getWeb3 from "./getWeb3";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar.js';
import Albums from './Components/Albums/Albums.js';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AddAlbum from './Components/Albums/AddAlbum.js';
import Login from './Components/Login/Login.js';
import Footer from './Components/Footer/Footer.js';
import Home from './Components/Home/Home.js'
import AlbumContract from './contracts/Album.json';
import { Nav } from 'react-bootstrap';




// eslint-disable-next-line 
class App extends Component {
  state = {web3: null, accounts: null, contract: null, albumAdresses:[]};

  addAlbumAddresses = async (addressAdd)=>{
    this.state.albumAdresses.push(addressAdd)
  }
  
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
    const { accounts, contract, web3,albumAdresses } = this.state;
    console.log("account: ", accounts[0]);
    console.log("methods", contract.methods);
    // // await contract.methods.setData("War", "Demon Hunter", "https://upload.wikimedia.org/wikipedia/en/c/cb/DemonHunter_War.jpg").send({ from: accounts[0] });
    // let response  = await contract.methods.album().call();
    // // Creating new contracts
    // //let newInstance = await new web3.eth.Contract(AlbumContract.abi).deploy({data: AlbumContract.bytecode}).send({"from":accounts[0]});
    // let newInstance = await new web3.eth.Contract(AlbumContract.abi,"0x5f5518D4e8a4AAe8eab848f1999d9858067619E1");
    // console.log(newInstance);
    // // await newInstance.methods.setData("Peace", "Demon Hunter", "https://target.scene7.com/is/image/Target/GUEST_8eb42664-16dc-4f03-9e71-dadadbf1abe4?wid=488&hei=488&fmt=pjpeg").send({"from":accounts[0]});
    // let response2 = await newInstance.methods.album().call();
    // // console.log("contract: ", response);

    console.log(albumAdresses);
  };


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
            <AddAlbum path="/AddAlbum" addressesCall={this.addAlbumAddresses.bind(this)}/>
            <Login path="/login" />
          </Switch>
          <Footer path="/" />
        </div >
      </Router>
    );
  }
}

export default App;
