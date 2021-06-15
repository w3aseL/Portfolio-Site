import React, { useState } from 'react';
import "./Home.scss";

import { BrowserView, MobileView } from "react-device-detect"
import { Container, Row, Col } from "reactstrap";
import { request } from '../../api';

import { Layout, Intro } from '../../components'

const HEADSHOT_PIC = "https://content.noahtemplet.dev/profile_pictures/NoahTHeadshot.jpg"

export const Home = props => {
  const [state, setState] = useState({
    loading: false,
    data: null,
    error: null
  })
  const [hideIntro, setIntroHidden] = useState(false)

  const checkTimeout = (sec=1) => {
    if(state.loading && !state.data) {
      setTimeout(() => checkTimeout(), sec * 1000)
    } else {
      setIntroHidden(true)
    }
  }

  if(!state.loading && !state.data && !state.error) {
    setState(prevState => ({ ...prevState, loading: true }))

    setTimeout(() => checkTimeout(), 2500)

    request("/portfolio", null, "GET")
    .then(res => setState(prevState => ({ ...prevState, loading: false, data: res.data })))
    .catch(err => setState(prevState => ({ ...prevState, loading: false, error: err })))
  }

  // console.log(state)

  return (
    <Intro hide={hideIntro} loading={state.loading} inConstruction>
      <Layout>
        <BrowserView>
          <Container className="mt-5">
            <Row className="d-flex">
              <Col md="6" className="mt-auto mb-auto ml-auto mr-auto d-flex flex-column">
                <h1 className="w-100 text-white text-left text-md-center">Hello! I'm Noah.</h1>
                <p className="w-100 text-light text-left text-md-center">Welcome to my website!</p>
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
      </Layout>
    </Intro>
  )
}

export default Home;