import { Button } from "react-bootstrap";
import "./MyButton.css"

const MyButton = ({ text, color: bg = "#28a745", textColor: color = "#fff", hoverBg = "#fefe", hoverColor = "#000" }) => {
  return (
    <div>
      <Button
        className="my-button border-0 px-4 px-sm-5 py-2 py-sm-3 rounded-3"
        style={{ "--btn-bg": bg, "--btn-color": color, "--btn-hover-bg": hoverBg, "--btn-hover-color": hoverColor }}
      >
        {text}
      </Button>
    </div>
  );
};

export default MyButton;
