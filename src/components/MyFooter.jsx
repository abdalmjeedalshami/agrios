import React from "react";
import logo from "../assets/icons/logo.svg";

import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const MyFooter = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 px-4">
      <div className="container">
        <div className="row gy-4">
          {/* Logo + Description + Social */}
          <div className="col-md-3">
            <div className="d-flex align-items-center mb-3">
              <img
                src={logo}
                alt="Logo"
                width={40}
                height={40}
                className="me-2"
              />
              <h4 className="mb-0">Agrios</h4>
            </div>
            <p className="small text-light">
              There are many variations of passages of lorem ipsum available,
              but the majority suffered.
            </p>
            <div className="d-flex gap-3 fs-5">
              <FaTwitter className="hover-opacity" />
              <FaFacebookF className="hover-opacity" />
              <FaPinterestP className="hover-opacity" />
              <FaInstagram className="hover-opacity" />
            </div>
          </div>

          {/* Explore */}
          <div className="col-md-3">
            <h5 className="mb-3 border-start border-4 ps-2 border-success">
              Explore
            </h5>
            <ul className="list-unstyled small text-light">
              <li>About</li>
              <li>Services</li>
              <li>Our Projects</li>
              <li>Meet the Farmers</li>
              <li>Latest News</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* News */}
          <div className="col-md-3">
            <h5 className="mb-3 border-start border-4 ps-2 border-success">
              News
            </h5>
            <div className="small text-light mb-3">
              <strong>Bringing Food Production Back To Cities</strong>
              <br />
              <span className="text-warning">July 5, 2022</span>
            </div>
            <div className="small text-light">
              <strong>The Future of Farming, Smart Irrigation Solutions</strong>
              <br />
              <span className="text-warning">July 5, 2022</span>
            </div>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <h5 className="mb-3 border-start border-4 ps-2 border-success">
              Contact
            </h5>
            <ul className="list-unstyled small text-light">
              <li className="d-flex align-items-center mb-2">
                <FaPhoneAlt className="me-2" /> 666 888 0000
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaEnvelope className="me-2" /> needhelp@company.com
              </li>
              <li className="d-flex align-items-start mb-3">
                <FaMapMarkerAlt className="me-2 mt-1" />
                <span>
                  80 broklyn golden street line
                  <br />
                  New York, USA
                </span>
              </li>
            </ul>
            <form className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email Address"
              />
              <button className="btn btn-success" type="submit">
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-top border-secondary mt-4 pt-3 d-flex flex-column flex-md-row justify-content-between small text-muted">
          <div>© All Copyright 2024 by shawonetc Themes</div>
          <div>
            <a href="#" className="text-muted text-decoration-none me-3">
              Terms of Use
            </a>
            <a href="#" className="text-muted text-decoration-none">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
