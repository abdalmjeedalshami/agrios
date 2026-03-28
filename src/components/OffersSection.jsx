import { Container, Row, Col } from "react-bootstrap";
import MyOfferCard from "./MyOfferCard"; // adjust path if needed

const OffersSection = ({ cards }) => {
  return (
    <Container className="py-5">
      <Row className="gx-4 gy-4">
        {cards.map((card) => (
          <Col key={card.id || card.title} xs={12} md={6}>
            <MyOfferCard card={card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OffersSection;
