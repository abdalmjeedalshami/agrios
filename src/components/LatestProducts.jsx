import { Container, Row, Col } from "react-bootstrap";
import MyCard from "./MyCard"; // Make sure this path is correct

const LatestProducts = ({ products }) => {
  return (
    <Container className="py-5 my-5">
      <p className="text-center text-warning fw-semibold m-0">Recently Added</p>
      <p className="mb-4 text-center fs-1 fw-bold">Latest Products</p>

      <Row className="gx-4 gy-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4}>
            <MyCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LatestProducts;
