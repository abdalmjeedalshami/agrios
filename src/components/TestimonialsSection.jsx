import { Container, Row, Col } from "react-bootstrap";

const TestimonialsSection = ({ background, testimonials }) => {
  return (
    <Container
      fluid
      className="py-5"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Section Title */}
      <div className="text-center mb-5">
        <p className="text-warning mb-1">Our Testimonials</p>
        <h2 className="fw-bold">What They Say</h2>
      </div>

      {/* Testimonial Cards */}
      <Row className="g-4 mb-5">
        {testimonials.map((testimonial) => (
          <Col
            key={testimonial.id}
            md={6}
            className="d-flex justify-content-center"
          >
            <div className="position-relative rounded-4 w-50">
              {/* Background Image */}
              <div className="overflow-hidden rounded-3">
                <img
                  src={testimonial.background}
                  alt="testimonial background"
                  className="w-100 h-100 object-fit-cover"
                  style={{
                    height: "250px",
                    maxHeight: "250px",
                    filter: "brightness(0.5)",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Profile Content Overlay */}
              <div className="position-absolute top-50 start-0 translate-middle text-center">
                <div className="position-relative d-inline-block">
                  {/* Profile Image */}
                  <img
                    src={testimonial.profile}
                    alt="testimonial profile"
                    className="rounded-3"
                    style={{
                      width: "100px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />

                  {/* Status Dot */}
                  <div
                    className="green-bg rounded-circle position-absolute"
                    style={{
                      width: "40px",
                      height: "40px",
                      bottom: "50%",
                      right: "0",
                      transform: "translate(50%, 50%)",
                    }}
                  ></div>
                </div>

                {/* Text Info */}
                <div className="mt-3 px-4">
                  <h5 className="fw-bold">{testimonial.name}</h5>
                  <p className="text-muted fst-italic">{testimonial.message}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TestimonialsSection;
