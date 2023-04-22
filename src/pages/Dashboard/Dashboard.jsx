import "./Dashboard.scss";
import Menu from "../../components/Menu/Menu";
import Card from "../../components/Card/Card";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="left">
        <Menu />
      </div>
      <div className="right">
        <div className="menubar">
          <h2>Dashboard</h2>
        </div>
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="chart-box"></div>
        <div className="main-cards"></div>
      </div>
    </div>
  );
};

export default Dashboard;
