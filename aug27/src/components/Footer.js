import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Zoom from "react-reveal/Zoom";
import "../css/Footer.css";
var FontAwesome = require("react-fontawesome");

class Footer extends React.Component {
  render() {
    return (
      <div className="footerStyle">
        <Zoom>
          <Container style={{ margin: "10px auto" }}>
            <Row>
              <Col>Copyright &copy; Ali Mansour 2018</Col>
              <Col>
                <a
                  href="https://www.linkedin.com/in/ali-mansour-99402a126/"
                  target="_blank>"
                >
                  <img
                    style={{ width: "30px" }}
                    src="http://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Free-Download-PNG.png"
                    alt="LinkedIn"
                  />
                </a>
              </Col>
              <Col>
                <a href="https://github.com/alzz0" target="_blank>">
                  <img
                    style={{ width: "30px" }}
                    src="http://www.stickpng.com/assets/images/5847f98fcef1014c0b5e48c0.png"
                    alt="GitHub"
                  />
                </a>
              </Col>
              <Col>
                <a
                  href="https://twitter.com/AliMansour0?lang=en0"
                  target="_blank>"
                >
                  <img
                    style={{ width: "30px" }}
                    src="http://pngimg.com/uploads/twitter/twitter_PNG2.png"
                    alt="Twitter"
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </Zoom>
      </div>
    );
  }
}

export default Footer;
