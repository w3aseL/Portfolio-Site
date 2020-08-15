import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import pinguImg from '../../assets/pingu_hi.png'

class Error extends React.Component {
  render() {
    var isMobile = window.innerWidth < 480;

    return (
      <Container>
        <Row className="d-flex justify-content-center mt-5">
          <Col md="6" className="d-flex">
            <img src={pinguImg} alt="Pingu Says Hi!" style={{ width: "100%", height: "100%" }} className="ml-auto mr-auto" />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mt-2">
          <Col md="8" className="text-center text-white">
            <h1>Page Not Found!</h1>
            <p>
              My good friend Pingu is here to tell you that you are accessing a page that either does not exist
              or is not accessible at this point! <strong>Turn back now!</strong>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export { Error };

export default Error;