import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Web3 from 'web3';



class App extends Component {
  componentWillMount(){
    this.loadBlockChainData()
    console.log(this.state.account);
  }

  async loadBlockChainData(){
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network  = await web3.eth.net.getNetworkType();
    const accounts = await web3.eth.getAccounts();
    this.setState({account: accounts[0]});
  }

  constructor(props){
    super(props);
    this.state = {account: ''}
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World!
          </p>
          <p>Your account:{this.state.account} </p>
        </header>
      </div>
    );
  }
}

export default App;
