import "./App.css";
import { Carousel, Col, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Row className="Carousel_Customize">
        <Carousel variant="dark" interval="3000" pause="false">
          <Carousel.Item>
            <div
              style={{
                background: "url('./assets/images/1.jpg')",
                height: "600px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            ></div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                background: "url('./assets/images/2.jpg')",
                height: "600px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            ></div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                background: "url('./assets/images/3.jpg')",
                height: "600px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            ></div>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row className="Content">
        <Col md="8" className="Content_Part">
          <h1>Welcome to Kairos Tax Service.</h1>
          <h3>
            We are a tax firm with 20 years’ experience. We are authorized IRS
            e-file provider
          </h3>
          <p>
            We prepare both individual – 1040 series and business – 1040
            Schedule C, Partnership 1046, C- Corp 1120, S- Corp 1120s, Exempt
            Companies 990 series. We provide our service contactless to help you
            and also save you money. We offer both tax filing and tax planning
            service. We also offer advice on business formation, business growth
            and business financing. Give us a call and we’ll be willing to help
            you or schedule appointment online.
          </p>
          <h1>Picture for Office Managing Partner</h1>
          <h1>Client Portal</h1>
          <h3>Clients Open Verifiable Account and submit document.</h3>
        </Col>
        <Col md="4" className="Content_Part">
          <h3>Schedule a consultation</h3>
          <Row className="Schedule p-4 m-1">
            <Form.Control className="mt-2" placeholder="Name" />
            <Form.Control className="mt-2" type="email" placeholder="Email" />
            <Form.Control className="mt-2" placeholder="Phone" />
            <Form.Control className="mt-2" type="text" placeholder="Comments" />
            <Button className="mt-2">Request Consultation</Button>
          </Row>
        </Col>
      </Row>
      <Row className="Footer">
        <Col md="12">
          <h5>Contact Us</h5>
          <p>kairostaxservice@gmail.com</p>
        </Col>
      </Row>
    </div>
  );
}

export default App;
