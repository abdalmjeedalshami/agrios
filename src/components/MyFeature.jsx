import {Container, Row, Col} from "react-bootstrap";

const MyFeature = ({feature}) => {
  return (
    <Row key={feature.id} className="mb-3">
      <Col xs={2} className="d-flex align-items-center justify-content-center">
        <div>
          <img
            src={feature.icon}
            alt={feature.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </Col>

      <Col xs={10}>
        <p className="fw-bold mb-0 fs-5">{feature.title}</p>
        <p className="text-muted color-muted">{feature.subtitle}</p>
      </Col>
    </Row>
  );
};

export default MyFeature;
