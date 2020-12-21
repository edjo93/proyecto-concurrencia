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



class AddAlbum extends Component {
  constructor(props){
    super(props)
    this.state = {web3: null, accounts: null};
  }

  createAlbum = async (e,values) => {
  //Sometimes it works
  e.preventDefault();
  console.log(values);
  let newInstance = await new this.state.web3.eth.Contract(AlbumContract.abi).deploy({data: AlbumContract.bytecode}).send({"from":this.state.accounts[0]});
  await newInstance.methods.setData(values.album,values.artist,values.albumUrl).send({"from":this.state.accounts[0]});
  this.props.addressesCall(newInstance.address);
}; 



  componentDidMount = async () => {
    try {
      // Get network provider and web3 mainInstance.
      const web3 = await getWeb3();
      console.log("web3",web3);
      const accounts = await web3.eth.getAccounts();

      this.setState({web3:web3, accounts:accounts});
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };
  
  render(){
    return (
      <Container className="text-white">
        <AvForm onValidSubmit={this.createAlbum}>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <AvField
                name="album"
                label="nombre"
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
                name="artist"
                label="Artista"
                type="text"
                validate={{
                  required: { value: true, errorMessage: "campo requerido" },
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <AvField name="albumUrl" label="url imagen" type="text" />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Image
                src="https://upload.wikimedia.org/wikipedia/en/e/eb/Money_1973.jpg"
                thumbnail
              />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Button color="success">guardar</Button>
            </Col>
          </Row>
        </AvForm>
      </Container>
    );
  }
}

export default AddAlbum;
