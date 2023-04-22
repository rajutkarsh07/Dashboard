import "./Card.scss";
import { GrTransaction } from "react-icons/gr";

const Card = () => {
  return (
    <div className="Card">
      <div className="icon">
        <GrTransaction />
      </div>
      <div className="content">
        <div className="tag">Total Revenues</div>
        <div className="number">$2,129,430</div>
      </div>
    </div>
  );
};

export default Card;
