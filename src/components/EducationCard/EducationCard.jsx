import React from "react"
import "./EducationCard.scss"

import { Container, Row, Col } from "reactstrap"

export const EducationCard = ({ education }) => {
  const { id, schoolName, schoolLogo, schoolType, graduationDate, rewardType, major, gpa } = education

  const gradDate = new Date(graduationDate), hasGraduated = gradDate < new Date()

  const dateToStr = date => `${date.getMonth()+1}/${date.getFullYear()}`

  const majorAndRewardProcess = (reward, major) => {
    if(!major)
      return reward

    if(reward.toLowerCase().includes("bachelor") || reward.toLowerCase().includes("bs")) {
      return `B.S. in ${major}`
    }
  }
  
  return (
    <div className="education-card">
      <Container className="mt-2 mb-2">
        <Row className="d-flex">
          <Col sm="3" className="ml-sm-auto mr-sm-auto">
            <img width="100%" height="auto" src={schoolLogo}></img>
          </Col>
          <Col sm="9" className="ml-sm-auto mr-sm-auto">
            <h4 className="w-auto pb-0 mb-0"><em>{schoolName}</em></h4>
            <p className="text-muted">{schoolType}</p>
          </Col>
        </Row>
        <Row className="d-flex">
          <Col sm="12">
            <p className="w-100 text-muted">
              {`${majorAndRewardProcess(rewardType, major)}`}
              <br/>
              {`${gpa} GPA`}
              <br/>
              {`${!hasGraduated ? "Expected " : ""} ${dateToStr(gradDate)}`}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default EducationCard