import Dashboard from "../Dashboard/Dashboard";
import Signin from "../Signin/Signin";
import "./Whole.scss";

const Whole = () => {
  return (
    <div className="whole">
      <Signin />
      <Dashboard />
    </div>
  );
};

export default Whole;
