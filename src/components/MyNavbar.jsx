import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router";
import { FaSearch, FaHome } from "react-icons/fa";

function MyNavbar({ logo, tabs = [], routes = [], actions = [] }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary p-0">
      <Container className="p-0">
        <Navbar.Brand href="/">
          <NavLink className="nav-link border-0" to={"/"}>
            <img src={logo} alt={logo?.alt || "Logo"} height={40} />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto pe-5">
            {tabs.map((tab, index) =>
              tab.dropdown ? (
                <NavDropdown
                  className="mx-3"
                  key={index}
                  title={tab.title}
                  id={`nav-dropdown-${index}`}
                >
                  {tab.items.map((item, i) =>
                    item === "divider" ? (
                      <NavDropdown.Divider key={i} />
                    ) : (
                      <NavDropdown.Item key={i} href={item.href}>
                        {item.label}
                      </NavDropdown.Item>
                    )
                  )}
                </NavDropdown>
              ) : (
                <NavLink
                  className="nav-link tabs mx-3"
                  to={tab.href}
                  key={index}
                >
                  {tab.label}
                </NavLink>
              )
            )}
          </Nav>
          <Nav>
            {routes.map((route, i) => (
              <NavLink
                className="nav-link border-0 fs-4 p-0"
                key={i}
                to={route.to}
              >
                {i === 0 ? <FaSearch /> : <FaHome className="ms-4" />}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
