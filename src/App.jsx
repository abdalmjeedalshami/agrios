import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyNavbar from "./components/MyNavbar";
import MyBanner from "./components/MyBanner";
import logo from "./assets/icons/logo.svg";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyBanner
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
                { label: "Action 1", href: "#action1" },
                { label: "Action 2", href: "#action2" },
                "divider",
                { label: "Separated Link", href: "#separated" },
              ],
            },
            { label: "About", href: "about" },
            {
              dropdown: true,
              title: "Services",
              items: [
                { label: "Action 1", href: "#action1" },
                { label: "Action 2", href: "#action2" },
                "divider",
                { label: "Separated Link", href: "#separated" },
              ],
            },
            {
              dropdown: true,
              title: "Projects",
              items: [
                { label: "Action 1", href: "#action1" },
                { label: "Action 2", href: "#action2" },
                "divider",
                { label: "Separated Link", href: "#separated" },
              ],
            },
            {
              dropdown: true,
              title: "News",
              items: [
                { label: "Action 1", href: "#action1" },
                { label: "Action 2", href: "#action2" },
                "divider",
                { label: "Separated Link", href: "#separated" },
              ],
            },
            {
              dropdown: true,
              title: "Shop",
              items: [
                { label: "Action 1", href: "#action1" },
                { label: "Action 2", href: "#action2" },
                "divider",
                { label: "Separated Link", href: "#separated" },
              ],
            },
            { label: "Contact", href: "contact" },
          ]}
          routes={[{ to: "/search" }, { to: "/" }]}
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
