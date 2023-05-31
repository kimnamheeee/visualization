import "./Scroller.css";

const Scroller = () => {
  return (
    <div className="scroller">
      <div className="arrow">
        <span className="scroll_arrows one"></span>
        <span className="scroll_arrows two"></span>
        <span className="scroll_arrows three"></span>
      </div>
      <div className="text">스크롤해서 아래로 내려주세요.</div>
    </div>
  );
};

export default Scroller;
