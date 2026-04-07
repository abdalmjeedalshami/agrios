import { Button } from "react-bootstrap";
import MyButton from "./my_button/MyButton";
import theme from "../theme";

const MyOfferCard = ({ card }) => {
  return (
    <div
      className="bg-dark text-white p-5 rounded"
      style={{
        backgroundImage: `url(${card.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className="m-0">{card.subtitle}</p>
      <p className="fs-2 fw-bold w-50">{card.title}</p>
      <MyButton
        text={"Order Now"}
        color={theme.colors.text.light}
        textColor={theme.colors.text.dark}
      />
    </div>
  );
};

export default MyOfferCard;
