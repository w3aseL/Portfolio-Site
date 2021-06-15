import React from "react"

import { Container, Row, Col, Button } from "reactstrap"
import { Construction } from "../../components"

import { Layout } from '../../components'

class Contact extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <Container className="text-white">
          {/*<Construction />*/}
          <Row className="mt-5 d-flex justify-content-center">
            <Col md="4" className="d-flex flex-column text-center mb-md-auto mb-5">
              <h3 className="mb-2">Shoot Me An Email!</h3>
              <h5 className="mb-2"><em>For Business Inquiries...</em></h5>
              <Button
                href={`mailto:Noah%20Templet<business@noahtemplet.dev>`}
                outline
                color="gmail"
                className="ml-auto mr-auto rounded"
              >
                <i className="fas fa-briefcase" />
                {"  "}
                Email me!
              </Button>
              <h5 className="mt-4 mb-2"><em>Or To Say Hello!</em></h5>
              <Button
                href="mailto:Noah%20Templet<contact@noahtemplet.dev>"
                outline
                color="google-blue"
                className="ml-auto mr-auto rounded"
              >
                <i className="far fa-user-circle" />
                {"  "}
                Email me!
              </Button>
            </Col>
            <Col md="4" className="d-flex flex-column text-center">
              <h3 className="mb-2">Find Me Elsewhere!</h3>
              <a
                className="ml-auto mr-auto mb-4 nav-link text-twitter"
                style={{ cursor: "pointer" }}
                href="https://w3sl.link/tweet"
                target="_blank"
              >
                <h5 className="w-auto m-0">
                  <i className="fab fa-twitter" />
                  {"  "}
                  Twitter
                </h5>
              </a>
              <a
                className="ml-auto mr-auto mb-4 nav-link text-linkedin"
                style={{ cursor: "pointer" }}
                href="https://w3sl.link/in"
                target="_blank"
              >
                <h5 className="w-auto m-0">
                  <i className="fab fa-linkedin-in" />
                  {"  "}
                  LinkedIn
                </h5>
              </a>
              <a
                className="ml-auto mr-auto mb-4 nav-link text-github"
                style={{ cursor: "pointer" }}
                href="https://w3sl.link/github"
                target="_blank"
              >
                <h5 className="w-auto m-0">
                  <i className="fab fa-github" />
                  {"  "}
                  GitHub
                </h5>
              </a>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export { Contact }

export default Contact