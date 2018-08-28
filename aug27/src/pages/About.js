import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Badge
} from "reactstrap";
import "../css/About.css";

const aboutStyle = {
  marginTop: "190px",
  backgroundColor: "#2f2f2f",
  color: "#fff",
  textAlign: "center"
};

const cardStyle = {
  border: "none",
  textAlign: "left",
  marginTop: "50px",
  marginBottom: "50px"
};

const h1Style = {
  color: "#cccccc",
  textAlign: "left",
  marginTop: "90px"
};

const h1Span = {
  color: "#444"
};

const spanStyle = {
  fontSize: "18px"
};
class About extends React.Component {
  render() {
    return (
      <div>
        <aboutSection>
          <Jumbotron fluid style={aboutStyle}>
            <Container fluid>
              <h1 className="display-5">Hello, my name is Ali Mansour.</h1>
              <p className="lead">
                I am a Full Stack Web Developer and UI/UX Javascript specialist.
                Born and raised in the capital of Alberta, Canada. Check out my
                social media accounts or my React.JS UI components at Github .
                Feel free to take a look at my latest projects on the My Work
                page. I am very passionaite on my work and I capitilize my
                passion!
              </p>
            </Container>
          </Jumbotron>
        </aboutSection>

        <aboutSection3>
          <Container>
            <Row>
              <Jumbotron fluid style={{background:"none"}}>
        <Container fluid>
          <h1 style={{fontSize:"100px", fontWeight:"700",color:"#00b7ff"}}className="display-3">12 +</h1>
          <p className="lead"><h1 style={{color:"#00b7ff"}}>PROJECTS COMPLETED</h1>
I have completed over 100 projects including iOS/Android apps, Mac/Windows programs, Unity/Unreal video games, and web apps for clients.</p>
        </Container>
      </Jumbotron>
            </Row>
          </Container>
        </aboutSection3>
        <aboutSection2>
          <Container>
            <Row>
              <Col xs="6" sm="4">
                <Card className="card" style={cardStyle}>
                  <CardTitle>
                    <h1 style={h1Style}>
                      01. <span style={h1Span}>Research</span>
                    </h1>
                  </CardTitle>

                  <CardText>
                    Understand the subject matter completely and build on the
                    knowledge related to it, becoming intimately familiar with
                    the matter. Determine methods to address the specific needs
                    and requirements.
                  </CardText>
                  <CardText>
                    <small className="text-muted" />
                  </CardText>
                </Card>
              </Col>
              <Col xs="6" sm="4">
                <Card style={cardStyle}>
                  <CardTitle>
                    <h1 style={h1Style}>
                      02. <span style={h1Span}>Design</span>
                    </h1>
                  </CardTitle>

                  <CardText>
                    Misleadingly thought of as the superficial appearance of a
                    product, design actually encompasses a lot more. It is a
                    cross functional process that includes market research,
                    technical research, design of a concept, and prototype
                    mockup.
                  </CardText>
                  <CardText>
                    <small className="text-muted" />
                  </CardText>
                </Card>
              </Col>
              <Col sm="4">
                <Card style={cardStyle}>
                  <CardTitle>
                    <h1 style={h1Style}>
                      03. <span style={h1Span}>Develop</span>
                    </h1>
                  </CardTitle>

                  <CardText>
                    Findings from the research and design phases are utilized
                    for the production of specific products including materials,
                    systems, and methods. Engineer utilizing the research and
                    designs to produce commercial products.
                  </CardText>
                  <CardText>
                    <small className="text-muted" />
                  </CardText>
                </Card>
              </Col>
            </Row>
          </Container>
        </aboutSection2>
      </div>
    );
  }
}

export default About;
