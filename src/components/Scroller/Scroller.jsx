import "./Scroller.css";
import arrow from "../../assets/images/arrow.svg";

const Scroller = () => {
  return (
    <div className="scroller">
      <img src={arrow} className="scrollarrow"></img>
      <div className="text scroller-text">스크롤해서 아래로 내려주세요.</div>
    </div>
  );
};

export default Scroller;
