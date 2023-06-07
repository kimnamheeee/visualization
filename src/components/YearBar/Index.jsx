import "./YearBar.css";

const YearBar = ({ selectedCircle, setSelectedCircle }) => {
  return (
    <div className="yearbar-container">
      <div className="circle-container">
        <div className="line"></div>
        <div
          className={`circle ${selectedCircle === 0 ? "selected" : ""}`}
          onClick={() => setSelectedCircle(0)}
        ></div>
        <div
          className={`circle ${selectedCircle === 1 ? "selected" : ""}`}
          onClick={() => setSelectedCircle(1)}
        ></div>
        <div
          className={`circle ${selectedCircle === 2 ? "selected" : ""}`}
          onClick={() => setSelectedCircle(2)}
        ></div>
        <div
          className={`circle ${selectedCircle === 3 ? "selected" : ""}`}
          onClick={() => setSelectedCircle(3)}
        ></div>
        <div
          className={`circle ${selectedCircle === 4 ? "selected" : ""}`}
          onClick={() => setSelectedCircle(4)}
        ></div>
      </div>
      <div className="numbers-container">
        <div className={`number ${selectedCircle === 0 ? "chosen" : ""}`}>
          2018
        </div>
        <div className={`number ${selectedCircle === 1 ? "chosen" : ""}`}>
          2019
        </div>
        <div className={`number ${selectedCircle === 2 ? "chosen" : ""}`}>
          2020
        </div>
        <div className={`number ${selectedCircle === 3 ? "chosen" : ""}`}>
          2021
        </div>
        <div className={`number ${selectedCircle === 4 ? "chosen" : ""}`}>
          2022
        </div>
      </div>
    </div>
  );
};

export default YearBar;
