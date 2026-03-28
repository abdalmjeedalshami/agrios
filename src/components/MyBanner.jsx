import { Container } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaTwitter,
  FaFacebook,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

function MyBanner({ loc, email }) {
  return (
    <div className="my-banner green-bg mx-2">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center p-0 py-2 gap-2">
        {/* Location + Email */}
        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
          <a
            className="d-flex align-items-center gap-1 text-white text-decoration-none"
            href="#"
          >
            <IoLocationOutline />
            <p className="m-0">{loc}</p>
          </a>
          <a
            className="d-flex align-items-center gap-1 text-white text-decoration-none"
            href="#"
          >
            <AiOutlineMail />
            <p className="m-0">{email}</p>
          </a>
        </div>

        {/* Social Icons */}
        <div className="d-flex justify-content-center align-items-center gap-3 mt-2 mt-md-0">
          <a className="text-white fs-5" href="#">
            <FaTwitter />
          </a>
          <a className="text-white fs-5" href="#">
            <FaFacebook />
          </a>
          <a className="text-white fs-5" href="#">
            <FaPinterestP />
          </a>
          <a className="text-white fs-5" href="#">
            <FaInstagram />
          </a>
        </div>
      </Container>
    </div>
  );
}

export default MyBanner;
