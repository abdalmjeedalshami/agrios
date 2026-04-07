import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyNavbar from "./components/MyNavbar";
import MyBanner from "./components/my_banner/MyBanner";
import logo from "./assets/icons/logo.svg";
import "./App.css";
import { FaHome, FaSearch } from "react-icons/fa";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyBanner
          classes={"d-none d-md-block"}
          loc={"88 Road Broklyn Golden Street. New York"}
          email={"support@agrios.com"}
        />

        <MyNavbar
          logo={logo}
          tabs={[
            {
              dropdown: true,
              title: "Home",
              items: [
                { label: "Home 1", href: "#home1" },
                { label: "Home 2", href: "#home2" },
                "divider",
                { label: "Separated Link", href: "#separated" },
              ],
            },
            { label: "About", href: "about" },
            {
              dropdown: true,
              title: "Services",
              items: [
                { label: "Services 1", href: "#services1" },
                { label: "Services 2", href: "#services2" },
                "divider",
                { label: "Separated Link", href: "#separated" },
              ],
            },
            {
              dropdown: true,
              title: "Projects",
              items: [
                { label: "Projects 1", href: "#projects1" },
                { label: "Projects 2", href: "#projects2" },
                "divider",
                { label: "Separated Link", href: "#separated" },
              ],
            },
            {
              dropdown: true,
              title: "News",
              items: [
                { label: "News 1", href: "#news1" },
                { label: "News 2", href: "#news2" },
                "divider",
                { label: "Separated Link", href: "#separated" },
              ],
            },
            {
              dropdown: true,
              title: "Shop",
              items: [
                { label: "Shop 1", href: "#shop1" },
                { label: "Shop 2", href: "#shop2" },
                "divider",
                { label: "Separated Link", href: "#separated" },
              ],
            },
            { label: "Contact", href: "contact" },
          ]}
          routes={[{ icon: <FaSearch></FaSearch>, to: "/search" }, { icon: <FaHome></FaHome>, to: "/home" }]}
          actions={[
            {
              label: "Log out",
              onClick: () => alert("Logging out..."),
            },
          ]}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
