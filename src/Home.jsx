import MyHeader from "./components/MyHeader";
import LatestProducts from "./components/LatestProducts";
import OffersSection from "./components/OffersSection";
import BeHealthySection from "./components/BeHealthySection";
import HotDealSection from "./components/HotDealSection";
import OnlyOrganicSection from "./components/OnlyOrganicSection";
import TypesSection from "./components/typesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import MyFooter from "./components/MyFooter";
import fruits from "./assets/images/fruits.png";
import appleBg from "./assets/images/apple-bg.png";
import headerBg from "./assets/images/header-bg.png";
import greenBg from "./assets/images/green-bg.png";
import yellowBg from "./assets/images/yellow-bg.png";
import farmerBg from "./assets/images/farmer-bg.png";
import grape from "./assets/images/product.jpg";
import vegBg from "./assets/images/veg-bg.jpg";
import homeIcon from "./assets/icons/home.svg";
import boxIcon from "./assets/icons/box.svg";
import shippingIcon from "./assets/icons/shipping.svg";
import farmer1Icon from "./assets/icons/farmer1.svg";
import farmer2Icon from "./assets/icons/farmer.svg";

const Home = () => (
  <>
    <MyHeader
      background={headerBg}
      yellowTitle={"Agriculture"}
      normalTitle={"& Organic Market"}
      homeIcon={homeIcon}
      boxIcon={boxIcon}
      shippingIcon={shippingIcon}
    />

    <LatestProducts
      products={[
        {
          id: 1,
          title: "Wireless Headphones",
          image: grape,
          description: "Crystal-clear sound & long battery life.",
          price: "$829",
        },
        {
          id: 2,
          title: "Smartwatch",
          image: grape,
          description: "Track your fitness in style.",
          price: "$129",
        },
        {
          id: 3,
          title: "Bluetooth Speaker",
          image: grape,
          description: "Big sound in a small box.",
          price: "$49",
        },
        {
          id: 4,
          title: "Bluetooth Speaker",
          image: grape,
          description: "Big sound in a small box.",
          price: "$49",
        },
        {
          id: 5,
          title: "Smartwatch",
          image: grape,
          description: "Track your fitness in style.",
          price: "$129",
        },
        {
          id: 6,
          title: "Wireless Headphones",
          image: grape,
          description: "Crystal-clear sound & long battery life.",
          price: "$89",
        },
      ]}
    />

    <OffersSection
      cards={[
        {
          subtitle: "100% ORGANIC",
          title: "Quality Organic Food Store",
          background: greenBg,
        },
        {
          subtitle: "100% ORGANIC",
          title: "Quality Organic Food Store",
          background: yellowBg,
        },
      ]}
    />

    <BeHealthySection
      background={vegBg}
      title={"Be Healthy & Eat Only Fresh Organic Vagetables"}
      btn={"Shop Now"}
    />

    <HotDealSection
      deals={[
        {
          id: 1,
          image: grape,
          title: "Grapes",
          price: 100,
        },
        {
          id: 2,
          image: grape,
          title: "Onions",
          price: 20,
        },
        {
          id: 3,
          image: grape,
          title: "Apples",
          price: 50,
        },
        {
          id: 4,
          image: grape,
          title: "Bananas",
          price: 20,
        },
      ]}
    />

    <OnlyOrganicSection
      image={farmerBg}
      subtitle={"Quality Products"}
      title={"Only Organic Food"}
      desc={
        "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word."
      }
      features={[
        {
          id: 1,
          icon: farmer1Icon,
          title: "Professional Farmers",
          subtitle: "There are many variation of passages of lorem ipsum.",
        },
        {
          id: 2,
          icon: farmer2Icon,
          title: "Solution for Farming",
          subtitle: "There are many variation of passages of lorem ipsum.",
        },
      ]}
      btnText={"Start Shopping Now"}
    />

    <TypesSection
      types={[
        { id: 1, title: "Agriculture Products" },
        { id: 2, title: "Projects Completed" },
        { id: 3, title: "Satisfied Clients" },
        { id: 4, title: "Experts Farmers" },
      ]}
    />

    <TestimonialsSection
      background={fruits}
      testimonials={[
        {
          id: 1,
          // name: "Sarah",
          background: `${appleBg}`,
          profile:
            "https://tse4.mm.bing.net/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
        },
        {
          id: 2,
          // name: "Abd Almjeed",
          background: `${appleBg}`,
          profile:
            "https://tse4.mm.bing.net/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
        },
      ]}
    />

    <MyFooter />
  </>
);
export default Home;
