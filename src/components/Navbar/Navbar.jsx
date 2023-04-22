import "./Navbar.scss";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import utkarsh from "../../assets/utkarsh.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Dashboard</h2>
      <div className="notification">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <AiOutlineSearch className="icon" />
        </div>
        <AiOutlineBell />
        <img src={utkarsh} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
