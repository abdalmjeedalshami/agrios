import { Container, Row, Col } from "react-bootstrap";
import COLORS from "../constants/colors";

const TypesSection = ({ types }) => {
  return (
    <Container fluid className="types-section bg-black py-5 text-center" style={{ color: COLORS.gray }}>
      <Container>
        <Row className="gap-4 gap-md-0">
          {types.map((type) => (
            <Col key={type.id} md={3}>
              <a href="#" className="text-decoration-none" style={{ color: COLORS.gray }}>
                {type.title}
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default TypesSection;
