import React from "react";
import { AvForm, AvField, AvInput } from "availity-reactstrap-validation";
import Image from "react-bootstrap/Image";

import {
    Input,
    Button,
    Modal,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Label,
    Container,
    Row,
    Col,
} from "reactstrap";

import { Confirm } from "./Confirm";
import "../ConfirmStyle.css";
import getWeb3 from "../../getWeb3.js";
import { Component } from "react";
import AlbumContract from '../../contracts/Album.json';

// let web3;
// let accounts;

// const setWeb3 = async() =>{
//    web3 = await getWeb3();
//    accounts = await web3.eth.getAccounts();
// }
// const createAlbum = async (e,values) => {
//   e.preventDefault();
//   console.log(values);
//   const web3 = await getWeb3();
//   console.log(web3);
//   // this.props.addressesCall("");
// }; onValidSubmit={createAlbum}



class AddSong extends Component {
    createSong = async (e, values) => {
        //Sometimes it works
        e.preventDefault();
        console.log(values);
        let newInstance = await new this.state.web3.eth.Contract(AlbumContract.abi,values.select);
        await newInstance.methods.addSong(values.song,values.duration,values.genre).send({"from":this.state.accounts[0]});
    };


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
    render() {
        return (
            <Container className="text-white">
                <AvForm onValidSubmit={this.createSong}>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <AvField type="select" name="select" label="Album">
                                {this.state.albumsList.map(element=> <option key={element.id} value={element.id}>{element.name}</option>)}
                            </AvField>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <AvField
                                name="song"
                                label="Canción"
                                type="text"
                                validate={{
                                    required: { value: true, errorMessage: "campo requerido" },
                                }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <AvField
                                name="duration"
                                label="Duración"
                                type="text"
                                validate={{
                                    required: { value: true, errorMessage: "campo requerido" },
                                }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <AvField name="genre" label="Género" type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Button color="success">Guardar</Button>
                        </Col>
                    </Row>
                </AvForm>
            </Container>
        );
    }
}

export default AddSong;
