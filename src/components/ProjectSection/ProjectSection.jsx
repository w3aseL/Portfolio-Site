import React from "react"
import "./ProjectSection.scss";

import { Container, Row, Col } from "reactstrap";
import ReactMarkdown from "react-markdown";

import { Carousel } from "../Carousel"

export const ProjectSection = ({ project }) => {
  const { name, logo_url, url, repo_url, description, images, tools } = project

  return (
    <div className="selected-section">
      <Container>
        <Row className="d-flex justify-content-center pt-2 mb-2">
          <Col sm="2">
            <img width="100%" height="auto" src={logo_url} />
          </Col>
          <Col sm="6">
            <a href={url} target="_blank">
              <h1 className="w-100 text-center">{name}</h1>
            </a>
            {repo_url && 
              <a href={repo_url} target="_blank"> 
                <h4 className="w-100 text-center">Repository{" "}{<i className={"fas fa-link"} />}</h4>
              </a>
            }
          </Col>
        </Row>
        <Row className="mb-2">
          <Col sm="12">
            <Carousel images={images} />
          </Col>  
        </Row>
        <hr className="mt-1 mb-3" />
        <Row className="d-flex justify-content-center mb-2">
          <Col sm="6">
            <ReactMarkdown>
              {description}
            </ReactMarkdown>
          </Col>
        </Row>
        <hr className="mt-1 mb-3" />
        <Row>
          <Col>
            <h3 className="w-100 text-center">Tools Used</h3>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center pb-2">
          {tools.map((tool, i) => (
            <Col sm="2">
              <img width="100%" height="auto" src={tool.logo_url} />
              <a href={tool.url} target="_blank"> 
                <h4 className="w-100 text-center mt-2 mb-1">{tool.name}</h4>
              </a>
              <p className="w-100 text-center">{tool.category}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProjectSection