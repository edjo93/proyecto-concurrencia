import React from 'react'
import { Component } from 'react'
import { Card } from 'react-bootstrap'

import getWeb3 from "../../getWeb3.js";
import AlbumContract from '../../contracts/Album.json';


class Albums extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            web3: null,
            accounts: null,
            contract: null,
            albumAddresses: [],
            albumInstances: [],
            albumsList: []
        };
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
                deployedNetwork && deployedNetwork.address
            );
            mainInstance.address = deployedNetwork.address;
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
        const { accounts, web3, albumAddresses, albumsList } = this.state;
        const blockNumber = await web3.eth.getBlockNumber();
        let transactions = [];
        for (let index = 1; index <= blockNumber; index++) {
            let block = await web3.eth.getBlock(index);
            let transaction = block.transactions[0];
            transactions.indexOf(transaction) === -1 ? transactions.push(transaction) : console.log("exists");
        }

        for (let index = 0; index < transactions.length; index++) {
            let transactionInstance = await web3.eth.getTransaction(transactions[index]);
            albumAddresses.indexOf(transactionInstance.to) === -1 ? albumAddresses.push(transactionInstance.to) : console.log("exists")
        }


        this.setState({ albumAddresses: albumAddresses });

        console.log(albumAddresses);
        for (let index = 0; index < albumAddresses.length; index++) {
            if (albumAddresses[index] != null) {
                let instance = await new web3.eth.Contract(AlbumContract.abi, albumAddresses[index]);
                let album = await instance.methods.album().call();
                let artist = await instance.methods.artist().call();
                let image = await instance.methods.imageurl().call();
                albumsList.push({
                    "id": albumAddresses[index],
                    "name": album,
                    "artist": artist,
                    "image": image
                })
            }
        }

        this.setState({ albumsList: albumsList });


        // console.log("account: ", accounts[0]);
        // console.log("methods", contract.methods);
        // // // await contract.methods.setData("War", "Demon Hunter", "https://upload.wikimedia.org/wikipedia/en/c/cb/DemonHunter_War.jpg").send({ from: accounts[0] });
        // // let response  = await contract.methods.album().call();
        // // // Creating new contracts
        // // //let newInstance = await new web3.eth.Contract(AlbumContract.abi).deploy({data: AlbumContract.bytecode}).send({"from":accounts[0]});
        // // let newInstance = await new web3.eth.Contract(AlbumContract.abi,"0x5f5518D4e8a4AAe8eab848f1999d9858067619E1");
        // // console.log(newInstance);
        // // // await newInstance.methods.setData("Peace", "Demon Hunter", "https://target.scene7.com/is/image/Target/GUEST_8eb42664-16dc-4f03-9e71-dadadbf1abe4?wid=488&hei=488&fmt=pjpeg").send({"from":accounts[0]});
        // // let response2 = await newInstance.methods.album().call();
        // // // console.log("contract: ", response);

        // console.log(albumAddresses);
    };


    renderCard = card => {
        const { search } = this.state;
        return (
            <div className="card-columns text-center col d-flex justify-content-center" onClick={(e) => {
                e.preventDefault();
                window.location.href = '/Songs';
            }} >
                <div>
                    <div className="card text-white bg-dark mb-3" style={{ width: "25rem" }} >
                        <img className="card-img-top" src={card.image} alt="Card image cap" />
                        <div className="card-body">
                            <h3 className="card-text center">{card.name}</h3>
                            <p className="card-text">{card.artist}</p>
                        </div>
                        {/* <a href="#" class="btn btn-primary" ></a> */}
                    </div>
                </div>
            </div >
        );
    };

    onchange = e => {
        this.setState({ search: e.target.value });
    };

    render() {
        const { search, albumsList } = this.state;
        const filteredAlbums = albumsList.filter(album => {
            return album.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        return (
            <div style={{ display: "inline-block" }} >
                <div style={{ width: "250px", float: "right", clear: "both", marginTop: "20px", marginBottom: "20px", display: "inline-block" }}>
                    <input class="form-control mr-sm-2" onChange={this.onchange} type="text" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" style={{ float: "right" }}>Search</button>
                </div>
                <div className="card-columns " style={{ marginTop: "85px", clear: "right" }}>
                    {/* {albumInfo.map(renderCard())} */}
                    {filteredAlbums.map(album => {
                        return this.renderCard(album);
                    })}
                </div>
            </div >
        );
    }


}

export default Albums;