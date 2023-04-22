import "./ProductsCard.scss";
import chart from "../../assets/chart.png";

const ProductsCard = () => {
  return (
    <div className="products-card">
      <div className="heading">
        <h3>Top products</h3>
        <p>May - June 2021</p>
      </div>
      <div className="content">
        <img src={chart} alt="chart" />
        <div className="info">
          <div className="items">
            <div className="dot-box">
              <div className="dot"></div>
            </div>
            <div className="detail">
              <h4>Basic Trees</h4>
              <p>55%</p>
            </div>
          </div>
          <div className="items">
            <div className="dot-box">
              <div className="dot"></div>
            </div>
            <div className="detail">
              <h4>Basic Trees</h4>
              <p>55%</p>
            </div>
          </div>
          <div className="items">
            <div className="dot-box">
              <div className="dot"></div>
            </div>
            <div className="detail">
              <h4>Basic Trees</h4>
              <p>55%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
