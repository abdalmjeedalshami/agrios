import { Col, Container, Row, Button } from "react-bootstrap";
import MyFeature from "./MyFeature";
import MyButton from "./MyButton";
import theme from "../theme";

const OnlyOrganicSection = ({
  image,
  subtitle,
  title,
  desc,
  features,
  btnText,
}) => {
  return (
    <Container className="py-5">
      <Row>
        {/* Left Image Column */}
        <Col md={6} className="p-0">
          <div
          className="w-100 h-100"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "400px",
            }}
          ></div>
        </Col>

        {/* Right Text Content */}
        <Col md={6} className="d-flex flex-column justify-content-between px-4">
          <p className="color-yellow m-0">{subtitle}</p>
          <p className="fw-bold fs-1">{title}</p>
          <p className="color-muted">{desc}</p>

          {features.map((feature) => (
            <MyFeature feature={feature} />
          ))}

          <MyButton
            text={btnText}
            color={theme.colors.primary}
            textColor={theme.colors.text.light}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default OnlyOrganicSection;
