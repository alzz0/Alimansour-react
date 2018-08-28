import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import {Link} from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
  Media,
  Jumbotron
} from "reactstrap";
import "../css/Home.css";

const cardStyle = {
  border: "none",
  maxWidth: "200px",
  textAlign: "center",
  margin: "0 auto"
};

class Home extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="content">
            <div id="landing-header">
              <Fade left>
                <h1 style={{ fontSize: "65px", textAlign: "left" }}>
                  Web Developer & <br />
                  <span>Entrepreneur</span>
                </h1>
              </Fade>
              <Fade right>
                <img
                  style={{ width: "30px" }}
                  src="http://driesvanbroeck.be/wp-content/themes/driesvanbroeck/assets/content/scroll.svg"
                />

                <h5 style={{ color: "white",paddingTop:"15px" }}>Scroll To See More</h5>
              </Fade>
        
            </div>
          </div>
        </section>
        <Container>
          <h1
            style={{
              textAlign: "center",
              margin: "120px auto",
              fontSize: "52px",
              fontWeight: "700",
              letterSpacing: "2px"
            }}
          >
            Skills
          </h1>
          <Row>
            <Col xs="12" sm="4">
              <Card style={cardStyle}>
                <Zoom>
                  <CardImg
                    top
                    width="100%"
                    src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
                    alt="React.js"
                  />
                </Zoom>
                <CardBody>
                  <CardTitle>Client Side</CardTitle>
                  <CardSubtitle>Javascript</CardSubtitle>
                  <CardText>
                   Vanilla Javascript, React.js, Redux, Ecmascript, jQuery.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="4">
              <Card style={cardStyle}>
                <Zoom>
                  <CardImg
                    top
                    width="100%"
                    src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                    alt="Node.js"
                  />
                </Zoom>
                <CardBody>
                  <CardTitle>Server Side</CardTitle>
                  <CardSubtitle>Node.js</CardSubtitle>
                  <CardText>
                   Node.js, Express.js, MongoDB, Mongoose, Passport.js.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="4">
              <Card style={cardStyle}>
                <Zoom>
                  <CardImg
                    top
                    width="100%"
                    src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
                    alt="Redux & other tech"
                  />
                </Zoom>
                <CardBody>
                  <CardTitle>Other Technologies</CardTitle>
                  <CardSubtitle>miscellaneous</CardSubtitle>
                  <CardText>
                     Bootstrap, Reactstrap EJS, Semantic UI, Git, GitHub, HTML5, CSS3, NPM, Ajax, Scss.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        <section2>
          <h1 style={{ textAlign: "center", margin: "120px auto" }}>
            My Programming Timeline
          </h1>

          <Container>
            <div className="container1">
              <div className="timeline-block timeline-block-right">
                <div className="marker" />
                <Zoom>
                  <div className="timeline-content">
                    <h3>The beginning</h3>
                    <span>2016 - January 2017</span>
                    <p>
                      My skills began in the mid year of 2016, starting off with
                      focusing on HTML and css.
                    </p>
                  </div>
                </Zoom>
              </div>

              <div className="timeline-block timeline-block-left">
                <div className="marker" />
                <Zoom>
                  <div className="timeline-content">
                    <h3> My introduction to Javascript</h3>
                    <span>March 2017</span>
                    <p>
                      After a couple months of HTML and CSS I began hacking away
                      with Vanilla JavaScript and building simple yet complex
                      applications.
                    </p>
                  </div>
                </Zoom>
              </div>

              <div className="timeline-block timeline-block-right">
                <div className="marker" />
                <Zoom>
                  <div className="timeline-content">
                    <h3>Transition to back end</h3>
                    <span>The year 2017</span>
                    <p>
                      Began to love Javascript and wanted to stick with it so I
                      choose Node.Js as my choice of back end technology
                    </p>
                  </div>
                </Zoom>
              </div>

              <div className="timeline-block timeline-block-left">
                <div className="marker" />
                <Zoom>
                  <div className="timeline-content">
                    <h3>Librarys & FrameWorks</h3>
                    <span>October 2017</span>
                    <p>
                      Heard alot of hype around a popular library called
                      'React.js' Enjoying it and working on building amazing web
                      apps with it.
                    </p>
                  </div>
                </Zoom>
              </div>

              <div className="timeline-block timeline-block-right">
                <div className="marker" />
                <Zoom>
                  <div className="timeline-content">
                    <h3>Today</h3>
                    <span>2018...</span>
                    <p>
                      Today I am  working on building big and complex web applications with React and Redux, fully connected to the server side and making sure code quality and UI presentation over exceeds industry standards.
                    </p>
                  </div>
                </Zoom>
              </div>
            </div>
          </Container>
        </section2>
        <section3>
        <Link to={"/about"}>
          <div id="left">
            <div id="box1"><h1>About Me</h1></div>
          </div>
        </Link>
        <Link to ={"/contact"}>
          <div id="right">
            <div id="box2"><h1>Contact Me</h1></div>
          </div>
        </Link>
        </section3>
      </div>
    );
  }
}

export default Home;
