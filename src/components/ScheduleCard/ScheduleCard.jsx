import "./ScheduleCard.scss";

const ScheduleCard = () => {
  return (
    <div className="schedule-card">
      <div className="heading">
        <h3>{"Today's Schedule"}</h3>
        <p>See All</p>
      </div>
      <div className="content">
        <div className="items">
          <div className="line"></div>
          <div className="details">
            <h4>Meeting with suppliers from Kuta Bali</h4>
            <p>14.00-15.00</p>
            <p>at Sunset Road, Kuta, Bali </p>
          </div>
        </div>
        <div className="items">
          <div className="line"></div>
          <div className="details">
            <h4>Meeting with suppliers from Kuta Bali</h4>
            <p>14.00-15.00</p>
            <p>at Sunset Road, Kuta, Bali </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
