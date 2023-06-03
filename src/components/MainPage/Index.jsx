import "./Index.css";
import mainpage1text from "../../assets/images/mainpage1text.svg";
import Scroller from "../Scroller/Scroller";

export const MainPage1 = () => {
  return (
    <>
      <div className="maintext">
        <img src={mainpage1text} alt="main page1 text" />
      </div>
      <Scroller className="main1scroller" />
    </>
  );
};

export const MainPage2 = () => {
  return (
    <>
      <div className="maintext2">
        <div>그렇다면 16년 동안</div>
        <div>출산율에는 어떤 변화가 있었을까요?</div>
      </div>
      <Scroller />
    </>
  );
};

export const MainPage3 = () => {
  return <></>;
};

export const MainPage4 = () => {
  return (
    <>
      <div className="maintext4">
        <div>그러면 이러한 예산은</div>
        <div>어떻게 운영되고 있었을까요?</div>
        <div>광역별 예산안과 정책을</div>
        <div>정리해보았습니다.</div>
      </div>
      <Scroller />
    </>
  );
};
