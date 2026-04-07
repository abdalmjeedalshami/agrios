import { Container, Button, Row, Col } from "react-bootstrap";
import MyButton from "./my_button/MyButton";
import theme from "../theme";
import COLORS from "../constants/colors";

const MyHeader = ({
  background,
  yellowTitle,
  normalTitle,
  homeIcon,
  boxIcon,
  shippingIcon,
}) => {
  return (
    <div className="header-image position-relative">
      <img
        src={background}
        alt="header background"
        style={{
          height: "75vh",
          maxHeight: "100vh",
          width: "100%",
          objectFit: "cover",
        }}
      />

      <Container
        className="position-absolute top-50 start-50 translate-middle  text-white"
        style={{ zIndex: 2 }}
      >
        <div className="fs-3 fs-md-1 fw-bold mb-4">
          <span style={{ color: COLORS.yellow }}>{yellowTitle}</span> <br />
          {normalTitle}
        </div>

        <MyButton
          text={"Show Now"}
          textColor={theme.colors.text.light}
          color={theme.colors.primary}
        />
      </Container>

      <Container className="d-none d-md-block header-card position-absolute start-50 translate-middle fs-1 fw-bold bg-white p-3 rounded shadow-lg">
        <Row>
          <Col md={4} className="border-end">
            <Row>
              <Col
                md={4}
                className="d-flex justify-content-center align-items-center"
              >
                <img src={boxIcon} alt="box icon" />
              </Col>
              <Col
                md={8}
                className="fs-5 d-flex flex-column justify-content-center"
              >
                <strong>Return Policy</strong>
                <p className="fs-6" style={{ color: COLORS.gray }}>Money Back Guarantee</p>
              </Col>
            </Row>
          </Col>
          <Col md={4} className="border-end">
            <Row>
              <Col
                md={4}
                className="d-flex justify-content-center align-items-center"
              >
                <img src={shippingIcon} alt="box icon" />
              </Col>
              <Col
                md={8}
                className="fs-5 d-flex flex-column justify-content-center"
              >
                <strong>Return Policy</strong>
                <p className="fs-6" style={{ color: COLORS.gray }}>Money Back Guarantee</p>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <Col
                md={4}
                className="d-flex justify-content-center align-items-center"
              >
                <img src={homeIcon} alt="box icon" />
              </Col>
              <Col
                md={8}
                className="fs-5 d-flex flex-column justify-content-center"
              >
                <strong>Return Policy</strong>
                <p className="fs-6" style={{ color: COLORS.gray }}>Money Back Guarantee</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyHeader;
