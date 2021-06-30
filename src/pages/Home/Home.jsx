import React, { useState } from 'react';
import "./Home.scss";

import { BrowserView, MobileView } from "react-device-detect"
import { Container, Row, Col, Table } from "reactstrap";
import ReactMarkdown from 'react-markdown';
import { request } from '../../api';

import { Layout, Intro, EducationCard, ToolSection, ProjectSection } from '../../components'

const HEADSHOT_PIC = "https://content.noahtemplet.dev/profile_pictures/NoahTHeadshot.jpg"

export const Home = props => {
  const [state, setState] = useState({
    loading: false,
    data: null,
    error: null
  })
  const [hideIntro, setIntroHidden] = useState(false)
  const [activeTool, setActiveTool] = useState({
    category: "none",
    tool: -1
  })
  const [activeProject, setActiveProject] = useState(-1)

  const checkTimeout = (sec=1) => {
    if(state.loading && !state.data) {
      setTimeout(() => checkTimeout(), sec * 1000)
    } else {
      setIntroHidden(true)
    }
  }

  const updateTool = (e, category, tool) => {
    e.preventDefault()

    var newState = { ...activeTool }

    if(category == activeTool.category && tool == activeTool.tool) {
      newState.category = "none"
      newState.tool = -1
    } else {
      newState.category = category
      newState.tool = tool
    }

    setActiveTool({ ...newState })
  }

  const updateProject = (e, project) => {
    e.preventDefault()

    if(activeProject == project)
      setActiveProject(-1)
    else
      setActiveProject(project)
  }

  const processPositionTime = time => {
    if(!time || time === "") return "Present"

    const dateTime = new Date(time);

    return `${dateTime.getMonth()+1}/${dateTime.getFullYear()}`
  }

  if(!state.loading && !state.data && !state.error) {
    setState(prevState => ({ ...prevState, loading: true }))

    setTimeout(() => checkTimeout(), 2500)

    request("/portfolio", null, "GET")
    .then(res => setState(prevState => ({ ...prevState, loading: false, data: res.data })))
    .catch(err => setState(prevState => ({ ...prevState, loading: false, error: err })))
  }

  console.log(state)

  return (
    <Intro hide={hideIntro} loading={state.loading}>
      <Layout>
        {state.data && !state.loading ?
        <>  
          <BrowserView>
            <div className="home-header">
              <Container className="adjust-center">
                <Row className="d-flex">
                  <Col md="6" className="mt-auto mb-auto ml-auto mr-auto d-flex flex-column">
                    <h1 className="w-100 text-white text-left text-md-center">Hello! I'm Noah.</h1>
                    <h4 className="w-100 text-light text-left text-md-center">Welcome to my website!</h4>
                    <p className="w-100 mt-5 text-light text-left text-md-center">
                      More stuff on my site is <em><strong>coming soon</strong></em>.
                      <br /><br />
                      Feel free to check out my socials in the footer!
                    </p>
                  </Col>
                  <Col md="6">
                    <img src={HEADSHOT_PIC} width="75%" height="auto" className="square-picture" />
                  </Col>
                </Row>
              </Container>
              <div className="header-img" style={{ backgroundImage: `url(${require("../../assets/code-bg.jpg")})`, }} />
            </div>
            <div className="main-content">
              <Container>
                <div id="education" className="section">
                  <Row className="mt-6">
                    <h1 className="w-100 text-center text-white">Education</h1>
                  </Row>
                  <Row className="d-flex">
                    {state.data.education.map((edu, i) => (
                      <Col md="6">
                        <EducationCard education={edu} />
                      </Col>
                    ))}
                  </Row>
                </div>
                <div id="tools" className="section">
                  <Row className="mt-6">
                    <h1 className="w-100 text-center text-white">Tools</h1>
                  </Row>
                  {Object.keys(state.data.tools).map((key, i) => (
                    <>
                      <Row>
                        <Col md="12">
                          <h3 className="text-white mb-2">{`${key}s`}</h3>
                        </Col>
                      </Row>
                      <hr className="mt-1 mb-3" />
                      <Row className="d-flex justify-content-center mb-4">
                        {state.data.tools[key].map((tool, i) => (
                          <Col md="1" className="d-flex">
                            <img onClick={e => updateTool(e, key, i)} src={tool.logo_url} width="100%" height="auto" className="mt-auto mb-auto" />
                          </Col>
                        ))}
                      </Row>
                    </>
                  ))}
                  {activeTool.tool !== -1 && state.data.tools[activeTool.category][activeTool.tool] &&
                    <ToolSection tool={state.data.tools[activeTool.category][activeTool.tool]} />
                  }
                </div>
                <div id="projects" className="section">
                  <Row className="mt-6">
                    <h1 className="w-100 text-center text-white">Projects</h1>
                  </Row>
                  <hr className="mt-1 mb-3" />
                  <Row className="d-flex justify-content-center mb-4">
                    {state.data.projects.map((project, i) => (
                      <Col md="2" className="d-flex">
                        <img src={project.logo_url} width="100%" height="auto" className="mt-auto mb-auto" onClick={e => updateProject(e, i)} />
                      </Col>
                    ))}
                  </Row>
                  {activeProject !== -1 &&
                    <ProjectSection project={state.data.projects[activeProject]} />
                  }
                </div>
                <div id="positions" className="section">
                  <Row className="mt-6 mb-2">
                    <h1 className="w-100 text-center text-white">Positions</h1>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    {state.data.positions.map(({ job_title, company_name, company_url, logo_url, description, start_date, end_date }, i) => (
                      <Col md="6">
                        <div className="job-card mb-2">
                          <div className="d-flex">
                            <div className="img-section">
                              <img width="100%" height="auto" src={logo_url} />
                            </div>
                            <div className="title-section">
                              <h4 className="w-100 mb-1">{job_title}</h4>
                              {company_url ? 
                                <a href={company_url}>
                                  <h5 className="w-100 mb-1">{company_name}</h5>
                                </a>
                              :
                                <h5 className="w-100 mb-1">{company_name}</h5>
                              }
                              <p className="w-100 mb-0">{`${processPositionTime(start_date)} - ${processPositionTime(end_date)}`}</p>
                            </div>
                          </div>
                          <ReactMarkdown>{description}</ReactMarkdown>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
                <div id="resumes" className="section">
                  <Row className="mt-6 mb-2">
                    <h1 className="w-100 text-center text-white">Résumés</h1>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Table bordered className="resume-table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Edit Date</th>
                            <th>URL</th>
                          </tr>
                        </thead>
                        <tbody>
                          {state.data.resumes.map(({ creation_date, url }, i) => (
                            <tr>
                              <td>{i+1}</td>
                              <td>{processPositionTime(creation_date)}</td>
                              <td><a href={url} target="_blank" download>Click to View!</a></td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>
          </BrowserView>
          <MobileView>
            <Container className="mt-4">
              <Row className="d-flex">
                <Col sm="12" className="ml-auto mr-auto d-flex flex-column">
                  <img src={HEADSHOT_PIC} width="75%" height="auto" className="square-picture square-picture-mobile" />
                  <h3 className="w-100 text-white text-left text-center">Hello! I'm Noah.</h3>
                  <p className="w-100 text-light text-left text-center">Welcome to my website!</p>
                  <p className="w-100 mt-5 text-light text-left text-center">
                    More stuff on my site is <em><strong>coming soon</strong></em>.
                    <br /><br />
                    Feel free to check out my socials in the footer!
                  </p>
                </Col>
              </Row>
            </Container>
          </MobileView>
        </>
        : <h1>Loading...</h1>}
      </Layout>
    </Intro>
  )
}

export default Home;