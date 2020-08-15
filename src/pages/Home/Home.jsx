import React from 'react';

import { Container, Row, Col } from "reactstrap";

class Home extends React.Component {
  render() {
    return (
      <Container className="mt-5">
        <Row className="d-flex">
          <Col md="8" className="ml-auto mr-auto">
            <h1 className="text-white text-left text-md-center">Hello! I'm Noah.</h1>
            <p className="text-light text-left text-md-center">Welcome to my website!</p>
            <p className="mt-5 text-light text-left text-md-center">
              More stuff on my site is <em><strong>coming soon</strong></em>.
              <br /><br />
              Feel free to check out my socials in the footer!
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export { Home };

export default Home;