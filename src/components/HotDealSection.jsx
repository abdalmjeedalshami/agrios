import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./product_card/ProductCard";

const HotDealSection = ({ deals }) => {
  return (
    <Container className="py-5 my-5">
      <p className="text-center text-warning fw-semibold m-0">Special Offers</p>
      <p className="fw-bold fs-2 text-center mb-4">Today's Hot Deal</p>

      <Row className="gx-4 gy-4">
        {deals.map((deal) => (
          <Col key={deal.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={deal} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HotDealSection;
