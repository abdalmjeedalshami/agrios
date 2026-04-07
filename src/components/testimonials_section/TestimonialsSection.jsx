import { Col, Container, Row } from "react-bootstrap";
import bg from "../../assets/images/apple-bg.png"

const TestimonialsSection = ({ background, testimonials }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        paddingBlockEnd: "3rem",
      }}>
      <Container>
        <Row>
          {testimonials.map((t) => (
            <Col md={6} className={"g-5"}>
              <div className="d-flex">
                <div className="d-flex align-items-center" style={{ zIndex: "1" }}>
                  <div>
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-3"
                        width={"100rem"}
                        src={t.profile}
                        alt=""
                      />
                      {/* Green circle */}
                      <div>
                        <div className="bg-success rounded-circle misn50" style={{ width: "2rem", height: "2rem" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="misn20">
                    <img
                      className="rounded-3"
                      style={{ width: "25rem", filter: "brightness(50%)" }}
                      src={t.background}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TestimonialsSection;
