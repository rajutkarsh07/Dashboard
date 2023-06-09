import "./Dashboard.scss";
import Menu from "../../components/Menu/Menu";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import ScheduleCard from "../../components/ScheduleCard/ScheduleCard";
import graph from "../../assets/graph.png";
// import LineGraph from "../../components/Graph/LineChart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="left">
        <Menu />
      </div>
      <div className="right">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="chart-box">
          <img src={graph} alt="graph" className="chart-box" />
          {/* <LineGraph /> */}
        </div>
        <div className="main-cards">
          <ProductsCard />
          <ScheduleCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
