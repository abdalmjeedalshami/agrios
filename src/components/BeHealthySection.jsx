import { Button, Col, Container, Row } from "react-bootstrap";
import MyButton from "./my_button/MyButton";
import theme from "../theme";

const BeHealthySection = ({ background, title, btn }) => {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        padding: "4rem 2rem",
      }}
    >
      <Row>
        <Col className="text-center my-5">
          <p className="fw-bold fs-2 mx-auto w-100 w-md-50 text-white">
            {title}
          </p>
          <MyButton
            text={btn}
            textColor={theme.colors.text.light}
            color={theme.colors.primary}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BeHealthySection;
