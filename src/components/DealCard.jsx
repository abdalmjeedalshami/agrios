import { Card } from "react-bootstrap";
import { NavLink } from "react-router";

const DealCard = ({ deal }) => {
  return (
    <NavLink to={`/deals/${deal.id}`} className={"text-decoration-none"}>
      <Card className="h-100 border-0 rounded-0 overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img
            className="rounded zoom-image"
            variant="top"
            src={deal.image}
            alt={deal.title}
          />
        </div>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title className="fw-bold">{deal.title}</Card.Title>
            <Card.Text className="fs-5 color-yellow fw-bold">55555</Card.Text>
          </div>
          <h5 className="text-success">${deal.price}</h5>
        </Card.Body>
      </Card>
    </NavLink>
  );
};

export default DealCard;
