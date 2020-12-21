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

// this.createAlbum = async (e) => {
//   e.preventDefault();
//   console.log(e)
//   // this.props.addressesCall("");
// };

function AddAlbum(values) {
  return (
    <Container className="text-white">
      <AvForm>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <AvField
              name="new"
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
              name="descripcion"
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
            <AvField name="path" label="url imagen" type="text" />
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

export default AddAlbum;
