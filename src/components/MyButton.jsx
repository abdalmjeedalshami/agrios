import { Button } from "react-bootstrap";

const MyButton = ({ text, color = "#28a745", textColor = "#fff" }) => {
  return (
    <div>
      <Button
        className="my-button border-0 px-5 py-3 rounded-3"
        style={{ backgroundColor: color, color: textColor }}
      >
        {text}
      </Button>
    </div>
  );
};

export default MyButton;
