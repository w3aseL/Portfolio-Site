import React from "react"
import "./ToolSection.scss"

import { Container, Row, Col } from "reactstrap"
import ReactMarkdown from "react-markdown"

export const ToolSection = ({ tool }) => {
  const { name, logo_url, url, description } = tool

  return (
    <div className="selected-section">
      <Container>
        <Row className="d-flex justify-content-center pt-2 mb-2">
          <Col sm="2">
            <img width="100%" height="auto" src={logo_url} />
          </Col>
          <Col sm="4">
            <a href={url} target="_blank">
              <h1 className="text-center w-100">{name}</h1>
            </a>
          </Col>
        </Row>
        <Row className="pb-2 d-flex justify-content-center">
          <Col sm="6">
            <ReactMarkdown>
              {description}
            </ReactMarkdown>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ToolSection