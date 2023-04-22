import "./Menu.scss";
import {
  AiOutlinePieChart,
  AiOutlineTags,
  AiOutlineSchedule,
} from "react-icons/ai";

import { VscAccount, VscGear } from "react-icons/vsc";

const Menu = () => {
  return (
    <div className="Menu">
      <div className="menu-container">
        <h1>Board.</h1>
        <div className="menu-items">
          <div className="menu-items-list">
            <AiOutlinePieChart /> <p>Dashboard</p>
          </div>
          <div className="menu-items-list">
            <AiOutlineTags /> <p>Transactions</p>
          </div>
          <div className="menu-items-list">
            <AiOutlineSchedule /> <p>Schedules</p>
          </div>
          <div className="menu-items-list">
            <VscAccount /> <p>Users</p>
          </div>
          <div className="menu-items-list">
            <VscGear /> <p>Settings</p>
          </div>
        </div>
      </div>
      <div className="menu-footer">
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default Menu;
