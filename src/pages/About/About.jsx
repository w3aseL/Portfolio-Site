import React from 'react';

import { Container, Row, Col } from "reactstrap";

import { Construction } from "../../components";

class About extends React.Component {
  render() {
    return (
      <Container className="mt-5">
        <Construction />
      </Container>
    );
  }
}

export { About };

export default About;