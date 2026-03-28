import { Container, Row, Col } from "react-bootstrap";

const TypesSection = ({ types }) => {
  return (
    <Container fluid className="types-section bg-black py-5 color-muted text-center">
      <Container>
        <Row>
          {types.map((type) => (
            <Col key={type.id} md={3}>
              <a href="#" className="text-decoration-none color-muted">
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
