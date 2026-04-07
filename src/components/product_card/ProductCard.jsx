import { Card } from "react-bootstrap";
import { NavLink } from "react-router";
import "./ProductCard.css"
import COLORS from "../../constants/colors";

const ProductCard = ({ product }) => {
  return (
    <NavLink to={`products/${product.id}`} className={"text-decoration-none"}>
      <Card className="h-100 border-0 text-center rounded-0 overflow-hidden">
        <div className="overflow-hidden">
          <div className="image-wrapper">
            <Card.Img
              // className="rounded-0"
              className="card-image zoom-image"
              variant="top"
              src={product.image}
              alt={product.title}
            />
          </div>
        </div>
        <Card.Body>
          <Card.Title className="fw-bold">{product.title}</Card.Title>
          <h5 className="text-success">{product.price}</h5>
          <Card.Text className="fs-5 fw-bold" style={{ color: COLORS.yellow }}>55555</Card.Text>
        </Card.Body>
      </Card>
    </NavLink>
  );
};

export default ProductCard;
